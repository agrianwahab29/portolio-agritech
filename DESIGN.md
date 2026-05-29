# DESIGN.md — AgriTech Portfolio Design System

**Brand:** AgriTech
**Owner:** Agrian Wahab
**Konsep:** Premium dark portfolio dengan glassmorphism, subtle gradient, clean typography, dan cinematic GSAP motion.
**Versi:** 1.0
**Status:** Living document — diperbarui seiring evolusi desain.

> Dokumen ini adalah sumber kebenaran tunggal (single source of truth) untuk seluruh keputusan visual. Semua komponen, halaman, dan animasi WAJIB mengacu ke token di sini.

---

## 1. Filosofi Desain

1. **Clarity over decoration** — Setiap elemen punya alasan. Tidak ada ornamen kosong.
2. **Premium tapi tidak norak** — Dark elegan, bukan hacker-style agresif.
3. **Motion with purpose** — Animasi memperkuat storytelling, bukan pamer.
4. **Content first** — Proyek dan bukti adalah bintang utama, bukan efek.
5. **Accessible by default** — Kontras, fokus, reduced-motion bukan afterthought.
6. **Consistency** — Token sama dipakai di semua tempat. Tidak ada nilai ajaib (magic value).

---

## 2. Color Palette (Inti)

### 2.1 Brand & Aksen Utama

| Token | Hex | Penggunaan |
|-------|-----|------------|
| `accent-blue` | `#38BDF8` | Aksen primer, link, highlight, CTA |
| `accent-cyan` | `#22D3EE` | Aksen sekunder, gradient mid-stop |
| `accent-purple` | `#A78BFA` | Aksen tersier, gradient end-stop, glow |
| `accent-emerald` | `#34D399` | Sukses, status published, ikon positif |
| `accent-yellow` | `#FACC15` | Warning, status in-press / accepted |
| `accent-pink` | `#F472B6` | Aksen dekoratif langka, highlight spesial |

### 2.2 Background

| Token | Hex | Penggunaan |
|-------|-----|------------|
| `bg-primary` | `#050816` | Background utama halaman (paling gelap) |
| `bg-secondary` | `#0B1020` | Section alternatif, kontras halus |
| `bg-tertiary` | `#111827` | Elevasi lebih tinggi, panel, inner block |

### 2.3 Text

| Token | Hex | Kontras di `bg-primary` | Penggunaan |
|-------|-----|------------------------|------------|
| `text-primary` | `#F8FAFC` | ~18:1 (AAA) | Heading, teks utama |
| `text-secondary` | `#CBD5E1` | ~12:1 (AAA) | Body, paragraf |
| `text-muted` | `#94A3B8` | ~6.5:1 (AA) | Caption, metadata, label |
| `text-disabled` | `#64748B` | ~3.8:1 | Disabled, placeholder (jangan untuk teks penting) |

### 2.4 Surface (Glassmorphism)

| Token | Nilai | Penggunaan |
|-------|-------|------------|
| `surface-card` | `rgba(255,255,255,0.06)` | Background kartu glass default |
| `surface-card-hover` | `rgba(255,255,255,0.10)` | Background kartu saat hover |
| `surface-border` | `rgba(255,255,255,0.12)` | Border kartu default |
| `surface-border-hover` | `rgba(255,255,255,0.20)` | Border kartu saat hover |

Glass card resmi: `background: surface-card` + `backdrop-filter: blur(12px)` + `border: 1px solid surface-border` + `border-radius: 16-24px`.

### 2.5 Status Colors

| Token | Hex | Makna |
|-------|-----|-------|
| `status-published` | `#34D399` | Published (hijau) |
| `status-in-press` | `#FACC15` | Accepted / In Press (kuning) |
| `status-completed` | `#38BDF8` | Completed (biru) |
| `status-archived` | `#94A3B8` | Archived / inactive (abu) |

> Aturan anti-overclaim: publikasi semanTIK = `status-in-press`, BUKAN `status-published`. Badge Sinta 3 hanya untuk semanTIK.

### 2.6 Glow

