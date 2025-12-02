# 🚀 Cloudflare Pages Deployment Guide

## ✅ Fixed: bun.lockb Removed

The `bun.lockb` file has been removed to ensure compatibility with npm deployment.

---

## 📋 Cloudflare Pages Configuration

### Build Settings

**Framework preset:** `Next.js`

**Build command:**
```bash
npm run build
```

**Build output directory:**
```
.next
```

**Node version:**
```
22
```

---

## 🔐 Environment Variables

Add these in Cloudflare Pages Dashboard → Settings → Environment variables:

### Required Variables

```env
GS_CLIENT_EMAIL=damonte@directed-reef-471212-k3.iam.gserviceaccount.com

GS_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC+S/NrIjjNBLMY
OKZ8EilnQVlADJb87OGzNv4pWbNUPgPqVMc1R22cQD4GXVZ8wpmExNLxdXoOQfC4
+5vGCkzXJlHG1iHCQcgOPJdlzf0u0p9PHoEOV6qhNLDlHpLtYLOAUVZHmBMf1HLa
gvZ4nVV3vCkQwJeHFztMEh9cCx2xJcTXvVf5r2LNJVBrKJsAb5vLg8RtKPvPdZ4D
L8LXd3vZ8bZvVHN+6dBz0bZJ9wEPfYPCBjG4K8xVYN0oLXEPfL3bVJZ5VjCPxLVN
oZ5J5NvLZVJYLJNvYLJNvYLJNvYLJNvYLJNvYLJNvYLJNvYLJNvYLJNvYLJNvYLJ
NvYLJNvYLJNvYLJNvYLJNvYLJNvYLJNvYLJNvYLJNvYLJNvYLJNvYLJNvYLJNvYL
JNvYLJNvYLJNvYLJNvAgMBAAECggEABqFz6fD7qJ8VJ+3vLJPxQ8VPZ5VJ+3vLJPxQ
[... REST OF YOUR PRIVATE KEY ...]
-----END PRIVATE KEY-----

GS_SHEET_ID=1yuw2BjOndHngC_dYmhYnqOgG89ogI5WLDIa7kMfKdeU
```

**Important:** Copy the FULL private key from your `.env.local` file, including:
- `-----BEGIN PRIVATE KEY-----`
- All the key content (multiple lines)
- `-----END PRIVATE KEY-----`

---

## 🔧 Deployment Steps

### 1. Connect Repository

1. Go to Cloudflare Pages Dashboard
2. Click "Create a project"
3. Connect to Git
4. Select repository: `Maninshed/gpt-build-accelerator`
5. Click "Begin setup"

### 2. Configure Build Settings

**Production branch:** `main`

**Build settings:**
- Framework preset: `Next.js`
- Build command: `npm run build`
- Build output directory: `.next`
- Root directory: `/` (leave default)

**Environment variables:**
Click "Add variable" for each:
- `GS_CLIENT_EMAIL` = your service account email
- `GS_PRIVATE_KEY` = your full private key (multi-line)
- `GS_SHEET_ID` = your spreadsheet ID

### 3. Advanced Settings (Optional)

**Node.js version:**
- The `.node-version` file sets this to `22` automatically

**Build timeout:**
- Default (15 minutes) should be fine

### 4. Deploy!

Click "Save and Deploy"

---

## 🔍 Troubleshooting

### Error: "lockfile had changes, but lockfile is frozen"
**Fixed!** The `bun.lockb` file has been removed.

### Error: "Module not found: googleapis"
**Solution:** Make sure `npm run build` is the build command (not `bun install`)

### Error: "Invalid credentials" for Google Sheets
**Solution:** 
1. Check that `GS_PRIVATE_KEY` includes the full key with BEGIN/END markers
2. Verify the key has `\n` preserved (Cloudflare handles this automatically)
3. Ensure service account has Editor access to the sheet

### Build succeeds but page is blank
**Solution:**
1. Check browser console for errors
2. Verify environment variables are set in Cloudflare dashboard
3. Check deployment logs for Next.js errors

---

## 📊 Expected Build Output

```
Success: Finished cloning repository files
Detected the following tools: npm@10.9.2, nodejs@22.16.0
Installing project dependencies: npm install
Building application: npm run build
✓ Compiled successfully
✓ Ready in X seconds
Success: Finished building application
Deploying...
Success: Deployed to [your-site].pages.dev
```

---

## 🌐 Custom Domain (Optional)

After deployment:

1. Go to your project → Custom domains
2. Click "Set up a custom domain"
3. Enter your domain (e.g., `damonte.ai`)
4. Follow DNS instructions
5. SSL certificate will be provisioned automatically

---

## ✅ Post-Deployment Checklist

- [ ] Build completed successfully
- [ ] Environment variables configured
- [ ] Page loads at `*.pages.dev` URL
- [ ] Booking form opens
- [ ] Form validation works
- [ ] Test submission saves to Google Sheets
- [ ] Check Sheet for new row with test data

---

## 🔗 Useful Links

**Your Deployment:**
- Check deployment status in Cloudflare dashboard
- View build logs for any errors
- Test at: `your-project.pages.dev`

**Documentation:**
- [Next.js on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [Environment Variables](https://developers.cloudflare.com/pages/configuration/build-configuration/#environment-variables)

---

## 💡 Pro Tips

1. **Preview Deployments:** Every git push creates a preview deployment
2. **Build Cache:** Cloudflare caches `node_modules` for faster builds
3. **Edge Runtime:** Consider using `@cloudflare/next-on-pages` for edge deployment
4. **Analytics:** Enable Cloudflare Web Analytics in dashboard

---

## 🚀 Alternative: Deploy to Vercel

If you prefer Vercel (recommended for Next.js):

```bash
npm i -g vercel
vercel
```

Then add environment variables in Vercel dashboard.

---

## ✅ Status

- ✅ `bun.lockb` removed
- ✅ `.node-version` added
- ✅ Repository updated
- ✅ Ready for Cloudflare Pages deployment

**Retry your deployment now!** 🎉
