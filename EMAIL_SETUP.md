# 📧 Email Booking System - Setup Guide

## ✅ Implementation Complete

Your booking form now sends emails to `dave@damonteuk.com` via the Resend API.

## 🏗️ Architecture (Vite + Netlify Functions)

Since this is a **Vite React app** (not Next.js), the email system uses **Netlify Functions** (serverless):

```
User fills form → BookingForm.tsx
       ↓
POST to /.netlify/functions/book-call
       ↓
Netlify Function (book-call.ts)
       ↓
Resend API
       ↓
Email sent to dave@damonteuk.com
```

## 📁 Files Created

### 1. Netlify Function
**File:** `/netlify/functions/book-call.ts`
- Handles POST requests from the booking form
- Sends emails via Resend API
- Returns success/error responses

### 2. Netlify Configuration
**File:** `/netlify.toml`
- Configures build settings
- Sets up function directory
- Handles client-side routing

### 3. Updated Booking Form
**File:** `/src/components/BookingForm.tsx`
- Now sends email via Netlify function
- Maps form fields to email payload
- Shows success/error toast notifications

## 🔧 Setup Instructions

### Step 1: Get Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up or log in
3. Navigate to **API Keys**
4. Create a new API key
5. Copy the key (starts with `re_`)

### Step 2: Configure Domain (Important!)

In Resend dashboard:
1. Go to **Domains**
2. Add `damonteuk.com`
3. Add the DNS records Resend provides
4. Verify the domain

**Note:** The "from" email is `no-reply@damonteuk.com` - this domain must be verified in Resend.

### Step 3: Set Environment Variable

#### For Local Development:
Create a `.env` file in the project root:
```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

#### For Netlify Deployment:
1. Go to your Netlify dashboard
2. Select your site
3. Go to **Site settings → Environment variables**
4. Add variable:
   - **Key:** `RESEND_API_KEY`
   - **Value:** Your Resend API key

### Step 4: Deploy to Netlify

```bash
# Install Netlify CLI (if not already)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Deploy
netlify deploy --prod
```

## 📧 Email Format

Emails sent to `dave@damonteuk.com` will include:

```
Subject: New Discovery Call Request

New AI Strategy Discovery Call Request:

Name: [Full Name]
Email: [user@example.com]
Phone: [+1234567890]
Company: [Company Name or N/A]

Preferred Date: [December 2, 2025]
Preferred Time: [02:00 PM]

Notes:
[User's message or None]
```

## 🧪 Testing

### Local Testing (with Netlify Dev):
```bash
# Install dependencies
npm install

# Start Netlify dev server (runs Vite + Functions)
netlify dev
```

Then test the booking form at `http://localhost:8888`

### Production Testing:
1. Deploy to Netlify
2. Fill out the booking form on your live site
3. Check `dave@damonteuk.com` inbox

## 🔍 Troubleshooting

### Email not sending?

1. **Check API Key:**
   - Verify `RESEND_API_KEY` is set in Netlify environment variables
   - Make sure key starts with `re_`

2. **Check Domain:**
   - Verify `damonteuk.com` is added and verified in Resend
   - Check DNS records are correct

3. **Check Function Logs:**
   - Go to Netlify dashboard → Functions → book-call
   - View logs for error messages

4. **Check Network Request:**
   - Open browser DevTools → Network tab
   - Submit form and check the `book-call` request
   - Look for 200 (success) or 500 (error) status

### Common Errors:

**Error:** `Domain not verified`
- **Fix:** Add and verify `damonteuk.com` in Resend dashboard

**Error:** `Invalid API key`
- **Fix:** Check RESEND_API_KEY environment variable

**Error:** `Function not found`
- **Fix:** Ensure `netlify.toml` is configured correctly

## 📋 Dependencies Added

```json
{
  "devDependencies": {
    "@netlify/functions": "^latest",
    "@types/node": "^latest"
  }
}
```

## 🚀 Deployment Checklist

- [ ] Resend account created
- [ ] `damonteuk.com` domain added and verified in Resend
- [ ] API key generated in Resend
- [ ] `RESEND_API_KEY` added to Netlify environment variables
- [ ] Code deployed to Netlify
- [ ] Test form submission
- [ ] Check email received at `dave@damonteuk.com`

## 📊 Current Status

✅ **BookingForm.tsx** - Updated to send emails
✅ **Netlify Function** - Created at `/netlify/functions/book-call.ts`
✅ **Netlify Config** - Created `netlify.toml`
✅ **Dependencies** - Installed `@netlify/functions` and `@types/node`
✅ **Error Handling** - Graceful error messages
✅ **Success Messages** - Toast notifications

## 🔗 Useful Links

- [Resend Dashboard](https://resend.com/dashboard)
- [Netlify Functions Docs](https://docs.netlify.com/functions/overview/)
- [Resend API Docs](https://resend.com/docs/api-reference/emails/send-email)

---

**Next Step:** Add your Resend API key to Netlify environment variables and deploy!
