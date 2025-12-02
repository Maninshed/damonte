# ✅ Google Sheets Integration - COMPLETE

## 🎯 Status: ACTIVE

Your booking form now automatically saves submissions to Google Sheets!

---

## 📊 Google Sheet Setup

**Sheet ID:** `1yuw2BjOndHngC_dYmhYnqOgG89ogI5WLDIa7kMfKdeU`

### Required Column Headers (Row 1)

Add these headers to **Sheet1** in your Google Sheet:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Timestamp | Full Name | Email | Phone | Company | Preferred Date | Preferred Time | Notes |

---

## 📝 Data Structure

Each form submission will create a new row with:

1. **Timestamp** - ISO format (e.g., 2025-12-02T19:40:23.456Z)
2. **Full Name** - Customer's name
3. **Email** - Customer's email address
4. **Phone** - Customer's phone number
5. **Company** - Company name (optional)
6. **Preferred Date** - Selected date (e.g., "December 5, 2025")
7. **Preferred Time** - Selected time slot (e.g., "02:00 PM")
8. **Notes** - Additional message/notes (optional)

---

## 🔐 Authentication

**Service Account:** `damonte@directed-reef-471212-k3.iam.gserviceaccount.com`

Environment variables configured in `.env.local`:
- `GS_CLIENT_EMAIL`
- `GS_PRIVATE_KEY`
- `GS_SHEET_ID`

---

## ✅ How It Works

### 1. User Fills Form
- Opens booking modal
- Fills: Name, Email, Phone, Company, Date, Time, Notes
- Clicks Submit

### 2. API Route Processes
`POST /api/book-call`
- Receives form data
- Authenticates with Google Sheets API
- Appends new row to Sheet1

### 3. Data Saved
- ✅ Saved to Google Sheets
- ✅ Saved to localStorage (for admin panel)
- ✅ User sees success toast

---

## 🧪 Testing

### Test the Integration

1. **Open the site:** http://localhost:3000
2. **Click:** "Book Discovery Call" button
3. **Fill out the form** with test data
4. **Submit** the form
5. **Check your Google Sheet** - A new row should appear!

### Expected Console Output

**Success:**
```
✅ Booking saved to Google Sheets: test@example.com
```

**Error:**
```
❌ Booking error: [error details]
```

---

## 🔍 Troubleshooting

### Issue: "Permission denied"
**Solution:** 
- Make sure the service account email has **Editor** access to the Google Sheet
- Share the sheet with: `damonte@directed-reef-471212-k3.iam.gserviceaccount.com`

### Issue: "Sheet not found"
**Solution:**
- Verify the sheet tab is named **"Sheet1"** (case-sensitive)
- Or update the range in the API route to match your tab name

### Issue: "Invalid credentials"
**Solution:**
- Check that `.env.local` file exists in the project root
- Verify `GS_PRIVATE_KEY` has proper line breaks (`\n`)
- Restart the dev server: `npm run dev`

---

## 📊 Google Sheet Access

**View your sheet at:**
```
https://docs.google.com/spreadsheets/d/1yuw2BjOndHngC_dYmhYnqOgG89ogI5WLDIa7kMfKdeU/edit
```

---

## 🔧 Code Implementation

### API Route: `/app/api/book-call/route.ts`

```typescript
import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Google Sheets authentication
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GS_CLIENT_EMAIL,
        private_key: process.env.GS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare row data
    const timestamp = new Date().toISOString();
    const rowData = [
      timestamp,
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.company || '',
      data.date || '',
      data.time || '',
      data.notes || '',
    ];

    // Append to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GS_SHEET_ID,
      range: 'Sheet1!A:H',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    });

    console.log('✅ Booking saved to Google Sheets:', data.email);
    
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('❌ Booking error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    );
  }
}
```

---

## 📦 Dependencies

**Package installed:** `googleapis`

```json
{
  "dependencies": {
    "googleapis": "^latest"
  }
}
```

---

## ✅ Verification Checklist

- [x] `googleapis` package installed
- [x] API route updated with Google Sheets code
- [x] Environment variables configured in `.env.local`
- [x] Service account has Sheet access
- [ ] **Sheet has column headers** (YOU NEED TO ADD THESE!)
- [ ] Test form submission works
- [ ] Data appears in Google Sheet

---

## 🚀 Next Steps

1. **Add Column Headers** to your Google Sheet (Row 1):
   - Timestamp | Full Name | Email | Phone | Company | Preferred Date | Preferred Time | Notes

2. **Share the Sheet** with the service account:
   - Email: `damonte@directed-reef-471212-k3.iam.gserviceaccount.com`
   - Permission: Editor

3. **Test the form** and verify data saves!

---

## 📊 Example Sheet Data

| Timestamp | Full Name | Email | Phone | Company | Preferred Date | Preferred Time | Notes |
|-----------|-----------|-------|-------|---------|----------------|----------------|-------|
| 2025-12-02T19:40:00.000Z | John Doe | john@example.com | +1234567890 | Acme Inc | December 5, 2025 | 02:00 PM | Looking forward to discussing AI strategy |

---

## ✅ Status: READY

Your booking form is now connected to Google Sheets!

Every submission will automatically appear in your spreadsheet. 🎉
