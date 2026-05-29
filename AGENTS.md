# AGENTS.md — AgrianTech Portfolio

Panduan untuk AI coding agent (Claude Code, Cursor, Copilot, dll) yang bekerja di repositori ini. Baca dokumen ini sebelum mengubah kode.

---

## 1. Tentang Proyek

**AgrianTech Portfolio** adalah website portofolio personal-profesional milik **Agrian Wahab**, dibangun dengan **Next.js + TypeScript + Tailwind CSS + GSAP**, di-deploy ke **Vercel**.

- **Static-first.** Tidak ada database, tidak ada backend, tidak ada auth/login.
- **Data lokal.** Semua konten disimpan di file TypeScript dalam folder `data/`.
- **Animasi.** GSAP + ScrollTrigger untuk motion cinematic, dengan dukungan `prefers-reduced-motion`.
- **Sumber kebenaran produk:** `PRD_AgrianTech_GSAP_Portfolio.md`
- **Sumber kebenaran visual:** `DESIGN.md`

> Selalu konsultasikan PRD dan DESIGN.md sebelum membuat keputusan produk atau visual.

---

## 2. Tech Stack

| Layer | Teknologi | Catatan |
|-------|-----------|---------|
| Framework | Next.js 15 (App Router) | Static generation |
| Language | TypeScript 5.x | strict mode |
| Styling | Tailwind CSS | token dari DESIGN.md |
| Animation | GSAP 3.x + @gsap/react | ScrollTrigger |
| Icons | Lucide React | - |
| Deploy | Vercel | auto-deploy dari `main` |

### Dilarang dipakai

- Database apapun (MySQL, PostgreSQL, Supabase DB, Firebase, MongoDB)
- Authentication / login / session
- Admin panel / CMS
- Framer Motion, react-spring, anime.js (GSAP saja)
- Backend API server terpisah

---

## 3. Struktur Folder (Wajib Diikuti)

```txt
portofolio/
├── app/                  # Next.js App Router (pages, layout, metadata)
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── projects/
│   ├── about/
│   ├── publications/
│   └── contact/
├── components/           # React components
│   ├── layout/           # Navbar, Footer, MobileMenu
│   ├── sections/         # Hero, QuickStats, FeaturedProjects, dll
│   ├── projects/         # ProjectCard, ProjectFilter
│   ├── animations/       # FadeUp, TextReveal, StaggerReveal
│   └── ui/               # Button, Badge, Card, Container
├── data/                 # Konten (TypeScript objects)
│   ├── profile.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   ├── publications.ts
│   ├── certificates.ts
│   ├── services.ts
│   └── socials.ts
├── content/projects/     # MDX case studies (opsional)
├── lib/                  # Utilities
│   ├── gsap.ts
│   ├── utils.ts
│   ├── constants.ts
│   └── metadata.ts
├── types/                # TypeScript types
│   └── index.ts
├── public/               # Static assets
│   ├── images/
│   ├── cv/
│   └── favicon.ico
├── PRD_AgrianTech_GSAP_Portfolio.md
├── DESIGN.md
├── AGENTS.md
└── README.md
```

Aturan:
1. Banyak file kecil > sedikit file besar (high cohesion, low coupling).
2. Target ukuran file: 200-400 baris, maksimal 800.
3. Organisasi by feature/domain, bukan by type.

---

## 4. Konvensi Coding

### 4.1 TypeScript

- Gunakan `strict: true` selalu.
- Tipe data eksplisit di public API; inferensi OK untuk lokal.
- Hindari `any` dan `unknown` kecuali ada alasan jelas.
- Definisikan tipe data konten di `types/index.ts`.

### 4.2 React / Next.js

- **Server Component default.** `use client` HANYA untuk yang butuh interaktivitas (Navbar, animasi GSAP, ProjectFilter).
- Static generation untuk semua halaman utama.
- `generateStaticParams` untuk `/projects/[slug]`.
- Metadata per halaman wajib lewat `export const metadata`.

### 4.3 Immutability

```ts
// SALAH
function update(obj, value) {
  obj.name = value
  return obj
}

// BENAR
function update(obj, value) {
  return { ...obj, name: value }
}
```

### 4.4 Styling

- Tailwind utility classes — token dari DESIGN.md.
- Dilarang hardcode warna hex di JSX. Pakai variabel CSS / Tailwind theme.
- Pakai `clsx` + `tailwind-merge` untuk className kompleks.
- Komponen variant pakai `class-variance-authority`.

### 4.5 GSAP

- Register plugin HANYA di client component.
- Pakai `useGSAP` hook untuk auto-cleanup.
- Hanya animasi `transform` + `opacity`.
- Selalu cek `prefers-reduced-motion` lewat helper di `lib/gsap.ts`.

---

## 5. Workflow & Git

### Branching

- `main` = production (auto-deploy Vercel).
- Feature branch: `feat/nama-fitur`.
- Bugfix: `fix/deskripsi`.

### Commit Convention

```
<type>: <deskripsi singkat>
```

Types: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `perf`, `ci`.

### Deploy

Push ke `main` = Vercel auto-deploy. Tidak perlu manual deploy.

---

## 6. Data & Konten

Semua konten ada di `data/*.ts`. Untuk update:

1. Edit file TypeScript yang relevan.
2. Commit + push ke `main`.
3. Vercel otomatis rebuild.

Tidak ada CMS, tidak ada API call. Data = kode.

### Tambah Proyek Baru

1. Tambah screenshot ke `public/images/projects/`.
2. Tambah object di `data/projects.ts`.
3. (Opsional) Buat `content/projects/slug.mdx` untuk case study.
4. Push ke `main`.

---

## 7. Performance & Accessibility

### Target Lighthouse

| Metrik | Target |
|--------|--------|
| Performance | >= 90 |
| Accessibility | >= 95 |
| Best Practices | >= 95 |
| SEO | >= 95 |

### Aturan Performa

1. Gambar pakai `next/image` (WebP/AVIF otomatis).
2. Client component seminimal mungkin.
3. GSAP hanya `transform` + `opacity`.
4. Bundle < 200kb first load.

### Aturan Aksesibilitas

1. Kontras >= 4.5:1 body, >= 3:1 large text.
2. Focus ring visible.
3. Alt text semua gambar.
4. Keyboard navigation penuh.
5. Touch target >= 44px.
6. `prefers-reduced-motion` wajib dihormati.

---

## 8. Keamanan

Website static tanpa database, risiko minimal. Tetap wajib:

1. Tidak ada secret/token di source code.
2. Tidak commit `.env` file.
3. Dependency audit rutin (`npm audit`).
4. Exact version di `package.json`.
5. CSP headers via `next.config.ts`.
6. Tidak expose data sensitif di `/public`.

---

## 9. Referensi Cepat

| Butuh apa | Lihat di mana |
|-----------|---------------|
| Spesifikasi produk lengkap | `PRD_AgrianTech_GSAP_Portfolio.md` |
| Color palette & design tokens | `DESIGN.md` |
| Tipe data konten | `types/index.ts` |
| Data proyek | `data/projects.ts` |
| Setup GSAP | `lib/gsap.ts` |
| Animasi reusable | `components/animations/` |

---

**AgrianTech** — *Modern Web & Information Systems.*
