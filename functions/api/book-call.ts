interface Env {
  GS_CLIENT_EMAIL: string;
  GS_PRIVATE_KEY: string;
  GS_SHEET_ID: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const data = await context.request.json();
    
    // Get credentials from environment
    const clientEmail = context.env.GS_CLIENT_EMAIL;
    const privateKey = context.env.GS_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const sheetId = context.env.GS_SHEET_ID;

    if (!clientEmail || !privateKey || !sheetId) {
      console.error('Missing Google Sheets credentials');
      return new Response(JSON.stringify({ error: 'Server configuration error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create JWT for Google Sheets API
    const now = Math.floor(Date.now() / 1000);
    const jwt = await createJWT(clientEmail, privateKey, now);
    
    // Get access token
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwt,
      }),
    });

    const tokenData = await tokenResponse.json() as { access_token?: string };
    if (!tokenData.access_token) {
      throw new Error('Failed to get access token');
    }

    // Prepare row data
    const timestamp = new Date().toISOString();
    const rowData = [
      [
        timestamp,
        data.fullName || '',
        data.email || '',
        data.phone || '',
        data.company || '',
        data.date || '',
        data.time || '',
        data.notes || '',
      ],
    ];

    // Append to Google Sheet
    const sheetsResponse = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1!A:H:append?valueInputOption=USER_ENTERED`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${tokenData.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ values: rowData }),
      }
    );

    if (!sheetsResponse.ok) {
      const error = await sheetsResponse.text();
      console.error('Google Sheets error:', error);
      throw new Error('Failed to save to Google Sheets');
    }

    console.log('✅ Booking saved to Google Sheets:', data.email);
    
    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('❌ Booking error:', error);
    return new Response(JSON.stringify({ error: 'Failed to process booking' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

// Helper function to create JWT for Google API authentication
async function createJWT(clientEmail: string, privateKey: string, now: number): Promise<string> {
  const header = { alg: 'RS256', typ: 'JWT' };
  const payload = {
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  };

  const encodedHeader = base64urlEncode(JSON.stringify(header));
  const encodedPayload = base64urlEncode(JSON.stringify(payload));
  const signatureInput = `${encodedHeader}.${encodedPayload}`;

  // Import the private key and sign
  const key = await crypto.subtle.importKey(
    'pkcs8',
    pemToArrayBuffer(privateKey),
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    key,
    new TextEncoder().encode(signatureInput)
  );

  const encodedSignature = base64urlEncode(String.fromCharCode(...new Uint8Array(signature)));
  return `${signatureInput}.${encodedSignature}`;
}

function base64urlEncode(str: string): string {
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function pemToArrayBuffer(pem: string): ArrayBuffer {
  const base64 = pem
    .replace(/-----BEGIN PRIVATE KEY-----/, '')
    .replace(/-----END PRIVATE KEY-----/, '')
    .replace(/\s/g, '');
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}