| Token | Nilai |
|-------|-------|
| `glow-blue` | `rgba(56,189,248,0.35)` |
| `glow-purple` | `rgba(167,139,250,0.30)` |
| `glow-emerald` | `rgba(52,211,153,0.30)` |

---

## 3. Gradient Library

| Token | Definisi | Penggunaan |
|-------|----------|------------|
| `gradient-hero` | `linear-gradient(135deg, #38BDF8 0%, #22D3EE 50%, #A78BFA 100%)` | Background hero, text gradient signature |
| `gradient-text` | `linear-gradient(135deg, #38BDF8, #22D3EE, #A78BFA)` | Heading display ("Agrian Wahab") |
| `gradient-radial-tl` | `radial-gradient(circle at top left, rgba(56,189,248,0.22), transparent 32%)` | Overlay hero / section atas |
| `gradient-radial-br` | `radial-gradient(circle at bottom right, rgba(167,139,250,0.18), transparent 28%)` | Overlay hero / section bawah |
| `gradient-card-glow` | `radial-gradient(circle at top, rgba(56,189,248,0.10), transparent 60%)` | Glow lembut di kartu |

Aturan gradient:
1. Maksimal 1 gradient besar per section. Jangan tumpuk-tumpuk.
2. Stop terakhir selalu transparan untuk transisi halus.
3. Gradient text hanya pada heading penting (hero name, section eyebrow). Jangan untuk paragraf.

---

## 4. Shadow & Depth

| Token | Nilai | Penggunaan |
|-------|-------|------------|
| `shadow-sm` | `0 2px 8px rgba(0,0,0,0.30)` | Elevasi rendah, tooltip, badge |
| `shadow-md` | `0 8px 24px rgba(0,0,0,0.40)` | Kartu default |
| `shadow-lg` | `0 16px 48px rgba(0,0,0,0.50)` | Hero visual, modal, mockup |
| `shadow-glow-blue` | `0 0 40px rgba(56,189,248,0.25)` | Hover state CTA primer |
| `shadow-glow-purple` | `0 0 40px rgba(167,139,250,0.25)` | Hover state aksen sekunder |

---

## 5. Typography

### 5.1 Font Family

| Peran | Font | Weight | Catatan |
|-------|------|--------|---------|
| Heading | Plus Jakarta Sans | 700, 800 | Modern, geometric, tegas |
| Body | Inter | 400, 500, 600 | Readable, netral |
| Mono | JetBrains Mono / Geist Mono | 400, 500 | Code snippet, badge tech |

Load via `next/font` (self-hosted, optimized). Font-display: swap.

### 5.2 Type Scale

| Level | Size | Weight | Tracking | Line | Penggunaan |
|-------|------|--------|----------|------|------------|
| Display | `clamp(48px, 8vw, 96px)` | 800 | -0.04em | 1.05 | Hero name |
| H1 | `clamp(36px, 5vw, 64px)` | 700 | -0.02em | 1.1 | Page heading |
| H2 | `clamp(28px, 4vw, 48px)` | 700 | -0.02em | 1.15 | Section heading |
| H3 | `clamp(20px, 3vw, 32px)` | 600 | -0.01em | 1.25 | Subsection, card title |
| H4 | 20px | 600 | 0 | 1.3 | Card heading kecil |
| Body Large | 18px | 400 | 0 | 1.6 | Lead paragraph |
| Body | 16px | 400 | 0 | 1.6 | Default paragraf |
| Body Small | 14px | 400 | 0 | 1.5 | Caption, helper |
| Caption | 12px | 500 | 0.04em uppercase | 1.4 | Eyebrow label, badge |

### 5.3 Aturan Tipografi

1. H1 hanya satu per halaman. H2-H6 sequential.
2. Body minimum 16px. Tidak ada teks <12px untuk konten penting.
3. Line length ideal 60-75 karakter (`max-w-prose` di Tailwind).
4. Hindari justify. Pakai left-align.
5. Eyebrow label selalu uppercase + tracking + warna `text-muted`.

---

## 6. Spacing & Layout

