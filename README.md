# PC Kids Halloween Scavenger Hunt 2025

Welcome to the PC Kids Halloween Scavenger Hunt! This web app is designed for a fun, safe, and interactive scavenger hunt experience for elementary-age kids. Each clue is accessed by scanning a unique QR code, leading to a special hint page. The hunt is Halloween-themed, with colorful, kid-friendly visuals and a secret index for grown-ups to manage the event. After solving all the clues, kids are directed to a congratulations page to claim their prize!

---

## Building & Deploying to GitHub Pages

### Build the App

To generate the static site for deployment:

```bash
node qr-generate.js
npm run build
```

This will output all static files to the `docs/` directory, which is already configured for GitHub Pages.

### Deploy to GitHub Pages

1. Commit and push your changes to your GitHub repository.
2. In your repository settings on GitHub, go to the **Pages** section.
3. Set the source to the `docs/` folder on the `main` branch.
4. Save your settings. Your site will be available at `https://<your-username>.github.io/<repo-name>/`.

---

## Development & Deployment

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying files in `src/app`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

---

## QR Code Generation

The app can generate QR codes for each hint and the congratulations page. These QR codes are placed in `public/qr-codes/` and are accessible by the web app for printing or sharing.

### How to Generate QR Codes

1. **Install dependencies** (if you haven't already):
   ```bash
   npm install
   ```

2. **Run the QR code generator script:**
   ```bash
   node qr-generate.js
   ```
   - This will:
     - Delete any existing QR codes in `public/qr-codes/`.
     - Generate a new QR code for each hint (named `hint-1.png`, `hint-2.png`, etc.) and for the congratulations page (`congratulations.png`).
     - All QR codes will be accessible at `/qr-codes/hint-1.png`, `/qr-codes/hint-2.png`, etc. in your deployed app.

3. **Print or share the QR codes** as needed for your scavenger hunt event!

---

