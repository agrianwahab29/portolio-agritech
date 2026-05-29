# AgriTech Portfolio

Website portofolio personal-profesional milik **Agrian Wahab**, dibangun dengan **Next.js 15 + TypeScript + Tailwind CSS + GSAP**, di-deploy ke **Vercel**.

> Static-first portfolio. Tidak ada database, tidak ada backend, tidak ada auth. Data lokal di `data/*.ts`.

## Tech Stack

- Next.js 15 (App Router, static generation)
- TypeScript 5.x (strict mode)
- Tailwind CSS 3.x
- GSAP 3.x + @gsap/react + ScrollTrigger
- Lucide React icons
- Deploy: Vercel

## Struktur

Lihat [`AGENTS.md`](./AGENTS.md) untuk panduan AI agent. Lihat [`DESIGN.md`](./DESIGN.md) untuk color palette + design tokens. Lihat [`PRD_AgriTech_GSAP_Portfolio.md`](./PRD_AgriTech_GSAP_Portfolio.md) untuk spesifikasi produk.

## Setup

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Tambah Proyek Baru

1. Tambah screenshot ke `public/images/projects/`.
2. Tambah object di `data/projects.ts`.
3. Commit + push ke `main`.
4. Vercel auto-deploy.

## Update CV

1. Replace file di `public/cv/CV_Agrian_Wahab.pdf`.
2. Push ke `main`.

## Deploy

Push ke `main` di GitHub akan trigger auto-deploy Vercel. Repo: [agrianwahab29/portolio-agritech](https://github.com/agrianwahab29/portolio-agritech).

---

**AgriTech** — *Modern Web & Information Systems.*