### 6.1 Spacing Scale (4px base)

`4, 8, 12, 16, 24, 32, 48, 64, 96, 128` (px). Pakai kelipatan ini saja.

### 6.2 Layout

| Properti | Desktop | Mobile |
|----------|---------|--------|
| Container max-width | 1280px (1120px content-heavy) | 100% |
| Padding horizontal | 48px | 24px |
| Section padding (Y) | 96px - 140px | 64px - 88px |
| Grid gap | 24px | 16px |
| Card padding | 24px - 32px | 20px - 24px |

### 6.3 Radius

| Token | Nilai | Penggunaan |
|-------|-------|------------|
| `radius-button` | 12px | Tombol |
| `radius-card` | 16px - 24px | Kartu, panel |
| `radius-full` | 9999px | Chip, avatar, dot |

### 6.4 Breakpoints

| Nama | Range |
|------|-------|
| Mobile | 320px - 767px |
| Tablet | 768px - 1023px |
| Desktop | 1024px - 1439px |
| Large | 1440px+ |

---

## 7. Komponen Inti

### 7.1 Button

| Variant | Style | Hover | Active |
|---------|-------|-------|--------|
| primary | `gradient-hero` bg, text gelap | + `shadow-glow-blue` | scale 0.98 |
| secondary | glass surface + border | brightness naik | scale 0.98 |
| ghost | transparan | bg `surface-card` | scale 0.98 |
| link | teks + underline animasi | underline penuh | - |

Touch target minimum 44x44px. Focus ring 2px `accent-blue`.

### 7.2 Badge

| Variant | Style |
|---------|-------|
| tech | glass + border `accent-blue`, font mono |
| status | warna sesuai `status-*` |
| category | bg halus + teks `text-secondary` |
| year | `text-muted`, kecil |

### 7.3 Card

Base: glass surface + border + `radius-card` + `shadow-md`.
Hover: `surface-card-hover` + `surface-border-hover` + translateY -4px + glow tipis.

### 7.4 Section Heading

Struktur: eyebrow (caption uppercase) + heading (H2) + description (body, `text-secondary`).

---

## 8. Motion (GSAP)

### 8.1 Default

- Ease: `power3.out`
- Duration: 0.8s (reveal), 0.4-0.6s (mikro)
- Stagger: 0.1s
- ScrollTrigger start: `top 80%`, `once: true`

### 8.2 Aturan Performa

1. Hanya animasi `transform` + `opacity` (GPU-accelerated).
2. DILARANG animasi `width/height/top/left`.
3. CLS harus 0 — tidak ada layout shift dari animasi.
4. `useGSAP` hook untuk auto-cleanup.

### 8.3 Reduced Motion (WAJIB)

Jika `prefers-reduced-motion: reduce`:
1. Matikan parallax, scrub, magnetic.
2. Text reveal & fadeUp → tampil instan (opacity 1).
3. Counter → langsung angka final.
4. Hero timeline → simple fade 0.3s.

---

## 9. Accessibility

1. Kontras minimum 4.5:1 (body), 3:1 (large text).
2. Focus ring visible 2px `accent-blue`.
3. Keyboard navigation penuh (Tab, Enter, Escape).
4. Alt text di semua gambar.
5. Skip-to-content link.
6. Touch target >= 44px.
7. Semantic HTML + ARIA untuk komponen custom.

> Catatan: kepatuhan WCAG penuh butuh pengujian manual dengan assistive technology dan review pakar aksesibilitas. Token di sini adalah fondasi, bukan jaminan otomatis.

---

## 10. Don't List

1. Jangan pakai Framer Motion (GSAP saja).
2. Jangan hardcode warna di luar token ini.
3. Jangan gradient di paragraf panjang.
4. Jangan animasi yang bikin scroll patah.
5. Jangan teks <12px untuk konten penting.
6. Jangan progress bar skill palsu (tidak ada ukuran objektif).
7. Jangan broken image — pakai gradient placeholder + ikon kategori.

---

**AgriTech Design System v1.0** — *Modern Web & Information Systems.*
