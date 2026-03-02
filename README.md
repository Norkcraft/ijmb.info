# IJMB Marketing Website (Next.js 14)

## Run locally
```bash
npm install
npm run dev
```

## Replace images
1. Put your real image files into:
   - `public/assets/logo`
   - `public/assets/hero`
   - `public/assets/sections`
   - `public/assets/students`
   - `public/assets/centres`
   - `public/assets/icons`
2. Update paths in `src/lib/assets.ts`.

## Edit palette colors
- Change colors in `src/lib/theme/palette.ts`.
- Mirror exact values in CSS variables in `src/app/globals.css`.

## Deploy to Vercel
1. Push this repo to GitHub.
2. Import project in Vercel.
3. Use default Next.js build settings.
4. Add your domain `www.ijmb.com` in Vercel settings.
