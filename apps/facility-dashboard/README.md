# Facility Dashboard

Web dashboard for hospital staff, PHCs, and health administrators built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with sidebar navigation
│   ├── page.tsx        # Dashboard home (metrics + referral queue)
│   ├── loading.tsx     # Loading spinner state
│   ├── error.tsx       # Error boundary with retry
│   └── globals.css     # Tailwind base styles
├── components/
│   └── Navigation.tsx  # Sidebar navigation shell
└── lib/
    └── api.ts          # API client abstraction for FastAPI backend
```

## Local Development

```bash
npm install
npm run dev
```

Dashboard runs at http://localhost:3000

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `NEXT_PUBLIC_API_URL` | `http://localhost:8000` | FastAPI backend URL |

## Scripts

```bash
npm run dev    # Start dev server
npm run build  # Production build
npm run start  # Start production server
npm run lint   # Run ESLint
```
