# Florería Muñiz

Landing page built with React, Vite, and Tailwind CSS.

## Local Development

Prerequisites:

- Node.js 20+
- npm 10+

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Deploy on Vercel

This project is configured for Vercel as a Vite static app.

Files already added for deployment:

- `vercel.json`: explicit Vercel build/output settings
- `.env.example`: local environment reference

Recommended Vercel project settings:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

If you deploy from the Vercel dashboard:

1. Import the Git repository.
2. Confirm the detected framework is `Vite`.
3. Leave the build settings as shown above.
4. Add any environment variables in `Project Settings > Environment Variables`.
5. Deploy.

If you later add client-side public environment variables, use the `VITE_` prefix.
Private secrets should stay on the server side and should not be embedded into browser code.
