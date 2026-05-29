# PRD — AgriTech Interactive GSAP Portfolio (v2.0 ULTRA COMPLEX)

**Nama Produk:** AgriTech Portfolio
**Pemilik Produk:** Bos Agrian / Agrian Wahab
**Brand:** AgriTech
**Jenis Produk:** Website portofolio personal-profesional dengan GSAP cinematic animation
**Model Deploy:** Vercel-only, tanpa database, tanpa backend
**Target Platform:** Web desktop, tablet, mobile
**Target Pengguna:** Recruiter, HR, perusahaan, dosen, klien freelance, partner proyek, komunitas teknologi
**Status Dokumen:** Product Requirement Document versi ULTRA COMPLEX
**Versi:** v2.0
**Tanggal:** 29 Mei 2026

---

## 1. Ringkasan Eksekutif

AgriTech Portfolio adalah website portofolio profesional milik **Agrian Wahab** yang dirancang untuk memperkuat personal branding sebagai **Web Developer, System Information Developer, UI/UX enthusiast, technical documentation builder, AI-assisted developer, dan fresh graduate Teknik Informatika dengan pengalaman proyek instansi pemerintah**.

Website ini WAJIB terlihat premium, modern, cepat, mudah dibaca, dan BERBEDA dari portofolio biasa. Fokus utama bukan hanya menampilkan CV, tetapi membangun persepsi bahwa AgriTech mampu membangun produk web yang rapi, interaktif, terstruktur, dan siap dipresentasikan ke perusahaan.

Website menggunakan konsep **static-first portfolio** yang di-deploy ke **Vercel**, tanpa database, tanpa admin panel, dan tanpa sistem login. Semua data portofolio disimpan dalam file lokal TypeScript. Konten detail proyek menggunakan MDX.

Website WAJIB menggunakan **GSAP animation** secara elegan dan cinematic. Animasi harus memperkuat storytelling, meningkatkan kesan profesional, dan membuat halaman terasa hidup tanpa mengganggu performa, aksesibilitas, atau pengalaman pengguna.

---

## 2. Latar Belakang

Bos Agrian memiliki profil yang kuat untuk ditampilkan dalam portofolio digital:

1. Lulusan Teknik Informatika Universitas Halu Oleo dengan GPA 3.80/4.00.
2. Menyelesaikan Program Magang Hub Kemenaker Batch 2 di Balai Bahasa Provinsi Sulawesi Tenggara (24 Nov 2025 - 24 Mei 2026).
3. Memiliki 4 proyek web publik yang sudah live dan dapat diakses.
4. Memiliki 5 publikasi ilmiah (1 Sinta 3 Accepted/In Press, 4 Published).
5. Memiliki pengalaman pada pengembangan sistem informasi, UI/UX, dokumentasi teknis, testing, optimasi performa, dan AI-assisted development.
6. Ketua Divisi Hubungan Masyarakat HMTI.
7. Pembicara Gerakan Nasional 1000 Startup Digital Hub 15.
8. Peserta Pertukaran Mahasiswa Merdeka (PMM) 3.
9. Memiliki sertifikat cybersecurity (Wazuh, Red Team/Blue Team).
10. Memiliki pengalaman KKP di Stasiun Telepon Otomatis 1 Kendari.

Portofolio ini dibuat untuk menjawab kebutuhan utama:

> Bagaimana membuat website personal yang terlihat serius, modern, dan meyakinkan perusahaan bahwa AgriTech bukan sekadar fresh graduate, tetapi calon talenta yang sudah punya bukti proyek nyata di instansi pemerintah?

---

## 3. Visi Produk

> AgriTech menjadi etalase digital yang menunjukkan bahwa Agrian Wahab mampu membangun web modern, sistem informasi, dan produk digital yang rapi, fungsional, terdokumentasi, dan layak digunakan di lingkungan profesional.

---

## 4. Misi Produk

1. Menampilkan profil profesional Agrian Wahab secara jelas dan meyakinkan.
2. Menampilkan proyek unggulan dengan format case study yang mudah dinilai perusahaan.
3. Menggunakan GSAP animation untuk menciptakan pengalaman visual premium dan cinematic.
4. Tetap cepat, ringan, SEO-friendly, dan mobile-friendly.
5. Mudah diperbarui tanpa database melalui file data lokal.
6. Deploy gratis di Vercel tanpa biaya tambahan.
7. Menjadi bukti kemampuan teknis dalam membangun website modern berbasis Next.js.
8. Menonjolkan pengalaman instansi pemerintah sebagai pembeda dari fresh graduate lain.

---

## 5. Tujuan Produk

### 5.1 Tujuan Utama

Membangun website portofolio profesional dengan brand **AgriTech** yang mampu menarik perhatian perusahaan, recruiter, klien, dan partner kerja dalam 5 detik pertama.

### 5.2 Tujuan Karier

Website harus membantu Bos Agrian untuk:

1. Melamar kerja sebagai Junior/Mid Web Developer.
2. Melamar kerja sebagai Frontend Developer (React/Next.js).
3. Melamar kerja sebagai System Information Developer.
4. Melamar kerja sebagai IT Support / Data & Information Staff.
5. Mendapat peluang freelance pembuatan website, landing page, sistem informasi.
6. Menjadi personal branding digital jangka panjang.
7. Menarik perhatian hiring manager teknis yang menilai kualitas kode dan presentasi.

### 5.3 Tujuan Teknis

1. Next.js (App Router, static generation).
2. TypeScript strict mode.
3. Tailwind CSS.
4. GSAP + @gsap/react + ScrollTrigger.
5. Tanpa database apapun.
6. Tanpa auth/login.
7. Data lokal TypeScript files.
8. Deploy ke Vercel.
9. Update via edit file + push GitHub.
10. Lighthouse Performance >= 90, Accessibility >= 95, SEO >= 95.

---

## 6. Non-Goals

Website ini TIDAK bertujuan untuk:

1. Membuat admin panel.
2. Membuat login admin.
3. Menyimpan data ke database apapun (MySQL, PostgreSQL, Supabase, Firebase, MongoDB).
4. Membuat dashboard dinamis.
5. Membuat sistem komentar.
6. Membuat blog kompleks di tahap awal.
7. Membuat animasi berlebihan yang mengganggu performa.
8. Membuat tampilan hacker-style yang terlalu gelap/agresif.
9. Membuat website berat dengan 3D kompleks tanpa kebutuhan.
10. Membuat sistem CMS.
11. Menggunakan Framer Motion (GSAP saja cukup).
12. Menggunakan backend API terpisah.
13. Menggunakan server-side rendering yang butuh server persistent.

---

## 7. Target Pengguna

### 7.1 Recruiter / HR (Persona Primary)

**Profil:**
- Usia 25-40 tahun
- Background: HR generalist atau tech recruiter
- Konteks: scanning 50-200 portfolio per minggu

**Kebutuhan:**
1. Cepat memahami siapa Agrian Wahab dalam 5 detik.
2. Cepat melihat skill utama tanpa scroll panjang.
3. Cepat melihat proyek nyata dengan link live.
4. Bisa download CV dengan satu klik.
5. Bisa menghubungi via email/LinkedIn/WhatsApp.
6. Bisa menilai kualitas komunikasi dan presentasi proyek.

**Ekspektasi UX:**
1. Navigasi mudah, tidak butuh tutorial.
2. Tidak terlalu banyak teks di halaman utama.
3. Ada ringkasan proyek di card.
4. Ada detail proyek di halaman terpisah.
5. Website cepat dibuka (LCP < 2.5s).
6. CV download button selalu terlihat.

### 7.2 Hiring Manager Teknis (Persona Primary)

**Profil:**
- Senior developer / engineering manager
- Konteks: technical screening sebelum interview

**Kebutuhan:**
1. Melihat stack teknologi yang dikuasai.
2. Melihat proyek yang sudah online (bukti, bukan klaim).
3. Melihat kemampuan problem-solving via case study.
4. Melihat struktur dokumentasi.
5. Melihat kemampuan UI/UX dan dokumentasi.
6. Cek GitHub jika tersedia.

**Ekspektasi UX:**
1. Project detail jelas dengan struktur problem-solution-result.
2. Ada tech stack badge yang akurat.
3. Ada role yang dikerjakan secara jujur.
4. Ada problem-solution-result framework.
5. Ada link live demo yang berfungsi.
6. Code yang dipajang harus bersih (kalau ada).

### 7.3 Klien Freelance (Persona Secondary)

**Profil:**
- UMKM, founder, dosen, pengelola instansi

**Kebutuhan:**
1. Melihat contoh karya nyata.
2. Melihat jenis layanan yang bisa dikerjakan.
3. Melihat gaya desain.
4. Mudah menghubungi via WhatsApp.

### 7.4 Dosen / Akademisi / Reviewer (Persona Tertiary)

**Profil:**
- Dosen, peneliti, reviewer jurnal

**Kebutuhan:**
1. Melihat publikasi ilmiah dengan DOI.
2. Melihat latar belakang pendidikan.
3. Melihat proyek penelitian atau teknologi.
4. Melihat kredibilitas akademik.

---

## 8. Positioning Brand

### 8.1 Nama Brand

**AgriTech**

### 8.2 Brand Statement

> AgriTech adalah personal technology brand milik Agrian Wahab yang berfokus pada pengembangan web, sistem informasi, UI/UX, dokumentasi teknis, optimasi performa, dan AI-assisted development untuk membangun solusi digital yang rapi, modern, dan bermanfaat.

### 8.3 Brand Personality

1. Profesional tapi tidak kaku.
2. Modern dan sadar tren teknologi.
3. Cerdas dan analitis.
4. Rapi dan terstruktur.
5. Adaptif terhadap stack baru.
6. Ambisius tapi realistis.
7. Tidak norak, tidak overclaim.
8. Memiliki sentuhan personal yang jujur.

### 8.4 Tone of Voice

1. Percaya diri, bukan sombong.
2. Jelas, tidak bertele-tele.
3. Profesional, tidak kaku.
4. Teknis, tetap mudah dimengerti.
5. Fokus pada bukti dan hasil.

**Contoh tone YANG BENAR:**

> Saya membangun sistem informasi berbasis web untuk mendukung pencatatan, pengelolaan data, dan digitalisasi layanan instansi dengan pendekatan yang rapi, terdokumentasi, dan mudah digunakan.

**Contoh tone YANG HARUS DIHINDARI:**

> Saya adalah developer paling jago dan bisa membuat semua sistem apa saja.

### 8.5 Brand Tagline

**Primary:** `Modern Web & Information Systems.`

**Alternatif:**
- `Build. Design. Optimize.`
- `Digital Solutions with Purpose.`
- `Crafting Web Systems with Clarity.`

---

## 9. Unique Selling Point (USP)

### 9.1 USP Utama

> Fresh graduate Teknik Informatika yang sudah memiliki 4 proyek web publik di domain instansi pemerintah, pengalaman magang nasional Kemenaker, 5 publikasi ilmiah (1 Sinta 3), dan kemampuan membangun sistem informasi berbasis web dengan pendekatan modern.

### 9.2 USP Pendukung

1. Bukan hanya membuat tampilan — memahami alur sistem end-to-end.
2. Terbiasa mengerjakan analisis kebutuhan sampai dokumentasi teknis.
3. Memiliki pengalaman membangun sistem untuk instansi pemerintah (bukan hanya tugas kuliah).
4. Memiliki kombinasi skill: web development + UI/UX + data processing + AI tools.
5. Memiliki bukti proyek live yang dapat dicek langsung oleh recruiter.
6. Proyek berjalan di domain resmi pemerintah (slide.kemendikdasmen.go.id).
7. Memiliki sertifikat cybersecurity (Wazuh, Red Team/Blue Team).
8. Aktif di organisasi (Ketua Divisi Humas HMTI) dan pembicara startup digital.

### 9.3 Differentiator vs Fresh Graduate Lain

| Aspek | Fresh Graduate Biasa | AgriTech |
|-------|---------------------|------------|
| Proyek | Tugas kuliah lokal | 4 proyek live di domain pemerintah |
| Pengalaman | Belum magang | Magang Nasional Kemenaker 6 bulan |
| Publikasi | 0-1 | 5 publikasi (1 Sinta 3) |
| Sistem | CRUD sederhana | Inventory, approval workflow, audit trail |
| Scope | Individual | Multi-stakeholder instansi |
| Dokumentasi | Minimal | Terstruktur, terdokumentasi |

---

## 10. Nilai Utama yang Harus Ditonjolkan

Website harus menonjolkan bahwa AgriTech memiliki kekuatan pada:

1. **Pengembangan web modern** — Next.js, React, TypeScript, Tailwind.
2. **Sistem informasi berbasis web** — SEPADAN, Inventaris Buku.
3. **Proyek nyata yang sudah online** — 4 proyek di domain pemerintah.
4. **UI/UX dan pengalaman pengguna** — desain yang rapi dan fungsional.
5. **Dokumentasi teknis** — terbiasa menulis dokumentasi lengkap.
6. **Testing dan optimasi** — performance-aware development.
7. **AI-assisted development** — memanfaatkan AI tools untuk produktivitas.
8. **Pengalaman instansi pemerintah** — bukan hanya proyek pribadi.
9. **Publikasi ilmiah** — kredibilitas akademik.
10. **Kemampuan belajar cepat** — adaptif terhadap stack baru.

---

## 11. Ruang Lingkup Produk

### 11.1 Halaman Wajib

1. **Home** — Landing page utama dengan semua section.
2. **Projects** — Listing semua proyek dengan filter.
3. **Project Detail** — Case study per proyek (dynamic route).
4. **About** — Profil personal-profesional.
5. **Publications** — Daftar publikasi ilmiah.
6. **Contact** — Informasi kontak dan CTA.

### 11.2 Section Wajib di Home

1. Navigation Bar (sticky, glass blur on scroll).
2. Hero Section (cinematic GSAP entrance).
3. Quick Stats (counter animation).
4. About Preview (ringkas + link ke About).
5. Featured Projects (4 proyek utama, card grid).
6. Case Study Highlight (SEPADAN deep dive).
7. Experience Timeline (animated timeline).
8. Skills Matrix (grouped badges).
9. Publications Preview (3 teratas).
10. Certificates Preview (highlight utama).
11. Services (layanan yang ditawarkan).
12. Contact CTA (email, LinkedIn, WhatsApp).
13. Footer (brand, social links, copyright).

### 11.3 Fitur Wajib

1. Responsive design (mobile-first approach).
2. GSAP cinematic animation (ScrollTrigger-based).
3. Scroll reveal per section.
4. Project filtering (category tabs).
5. Project detail page (case study format).
6. Download CV (PDF, satu klik).
7. Contact links (email, LinkedIn, WhatsApp, GitHub).
8. SEO metadata per halaman.
9. Open Graph image.
10. Sitemap.xml auto-generated.
11. Robots.txt.
12. Accessible navigation (keyboard, screen reader).
13. Reduced motion support (prefers-reduced-motion).
14. Loading state ringan (skeleton/placeholder).
15. Custom 404 page.
16. Smooth scroll navigation.
17. Active section indicator di navbar.
18. Back to top button.

### 11.4 Fitur Opsional (Tahap Lanjutan)

1. Blog/notes berbasis MDX.
2. Theme switch dark/light.
3. Project search.
4. Command menu (Cmd+K).
5. Testimonial section.
6. GitHub contribution graph.
7. Resume timeline interaktif.
8. Animated project mockup.
9. Dynamic OG image per project.
10. Full English version.
11. Reading time estimator untuk case study.
12. Table of contents untuk project detail.

---

## 12. Arsitektur Konten

### 12.1 Home Page Flow

```
Hero (kesan pertama 5 detik)
  -> Quick Stats (bukti kredibilitas instan)
  -> About Preview (siapa Agrian)
  -> Featured Projects (4 proyek utama)
  -> Case Study Highlight (SEPADAN deep dive)
  -> Experience (magang Kemenaker)
  -> Skills (stack teknologi)
  -> Publications (kredibilitas akademik)
  -> Certificates (sertifikat pendukung)
  -> Services (layanan freelance)
  -> Contact CTA (call to action)
  -> Footer
```

### 12.2 Projects Page

**Filter kategori:**
1. All
2. Web Portal
3. Sistem Informasi
4. UI/UX
5. Government / Institution
6. Academic Project

**Data di card:**
1. Thumbnail
2. Title
3. Category badge
4. Year badge
5. Status badge
6. Short description (max 2-3 baris)
7. Tech stack badge
8. Live demo button
9. Case study button

### 12.3 Project Detail Page (Case Study)

1. Project hero (judul + metadata)
2. Breadcrumb
3. Project summary
4. Problem
5. Goals
6. My Role
7. Process
8. Key Features
9. Tech Stack
10. UI preview / screenshots
11. Challenges
12. Solution
13. Result
14. Lessons Learned
15. CTA to live demo
16. Related projects

---

## 13. Konten Personal (Data Asli dari CV)

### 13.1 Identitas Utama

- **Nama lengkap:** Agrian Wahab
- **Brand:** AgriTech
- **Headline:** Web Developer & System Information Developer
- **Headline EN:** Building modern web experiences, information systems, and AI-assisted digital solutions.
- **Headline ID:** Membangun website modern, sistem informasi, dan solusi digital berbasis AI-assisted workflow.

### 13.2 Kontak

- **Email:** agrianwahab10@gmail.com
- **Telepon/WhatsApp:** +6282291134197
- **LinkedIn:** linkedin.com/in/agrian-wahab-7695b32a4/

### 13.3 Profil Singkat (untuk About)

> Lulusan Teknik Informatika dengan fokus pada pengembangan web, sistem informasi, pengolahan data, jaringan komputer, dan kecerdasan buatan. Telah menyelesaikan Program Magang Hub Kemenaker di Balai Bahasa Provinsi Sulawesi Tenggara sebagai Pengolah Data dan Informasi. Memiliki portofolio sistem berbasis web yang telah dapat diakses publik, termasuk Portal Kamus Digital BBST Sultra, Kamus Bergambar Sulawesi Tenggara, SEPADAN, dan Sistem Inventaris Buku BBST. Terbiasa mengerjakan analisis kebutuhan, UI/UX, implementasi fitur, testing, dokumentasi teknis, optimasi performa, dan pemanfaatan AI tools untuk mempercepat pengembangan sistem.

### 13.4 Pendidikan

- **Universitas:** Universitas Halu Oleo, Kendari, Sulawesi Tenggara
- **Gelar:** Sarjana Teknik Informatika
- **Periode:** 2021 - 2025
- **GPA:** 3.80 / 4.00

### 13.5 Quick Stats (Homepage)

1. **GPA 3.80/4.00** — IPK Teknik Informatika
2. **4 Proyek Live** — Sistem web di domain pemerintah
3. **5 Publikasi Ilmiah** — 1 Sinta 3 (Accepted), 4 Published
4. **6 Bulan** — Magang Nasional Kemenaker
5. **10+ Technical Skills** — Web, sistem informasi, AI

### 13.6 Pengalaman Profesional

**Balai Bahasa Provinsi Sulawesi Tenggara**
- Posisi: Pengolah Data dan Informasi (Program Magang Hub Kemenaker Batch 2)
- Periode: 24 November 2025 - 24 Mei 2026
- Deskripsi: Melaksanakan Program Pemagangan Nasional Kementerian Ketenagakerjaan dan mendukung pengolahan data/informasi instansi. Membangun dan mengembangkan sistem inventarisasi dan pendistribusian buku, SEPADAN, digitalisasi kamus bahasa daerah-Indonesia, serta kamus bergambar untuk kebutuhan layanan Balai Bahasa.

### 13.7 Pengalaman Organisasi

**Himpunan Mahasiswa Teknik Informatika**
- Posisi: Ketua Divisi Hubungan Masyarakat
- Periode: 2024
- Deskripsi: Merancang strategi promosi kegiatan, memperluas jaringan kerja sama, serta menjaga komunikasi dengan organisasi/komunitas eksternal.

### 13.8 Pengalaman Lainnya

1. **Kuliah Kerja Praktek** — Stasiun Telepon Otomatis 1 Kendari (Feb-Mar 2024). Mempelajari transmisi jaringan kabel udara/darat/laut, pengelolaan server, pemeliharaan perangkat, instalasi jaringan, operasional layanan telekomunikasi.
2. **Sistem Informasi Manajemen Barang** — Tim Proyek Rancang Bangun Aplikasi (Juni 2023). Rekayasa perangkat lunak dari analisis kebutuhan hingga pengujian.
3. **Simulasi Lampu Lalu Lintas Kawasan Kendari** — Mikrokontroler (Maret 2024). Algoritma siklus lampu 3 persimpangan, integrasi hardware-software, pengujian sistem.
4. **Desain UI/UX** — Tim Proyek UI/UX (Oktober 2022). Riset, wireframing, prototyping, usability testing.
5. **Sistem Sensor Radar Kapal** — Tim Proyek Robotika (Juni 2022). Prototipe pendeteksi objek berbasis sistem digital, mikrokontroler, rangkaian logika, pengolahan sinyal.
6. **Pembicara GN 1000 Startup Digital Hub 15** (Agustus 2022). Materi startup digital dan solusi tantangan bisnis digital.
7. **Pertukaran Mahasiswa Merdeka (PMM) 3** — Universitas Wijaya Kusuma (Agu 2023-Jan 2024). Koordinator mahasiswa inbound.

---

## 14. Daftar Proyek Utama (Detail Lengkap)

### 14.1 Portal Kamus Digital BBST Sultra

- **Slug:** `portal-kamus-digital-bbst`
- **Kategori:** Web Portal / Digital Dictionary / Government Project
- **Tahun:** 2026
- **Status:** Published
- **Live URL:** https://slide.kemendikdasmen.go.id/kamus-bbst-sultra/
- **Sub-kamus:**
  - Cia-Cia
  - Culambacu
  - Kulisusu
  - Moronene
  - Lasalimu-Kamaru
  - Muna
  - Tolaki

**Deskripsi singkat:**
> Portal kamus digital berbasis web untuk akses bahasa daerah Sulawesi Tenggara. Mencakup halaman portal dan beberapa sub-kamus.

**Highlight:**
1. Portal publik di domain resmi kemendikdasmen.go.id
2. Digitalisasi 7 bahasa daerah Sulawesi Tenggara
3. Struktur sub-kamus yang scalable
4. UI akses informasi yang ramah pengguna
5. Relevan untuk kebutuhan instansi pemerintah

**Tech Stack:** Web Portal, Static Site, Multi-page

### 14.2 Kamus Bergambar Sulawesi Tenggara

- **Slug:** `kamus-bergambar-sultra`
- **Kategori:** Visual Learning / Web Portal / Education Technology
- **Tahun:** 2026
- **Status:** Published
- **Live URL:** https://slide.kemendikdasmen.go.id/kamusbergambar-sultra/
- **Sub-kamus:** Kulisusu, Muna, Tolaki, Wakatobi

**Deskripsi singkat:**
> Portal kamus bergambar untuk pembelajaran bahasa daerah berbasis visual dengan akses publik untuk Kulisusu, Muna, Tolaki, dan Wakatobi.

**Highlight:**
1. Media pembelajaran visual untuk anak-anak dan pelajar
2. 4 bahasa daerah dengan pendekatan visual
3. Akses publik di domain pemerintah
4. Desain ramah pengguna
5. Cocok untuk edukasi formal dan informal

### 14.3 SEPADAN — Sistem Pengelolaan Barang Persediaan (FLAGSHIP)

- **Slug:** `sepadan`
- **Kategori:** Sistem Informasi / Inventory Management / Internal Workflow
- **Tahun:** 2026
- **Status:** Published / Case Study Highlight
- **Live URL:** https://slide.kemendikdasmen.go.id/sepadan/

**Deskripsi singkat:**
> Sistem pengelolaan barang persediaan untuk mendukung pencatatan transaksi masuk-keluar, pemantauan stok, permintaan, persetujuan, pelaporan, audit trail, dan manajemen pengguna.

**Problem yang dipecahkan:**
- Pencatatan barang masih manual / spreadsheet
- Tidak ada audit trail untuk transaksi
- Approval workflow tidak terstandar
- Sulit memantau stok real-time
- Pelaporan butuh waktu lama

**Solusi:**
- Sistem pencatatan transaksi masuk-keluar terstruktur
- Dashboard monitoring stok
- Workflow permintaan & persetujuan terintegrasi
- Audit trail otomatis untuk semua transaksi
- Modul pelaporan dengan filter
- Manajemen pengguna dengan role-based access

**Key Features:**
1. Pencatatan barang masuk dan keluar
2. Monitoring stok real-time
3. Approval workflow multi-level
4. Audit trail (who, what, when)
5. Laporan periodik
6. Manajemen pengguna dengan role
7. Notifikasi permintaan & persetujuan

**Result:**
- Sistem digunakan di Balai Bahasa Provinsi Sulawesi Tenggara
- Mengurangi waktu pencatatan manual
- Audit trail yang dapat diaudit kapan saja
- Approval terstandar antar bagian

**Note:** Project ini adalah CASE STUDY HIGHLIGHT — paling kuat untuk menunjukkan kemampuan sistem informasi end-to-end.

### 14.4 Sistem Inventaris Buku BBST

- **Slug:** `inventaris-buku-bbst`
- **Kategori:** Sistem Informasi / Inventory / Library Management
- **Tahun:** 2026
- **Status:** Published
- **Live URL:** https://slide.kemendikdasmen.go.id/inventaris-buku-bbst/

**Deskripsi singkat:**
> Sistem inventaris buku berbasis web dengan akses login untuk mendukung pengelolaan data inventaris buku secara lebih terstruktur.

**Highlight:**
1. Sistem login untuk akses terbatas
2. Pengelolaan data buku terstruktur
3. Digitalisasi pencatatan inventaris
4. Relevan untuk perpustakaan instansi
5. Audit trail aktivitas pengguna

---

## 15. Skill Matrix

### 15.1 Frontend Development

- React
- Next.js
- TypeScript
- Tailwind CSS
- HTML5 / CSS3
- Responsive Design
- Component Architecture

### 15.2 Backend & Database

- Node.js
- PostgreSQL
- Supabase (sebagai BaaS jika diperlukan)
- REST API design
- SQL query design

### 15.3 UI/UX

- Figma
- Canva
- Wireframing
- Prototyping
- Usability Testing
- Design System

### 15.4 Programming Languages

- JavaScript
- TypeScript
- Python
- SQL
- Bash

### 15.5 Development Process

- Agile Methodology
- Git / GitHub workflow
- Testing
- Technical Documentation
- Performance Optimization
- Accessibility

### 15.6 AI-Assisted Development

- Vibe Coding (AI pair programming)
- AI agent orchestration
- Prompt engineering untuk dev tools
- AI-assisted code review
- AI-assisted documentation

### 15.7 Pengetahuan Tambahan

- System Design
- Project Management
- Network (TCP, Cisco Packet Tracer)
- Microcontroller (basic)
- Microsoft Office (Word, Excel, PowerPoint)

### 15.8 Soft Skills

- Leadership
- Communication
- Problem Solving
- Teamwork
- Adaptability
- Mentoring
- Stakeholder Management
- Critical Thinking

### 15.9 Bahasa

- Bahasa Indonesia (Native)
- Bahasa Inggris (Passive)

---

## 16. Publikasi Ilmiah (Data Asli)

### 16.1 Daftar Publikasi

**1. Sistem Deteksi Forensik Keaslian Gambar dan Video (FLAGSHIP)**
- Penulis: Wahab, A. dkk.
- Tahun: 2026
- Jurnal: Jurnal semanTIK, Volume 12 Nomor 1 Tahun 2026
- Status: Accepted / In Press (Letter of Acceptance 07 Mei 2026)
- Akreditasi: Sinta 3
- Jadwal terbit: Juni - Desember 2026
- Metode: K-Means dan Localization Tampering
- Topik: Digital Forensics, Image/Video Authentication

**2. Clustering Kebiasaan Membaca Mahasiswa di Kota Kendari**
- Penulis: Wahab, A.
- Tahun: 2025
- Jurnal: JIKO (Jurnal Informatika dan Komputer)
- Status: Published
- DOI: https://doi.org/10.26798/jiko.v9i1.952
- Topik: Data Clustering, Education Analytics

**3. Analisis Kesadaran Teknologi Informasi Siswi SMA/SMK di Kota Kendari**
- Penulis: Wahab, A.
- Tahun: 2025
- Jurnal: JATI (Jurnal Mahasiswa Teknik Informatika)
- Status: Published
- DOI: https://doi.org/10.36040/jati.v9i2.13168
- Topik: IT Awareness, Survey Research

**4. Sistem Informasi Arsip KWH Sulawesi Tenggara (Agile, VBA)**
- Penulis: Wahab, A.
- Tahun: 2024
- Jurnal: JATI (Jurnal Mahasiswa Teknik Informatika)
- Status: Published
- DOI: https://doi.org/10.36040/jati.v8i6.11763
- Topik: Information System, Agile, VBA

**5. Analisis Kinerja Protokol TCP (Cisco Packet Tracer)**
- Penulis: Wahab, A.
- Tahun: 2024
- Jurnal: JATI (Jurnal Mahasiswa Teknik Informatika)
- Status: Published
- DOI: https://doi.org/10.36040/jati.v8i6.11812
- Topik: Network, TCP Protocol, Simulation

### 16.2 Aturan Penulisan Status Publikasi (PENTING — Anti Overclaim)

1. Publikasi semanTIK WAJIB ditandai "Accepted / In Press" — JANGAN tulis "Published".
2. Tampilkan badge Sinta 3 hanya untuk semanTIK.
3. DOI hanya untuk yang benar-benar sudah terbit.
4. Jangan mengubah nama jurnal atau volume.

---

## 17. Sertifikat & Dokumen Pendukung (Data Asli)

### 17.1 Daftar Sertifikat

**1. Roadshow Gerakan Nasional 1000 Startup Digital Hub 15**
- Issuer: GN 1000 Startup Digital
- Tanggal: 18 Agustus 2022
- Kategori: Startup / Entrepreneurship

**2. Bootcamp Gerakan Nasional 1000 Startup Digital - Hub 15**
- Issuer: GN 1000 Startup Digital
- Tanggal: 12 Maret 2022
- Kategori: Startup / Entrepreneurship

**3. Program Pertukaran Mahasiswa Merdeka (PMM)**
- Issuer: Merdeka Belajar Kampus Merdeka
- Tanggal: 04 Mei 2024
- Kategori: Academic Exchange

**4. Security Monitoring dengan Wazuh Batch 2**
- Issuer: Taalenta
- Tanggal: 10 Februari 2024
- Kategori: Cybersecurity

**5. Red Team Pentester and Blue Team SOC Analyst L1 E-Course**
- Issuer: STUDI DEVSECOPS
- Tanggal: 28 September 2024
- Kategori: Cybersecurity

**6. Pembekalan 12+ Essential Skills Program Magang Nasional**
- Issuer: GNIK & Kementerian Ketenagakerjaan RI
- Tanggal: 06 Januari 2026
- Kategori: Professional Development

**7. Sertifikat Program Magang Nasional Periode 2**
- Issuer: Kementerian Pendidikan Dasar dan Menengah / Balai Bahasa Provinsi Sulawesi Tenggara
- Tanggal: 24 Mei 2026
- Nomor: 0443/I5.19/KP.04.00/2026
- Kategori: Internship

**8. Surat Keterangan Pemagangan Nasional**
- Issuer: Balai Bahasa Provinsi Sulawesi Tenggara
- Tanggal: 21 Mei 2026
- Nomor: 0768/B/G5.25/PP.02.10/2026
- Kategori: Internship Verification

### 17.2 Sertifikat Highlight (untuk Homepage)

Tampilkan yang paling relevan untuk recruiter teknis:
1. Red Team Pentester and Blue Team SOC Analyst (Cybersecurity)
2. Security Monitoring dengan Wazuh (Cybersecurity)
3. Sertifikat Magang Nasional Kemenaker (Professional)

---

## 18. Services / Layanan yang Ditawarkan

1. **Landing Page Development** — Halaman promosi cepat dan konversi tinggi.
2. **Company Profile Website** — Website profil perusahaan/instansi.
3. **Portfolio Website** — Website personal/profesional.
4. **Sistem Informasi Web** — CRUD, inventory, approval workflow.
5. **UI/UX Design** — Wireframe, prototype, design system.
6. **Technical Documentation** — Dokumentasi teknis terstruktur.
7. **Website Optimization** — Performance, SEO, accessibility.

---

## 19. Information Architecture

```
/
├── Hero
├── Quick Stats
├── About Preview
├── Featured Projects (4 cards)
├── Case Study Highlight (SEPADAN)
├── Experience Timeline
├── Skills Matrix
├── Publications Preview (3 teratas)
├── Certificates Highlight
├── Services
├── Contact CTA
└── Footer

/projects
├── Page Header
├── Filter Tabs (All / Web Portal / Sistem Informasi / UI/UX / Government / Academic)
└── Project Grid

/projects/[slug]
├── Project Hero (judul + metadata)
├── Breadcrumb
├── Overview
├── Problem
├── Goals
├── My Role
├── Process
├── Key Features
├── Tech Stack
├── Screenshots
├── Challenges
├── Solution
├── Result
├── Lessons Learned
├── CTA (Live Demo)
└── Related Projects

/about
├── Bio Lengkap
├── Education
├── Work Style
├── Values
├── Tools yang Digunakan
└── CV Download CTA

/publications
├── Publication List (5 entries)
├── DOI Links
└── Status Badges

/contact
├── Contact Intro
├── Email Card
├── LinkedIn Card
├── WhatsApp Card
├── GitHub Card (optional)
└── Quick CTA
```

---

## 20. Navigation Requirement

### 20.1 Desktop Navigation

**Menu items:**
1. Home
2. Projects
3. About
4. Experience
5. Publications
6. Contact

**Plus:**
- Logo AgriTech (kiri, link ke Home)
- Download CV button (kanan, primary CTA, selalu terlihat)

**Behavior:**
1. Sticky top.
2. Transparent saat di hero (top of page).
3. Background blur + bg/80 saat scroll (>= 50px).
4. Active section indicator (underline / glow).
5. Smooth scroll untuk section di homepage.
6. Tombol Download CV harus terlihat dengan kontras tinggi.
7. Logo AgriTech klik = home.

### 20.2 Mobile Navigation

**Behavior:**
1. Hamburger icon (kanan).
2. Klik = fullscreen overlay drawer.
3. Menu besar dan mudah ditekan (touch target >= 44px).
4. Close button jelas (X di kanan atas).
5. Klik menu = auto close.
6. Tidak membuat layout shift.
7. Animasi slide dari kanan.

### 20.3 Navbar Animation (GSAP)

**Sequence saat page load:**
1. Logo AgriTech fade + slide dari kiri (0.6s).
2. Menu items stagger fade (0.4s, stagger 0.08s).
3. Download CV button scale dari 0.9 ke 1 (0.4s).

**Saat scroll:**
1. Background dari transparent ke `rgba(5, 8, 22, 0.8)` dengan backdrop-blur.
2. Border bawah muncul (rgba 0.08).
3. Padding shrink dari 24px ke 16px.
4. Logo size shrink halus.

---

## 21. Visual Design Requirement

### 21.1 Konsep Visual

> Premium dark portfolio with glassmorphism, subtle gradients, clean typography, interactive project showcase, and cinematic GSAP motion.

### 21.2 Design Tokens — Colors

```css
/* Background */
--bg-primary: #050816;
--bg-secondary: #0B1020;
--bg-tertiary: #111827;

/* Surfaces (glass) */
--surface-card: rgba(255, 255, 255, 0.06);
--surface-card-hover: rgba(255, 255, 255, 0.10);
--surface-border: rgba(255, 255, 255, 0.12);
--surface-border-hover: rgba(255, 255, 255, 0.20);

/* Text */
--text-primary: #F8FAFC;
--text-secondary: #CBD5E1;
--text-muted: #94A3B8;
--text-disabled: #64748B;

/* Accent */
--accent-blue: #38BDF8;
--accent-cyan: #22D3EE;
--accent-emerald: #34D399;
--accent-purple: #A78BFA;
--accent-yellow: #FACC15;
--accent-pink: #F472B6;

/* Status */
--status-published: #34D399;
--status-in-press: #FACC15;
--status-completed: #38BDF8;
--status-archived: #94A3B8;

/* Glow */
--glow-blue: rgba(56, 189, 248, 0.35);
--glow-purple: rgba(167, 139, 250, 0.30);
--glow-emerald: rgba(52, 211, 153, 0.30);
```

### 21.3 Gradient Library

```css
/* Hero background (diagonal mesh) */
--gradient-hero: linear-gradient(135deg, #38BDF8 0%, #22D3EE 50%, #A78BFA 100%);

/* Radial overlay (top left) */
--gradient-radial-tl: radial-gradient(circle at top left, rgba(56, 189, 248, 0.22), transparent 32%);

/* Radial overlay (bottom right) */
--gradient-radial-br: radial-gradient(circle at bottom right, rgba(167, 139, 250, 0.18), transparent 28%);

/* Card glow */
--gradient-card-glow: radial-gradient(circle at top, rgba(56, 189, 248, 0.10), transparent 60%);

/* Text gradient */
--gradient-text: linear-gradient(135deg, #38BDF8, #22D3EE, #A78BFA);
```

### 21.4 Typography

**Font families:**
- **Heading:** Plus Jakarta Sans (700, 800)
- **Body:** Inter (400, 500, 600)
- **Mono/Code:** JetBrains Mono atau Geist Mono (400, 500)

**Type Scale:**

```
Display (hero name):    clamp(48px, 8vw, 96px)   weight 800   tracking -0.04em
H1:                     clamp(36px, 5vw, 64px)   weight 700   tracking -0.02em
H2:                     clamp(28px, 4vw, 48px)   weight 700   tracking -0.02em
H3:                     clamp(20px, 3vw, 32px)   weight 600   tracking -0.01em
H4:                     20px                     weight 600
Body Large:             18px                     weight 400   line 1.6
Body:                   16px                     weight 400   line 1.6
Body Small:             14px                     weight 400   line 1.5
Caption:                12px                     weight 500   tracking 0.04em uppercase
```

### 21.5 Layout & Spacing

- Max width container: 1280px (desktop), 1120px (content-heavy)
- Section padding desktop: 96px - 140px (top/bottom)
- Section padding mobile: 64px - 88px
- Grid gap default: 24px (desktop), 16px (mobile)
- Card padding: 24px - 32px
- Border radius card: 16px - 24px
- Border radius button: 12px

### 21.6 Shadow & Depth

```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.30);
--shadow-md: 0 8px 24px rgba(0, 0, 0, 0.40);
--shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.50);
--shadow-glow-blue: 0 0 40px rgba(56, 189, 248, 0.25);
--shadow-glow-purple: 0 0 40px rgba(167, 139, 250, 0.25);
```

---

## 22. GSAP Animation Specification

### 22.1 Prinsip Animasi

Animasi WAJIB:
1. Elegan dan cinematic.
2. Halus (60fps target).
3. Tidak mengganggu baca teks.
4. Tidak membuat website lambat.
5. Tidak membuat user pusing.
6. Memiliki fallback untuk reduced motion.
7. Tidak membuat layout shift (CLS = 0).
8. Hanya menggunakan transform dan opacity (GPU-accelerated).

Animasi TIDAK BOLEH:
1. Terlalu cepat (min duration 0.4s).
2. Terlalu banyak bounce/elastic.
3. Membuat teks sulit dibaca.
4. Membuat scroll terasa rusak.
5. Membuat mobile berat.
6. Menggunakan width/height/top/left animation.

### 22.2 Library Stack

Wajib:
- gsap (core)
- @gsap/react (useGSAP hook)
- ScrollTrigger plugin

Opsional:
- SplitText (jika lisensi tersedia, jika tidak gunakan custom span splitting)

DILARANG:
- Framer Motion (redundan dengan GSAP)
- react-spring (redundan)
- anime.js (redundan)


### 22.3 Global GSAP Setup

Buat file `lib/gsap.ts` dengan tanggung jawab:

1. Register ScrollTrigger plugin (client-side only).
2. Set default ease dan duration.
3. Cek prefers-reduced-motion dari window.matchMedia.
4. Export helper functions: createTimeline, scrollReveal, fadeUp, staggerReveal.
5. Cleanup pattern untuk component unmount.

Default config:
- ease: power3.out
- duration: 0.8s
- stagger: 0.1s
- scroll start: top 80%
- scroll end: bottom 20%
- once: true (untuk reveal)

### 22.4 Animation Components Library

Lokasi: `components/animations/`:

1. **FadeUp.tsx** - Element fade + translateY 40px ke 0
2. **TextReveal.tsx** - Text per-character/word reveal
3. **StaggerReveal.tsx** - Stagger children fade-up
4. **ScrollProgress.tsx** - Top progress bar mengikuti scroll
5. **ParallaxLayer.tsx** - Background parallax saat scroll
6. **ProjectCardMotion.tsx** - Card hover + reveal animation
7. **MagneticButton.tsx** - Button mengikuti cursor (magnetic)
8. **CounterAnimation.tsx** - Number count-up untuk Quick Stats
9. **TimelineGrowth.tsx** - Garis timeline tumbuh saat scroll
10. **GradientShift.tsx** - Gradient bergeser perlahan di background


### 22.5 Hero Animation Timeline (CINEMATIC)

Sequence saat halaman pertama kali dibuka:

| Step | Element | Animation | Duration | Delay | Ease |
|------|---------|-----------|----------|-------|------|
| 1 | Background gradient | opacity 0 ke 1 | 1.2s | 0s | power2.out |
| 2 | Radial glow overlays | scale 0.8 ke 1 + opacity | 1.0s | 0.2s | power2.out |
| 3 | Badge AgriTech Portfolio | fadeUp 20px + opacity | 0.6s | 0.4s | power3.out |
| 4 | Nama Agrian Wahab | text reveal per-word | 0.8s | 0.7s | expo.out |
| 5 | Headline subtitle | fadeUp 30px + opacity | 0.6s | 1.0s | power3.out |
| 6 | Description paragraph | fadeUp 20px + opacity | 0.5s | 1.2s | power3.out |
| 7 | CTA buttons | stagger fadeUp + scale 0.95 ke 1 | 0.5s | 1.4s | back.out(1.2) |
| 8 | Social links | stagger fadeUp | 0.4s | 1.6s | power3.out |
| 9 | Hero visual/mockup | scale 0.9 ke 1 + opacity | 0.8s | 1.0s | power3.out |
| 10 | Scroll indicator | opacity 0 ke 1 + bounce Y | 0.6s | 2.2s | power2.inOut |

Total durasi timeline: 2.8s
User bisa scroll kapan saja (tidak blocking).

### 22.6 Scroll Reveal System

Setiap section menggunakan ScrollTrigger:

- trigger: section element
- start: top 80%
- end: bottom 20%
- once: true (reveal sekali, tidak reverse)
- toggleActions: play none none none

Pattern per section:
1. Section heading: fadeUp + text reveal
2. Section description: fadeUp (delay 0.2s)
3. Content cards/items: stagger fadeUp (stagger 0.1s)

### 22.7 Project Card Animation

**Saat masuk viewport (ScrollTrigger):**
1. Fade in (opacity 0 ke 1)
2. TranslateY dari 40px ke 0
3. Scale dari 0.96 ke 1
4. Stagger antar-card: 0.12s

**Saat hover:**
1. Card translateY -4px (naik)
2. Border glow (box-shadow accent)
3. Thumbnail scale 1.04
4. CTA icon translateX +4px
5. Background surface brightness naik

**Saat filter berubah:**
1. Cards yang keluar: fadeOut + scale 0.95 (0.3s)
2. Cards yang masuk: fadeIn + scale 1 (0.4s, stagger 0.08s)


### 22.8 Case Study Storytelling Animation

Untuk project detail page, gunakan scroll storytelling cinematic:

1. **Problem section** - masuk dari kiri (translateX -60px ke 0)
2. **Solution section** - masuk dari kanan (translateX +60px ke 0)
3. **Feature list** - stagger fadeUp (stagger 0.1s)
4. **Screenshots** - parallax ringan (scrub) + scale on reveal
5. **Result cards** - scale-up 0.9 ke 1 + count-up untuk angka
6. **Tech stack badges** - stagger pop-in (scale 0 ke 1, back.out)

### 22.9 Experience Timeline Animation

1. Garis vertikal timeline tumbuh mengikuti scroll (scaleY 0 ke 1, scrub).
2. Setiap item timeline fadeUp + translateX saat masuk viewport.
3. Dot/node aktif (scale + glow) saat item masuk viewport.
4. Achievement list di tiap item: stagger fadeUp.
5. Garis menggunakan transformOrigin top.

### 22.10 Quick Stats Counter Animation

1. Saat masuk viewport: angka count-up dari 0 ke target.
2. Durasi: 1.5s, ease power2.out.
3. GPA 3.80 dengan decimal (count-up float).
4. Card fadeUp + stagger 0.1s.
5. Icon scale pop-in.

### 22.11 Skills Matrix Animation

1. Category card fadeUp saat masuk viewport.
2. Skill badges di dalam card: stagger pop-in (scale 0.8 ke 1).
3. Hover badge: glow ringan + translateY -2px.
4. JANGAN gunakan progress bar palsu (tidak ada ukuran objektif).

### 22.12 Publications Animation

1. Publication card fadeUp + slight translateX.
2. Stagger 0.12s antar-card.
3. DOI/link icon muncul + translateX saat hover.
4. Status badge (Sinta 3, Published) pop-in.

### 22.13 Contact Section Animation

1. CTA heading: text reveal + scale.
2. Contact cards: stagger fadeUp.
3. Card hover: glow + translateY -4px.
4. Social links: magnetic effect (opsional, desktop only).

### 22.14 Page Transition

1. Saat pindah halaman: fade overlay (0.4s).
2. Konten baru: fadeUp saat masuk.
3. Scroll reset ke top.

### 22.15 Reduced Motion Fallback (WAJIB)

Jika prefers-reduced-motion: reduce:
1. Matikan SEMUA parallax.
2. Matikan SEMUA scrub animation.
3. Matikan magnetic button.
4. Text reveal jadi tampil langsung (opacity 1).
5. FadeUp jadi fade sederhana tanpa translate, atau langsung tampil.
6. Counter langsung tampil angka final (tanpa count-up).
7. Hero timeline jadi simple fade (0.3s).
8. JANGAN memaksa motion apapun.


---

## 23. Page-by-Page Detail Specification

### 23.1 Home Page (/)

**Hero Section:**
- Badge: AgriTech Portfolio (chip dengan dot indicator)
- Heading: Agrian Wahab (display size, gradient text)
- Subheading: Web Developer & System Information Developer
- Description: 1-2 kalimat profesional
- CTA primary: View Projects (scroll ke #projects)
- CTA secondary: Download CV (link ke /cv/CV_Agrian_Wahab.pdf)
- CTA tertiary: Contact Me (link ke /contact)
- Social links row: LinkedIn, GitHub, Email
- Hero visual: floating browser mockup atau code snippet card
- Background: animated grid + radial gradient + 2-3 floating tech badges

**Quick Stats:**
- 4 cards horizontal grid (1 kolom mobile)
- Setiap card: icon + angka + label
- Stats:
  1. 3.80/4.00 - GPA Teknik Informatika
  2. 4 - Live Web Projects
  3. 5 - Scientific Publications
  4. 6 Bulan - Magang Nasional Kemenaker

**About Preview:**
- 2 kolom layout (text + visual)
- Heading: About AgriTech
- Paragraf intro singkat
- 3 highlight chips (Web Dev, Sistem Informasi, AI-Assisted)
- CTA: Read more about me (link ke /about)

**Featured Projects:**
- Heading: Featured Projects
- Subheading: Selected work from AgriTech
- Grid 2 kolom desktop, 1 mobile
- Card project (sesuai spec section 24)
- 4 proyek: SEPADAN (highlighted), Portal Kamus, Kamus Bergambar, Inventaris Buku
- CTA bawah: View all projects

**Case Study Highlight (SEPADAN):**
- Section khusus dengan layout berbeda
- Heading: Case Study
- Project name: SEPADAN
- Layout split: text (problem - solution - result) + visual mockup
- Bullet points key features
- CTA: View full case study + Live demo

**Experience Timeline:**
- Heading: Experience
- Vertical timeline dengan growing line
- Item utama: Magang Nasional Kemenaker (Balai Bahasa)
- Item lain: HMTI (Ketua Humas), KKP STO Kendari, PMM 3, dll
- Setiap item: tahun + posisi + organisasi + 2-3 bullet pencapaian

**Skills Matrix:**
- Heading: Skills & Expertise
- Grid 2-3 kolom
- Category cards: Frontend, Backend, UI/UX, Languages, Process, AI-Assisted
- Setiap card: title + 5-8 skill badges

**Publications Preview:**
- Heading: Scientific Publications
- 3 publikasi teratas (semanTIK Sinta 3, JIKO 2025, JATI 2025)
- Card list dengan title, jurnal, tahun, status, DOI
- CTA: View all publications

**Certificates Highlight:**
- 3 sertifikat utama (Red Team/Blue Team, Wazuh, Magang Kemenaker)
- Card dengan logo issuer + title + tanggal

**Services:**
- Heading: What I Can Build
- Grid 3 kolom (1 mobile)
- 7 service cards: Landing Page, Company Profile, Portfolio, Sistem Informasi, UI/UX, Documentation, Optimization
- Setiap card: icon + title + 1 kalimat deskripsi

**Contact CTA:**
- Background: gradient dengan glow
- Heading besar: Let us build something great
- Description singkat
- 3 button: Email, LinkedIn, WhatsApp

**Footer:**
- Brand AgriTech + tagline
- Quick links navigation
- Social links
- Copyright + Built with Next.js + GSAP


### 23.2 Projects Page (/projects)

- Page header: title + description
- Filter tabs: All, Web Portal, Sistem Informasi, UI/UX, Government, Academic
- Filter behavior: client-side state, no page reload, GSAP layout animation
- Project grid: 2 kolom desktop, 1 mobile
- Empty state jika filter tidak match
- Smooth animation saat filter berubah

### 23.3 Project Detail Page (/projects/[slug])

- Breadcrumb: Home > Projects > [Project Name]
- Project hero: title + category + year + status + tech stack badges
- Metadata sidebar: role, year, category, status, live demo link
- Content sections: Overview, Problem, Goals, My Role, Process, Features, Tech Stack, Screenshots, Challenges, Solution, Result, Lessons Learned
- Screenshots: lightbox atau carousel
- CTA: Live Demo button + Back to projects
- Related projects: 2-3 card di bawah

### 23.4 About Page (/about)

- Personal intro (2-3 paragraf)
- Education card (UHO, S1 TI, 2021-2025, GPA 3.80)
- Professional focus (3-4 area)
- Work style (requirement-first, user-focused, clean code, documentation, testing, iteration)
- Values (integritas, rapi, adaptif, kolaboratif)
- Tools grid (Figma, VS Code, GitHub, Vercel, Supabase, dll)
- CV download CTA

### 23.5 Publications Page (/publications)

- Page header
- Publication list (5 entries)
- Setiap entry: title, authors, journal, year, status badge, DOI link, topic tags
- Filter by year opsional
- Status badge: Published (green), Accepted/In Press (yellow)

### 23.6 Contact Page (/contact)

- Heading: Get in Touch
- Description singkat
- Contact cards grid:
  1. Email card (agrianwahab10@gmail.com)
  2. LinkedIn card
  3. WhatsApp card (+6282291134197)
  4. GitHub card (opsional)
- Simple CTA
- Opsional: form via mailto atau Formspree

### 23.7 404 Page

- Heading: Page Not Found
- Deskripsi singkat
- CTA: Back to Home
- Animasi ringan (floating 404 text)


---

## 24. Technical Stack & Requirement

### 24.1 Stack Wajib

| Layer | Technology | Versi |
|-------|-----------|-------|
| Framework | Next.js | 15.x (App Router) |
| Language | TypeScript | 5.x (strict) |
| Styling | Tailwind CSS | 3.x atau 4.x |
| Animation | GSAP | 3.x |
| GSAP React | @gsap/react | latest |
| GSAP Plugin | ScrollTrigger | bundled |
| Icons | Lucide React | latest |
| Deploy | Vercel | - |
| VCS | GitHub | - |

### 24.2 Stack Opsional

- MDX (@next/mdx atau next-mdx-remote) untuk case study
- clsx + tailwind-merge untuk className management
- class-variance-authority untuk component variants
- next/font untuk font optimization

### 24.3 DILARANG Digunakan

- Database apapun (MySQL, PostgreSQL, Supabase DB, Firebase, MongoDB)
- Authentication / login system
- Admin panel
- CMS
- Framer Motion
- Backend API server terpisah
- Server-side session

### 24.4 Rendering Strategy

1. Static-first: semua data dari file lokal TypeScript.
2. Homepage: static generation (SSG).
3. Project detail: generateStaticParams dari data lokal.
4. Tidak ada server action untuk konten utama.
5. Client component hanya untuk bagian interaktif (animasi, filter, nav).
6. Server component untuk konten statis.

### 24.5 Component Strategy

- `use client` HANYA untuk: Navbar, MobileMenu, animasi GSAP, ProjectFilter, MagneticButton.
- Server component untuk: section statis, data display, layout.
- GSAP register HANYA di client component.
- useGSAP hook untuk cleanup otomatis.

### 24.6 Deployment Flow

1. Source code di GitHub.
2. Repo terhubung ke Vercel project.
3. Push ke main = auto deploy production.
4. Pull request = preview deployment.
5. Build command: next build.
6. Output: static + serverless (minimal).
7. MCP Vercel digunakan untuk deploy & monitor build logs.


---

## 25. Content Model (TypeScript Types)

### 25.1 Project Type

```ts
export type ProjectStatus = 'Published' | 'Completed' | 'Case Study' | 'Academic' | 'In Progress' | 'Archived';

export type Project = {
  id: string;
  title: string;
  slug: string;
  category: string;
  year: string;
  status: ProjectStatus;
  featured: boolean;
  priority: number;
  summary: string;
  description: string;
  problem?: string;
  goals?: string[];
  solution?: string;
  role: string;
  techStack: string[];
  features: string[];
  thumbnail: string;
  screenshots?: string[];
  demoUrl?: string;
  githubUrl?: string;
  caseStudySlug?: string;
  tags: string[];
  result?: string;
  lessonsLearned?: string[];
};
```

### 25.2 Skill Type

```ts
export type SkillGroup = {
  title: string;
  description: string;
  icon: string;
  skills: string[];
};
```

### 25.3 Publication Type

```ts
export type PublicationStatus = 'Published' | 'Accepted' | 'In Press' | 'Under Review';

export type Publication = {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  volume?: string;
  status: PublicationStatus;
  accreditation?: string;
  doiUrl?: string;
  topic: string[];
};
```

### 25.4 Certificate Type

```ts
export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  number?: string;
  credentialUrl?: string;
};
```

### 25.5 Experience Type

```ts
export type Experience = {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  type: 'internship' | 'organization' | 'academic' | 'volunteer' | 'speaker';
  description: string;
  achievements: string[];
  technologies?: string[];
};
```

### 25.6 Service Type

```ts
export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};
```

### 25.7 Social Type

```ts
export type Social = {
  platform: string;
  url: string;
  icon: string;
  label: string;
};
```


---

## 26. Folder Structure

```txt
AgriTech-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── not-found.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── publications/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── Footer.tsx
│   │   └── ScrollProgress.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── QuickStats.tsx
│   │   ├── AboutPreview.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── CaseStudyHighlight.tsx
│   │   ├── ExperienceTimeline.tsx
│   │   ├── SkillsMatrix.tsx
│   │   ├── PublicationsPreview.tsx
│   │   ├── CertificatesHighlight.tsx
│   │   ├── Services.tsx
│   │   └── ContactCTA.tsx
│   ├── projects/
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectGrid.tsx
│   │   ├── ProjectFilter.tsx
│   │   ├── ProjectHero.tsx
│   │   ├── ProjectMeta.tsx
│   │   └── RelatedProjects.tsx
│   ├── animations/
│   │   ├── FadeUp.tsx
│   │   ├── TextReveal.tsx
│   │   ├── StaggerReveal.tsx
│   │   ├── ParallaxLayer.tsx
│   │   ├── MagneticButton.tsx
│   │   └── CounterAnimation.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── Card.tsx
│       ├── SectionHeading.tsx
│       └── Container.tsx
│
├── data/
│   ├── profile.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   ├── publications.ts
│   ├── certificates.ts
│   ├── services.ts
│   └── socials.ts
│
├── content/
│   └── projects/
│       ├── sepadan.mdx
│       ├── portal-kamus-digital-bbst.mdx
│       ├── kamus-bergambar-sultra.mdx
│       └── inventaris-buku-bbst.mdx
│
├── lib/
│   ├── utils.ts
│   ├── gsap.ts
│   ├── constants.ts
│   ├── metadata.ts
│   └── projects.ts
│
├── types/
│   └── index.ts
│
├── public/
│   ├── images/
│   │   ├── profile/
│   │   ├── projects/
│   │   ├── og/
│   │   └── brand/
│   ├── cv/
│   │   └── CV_Agrian_Wahab.pdf
│   ├── favicon.ico
│   └── site.webmanifest
│
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```


---

## 27. SEO Requirement

### 27.1 Metadata Utama

**Title Template:**
```txt
%s | AgriTech - Agrian Wahab
```n
**Default Title:**
```txt
AgriTech - Agrian Wahab Portfolio
```n
**Description:**
```txt
Portfolio resmi Agrian Wahab, Web Developer dan System Information Developer yang berfokus pada pengembangan web modern, sistem informasi, UI/UX, dokumentasi teknis, dan AI-assisted development.
```n
**Keywords:**
```txt
Agrian Wahab, AgriTech, Web Developer, Next.js Developer, React Developer, Portfolio Developer Indonesia, System Information Developer, UI UX, Technical Documentation, Fresh Graduate Teknik Informatika, Sulawesi Tenggara Developer
```n
### 27.2 Open Graph

- og:title: AgriTech - Interactive Developer Portfolio
- og:description: Explore web projects, system information projects, publications, and professional experience by Agrian Wahab.
- og:image: /images/og/AgriTech-og.png (1200x630)
- og:type: website
- og:locale: id_ID

### 27.3 Twitter Card

- twitter:card: summary_large_image
- twitter:title: dari og:title
- twitter:description: dari og:description
- twitter:image: dari og:image

### 27.4 Per-Page Metadata

Setiap halaman wajib punya metadata unik:
- Home: Default site metadata
- Projects: Projects | AgriTech
- Project Detail: [Project Name] | AgriTech Case Study
- About: About | AgriTech
- Publications: Publications | AgriTech
- Contact: Contact | AgriTech

### 27.5 Technical SEO

1. `app/sitemap.ts` - auto-generated sitemap
2. `app/robots.ts` - robots.txt config
3. Semantic HTML (header, nav, main, section, article, footer)
4. Heading hierarchy (h1 sekali per page, h2-h6 sequential)
5. Alt text WAJIB pada semua gambar
6. Descriptive link text (jangan `click here`)
7. Canonical URL setelah custom domain ada
8. Lang attribute: id
9. Schema.org Person + Website (JSON-LD)

### 27.6 JSON-LD Schema

Gunakan structured data untuk:
- Person (Agrian Wahab)
- Website (AgriTech Portfolio)
- CreativeWork (untuk publications)
- BreadcrumbList (project detail)

---

## 28. Performance Requirement

### 28.1 Target Metrics

| Metric | Target | Critical |
|--------|--------|----------|
| Lighthouse Performance | >= 90 | YES |
| Lighthouse Accessibility | >= 95 | YES |
| Lighthouse Best Practices | >= 95 | YES |
| Lighthouse SEO | >= 95 | YES |
| LCP | < 2.5s | YES |
| FID / INP | < 100ms / < 200ms | YES |
| CLS | < 0.1 | YES |
| TTI | < 3.5s | recommended |
| First Load JS | < 200kb | recommended |

### 28.2 Optimasi Gambar

1. Gunakan `next/image` untuk SEMUA gambar.
2. Format: WebP/AVIF (auto via Next.js).
3. Compress screenshot project (TinyPNG / Squoosh).
4. Thumbnail max 1600x900.
5. Profile photo max 800x800.
6. Placeholder blur untuk hero/featured images.
7. Lazy loading default (above-fold pakai priority).

### 28.3 Optimasi GSAP

1. Register plugin HANYA di client component.
2. useGSAP hook untuk auto cleanup.
3. Hindari animasi layout property (width, height, top, left).
4. Prioritaskan transform (translate, scale, rotate) + opacity.
5. ScrollTrigger.refresh() saat content berubah.
6. Kill timeline saat unmount.
7. Hindari multiple ScrollTrigger di section yang sama.

### 28.4 Optimasi JavaScript

1. Pecah komponen jadi kecil-kecil (high cohesion).
2. Client component HANYA untuk bagian interaktif.
3. Server component default untuk konten statis.
4. Hindari library besar yang tidak perlu.
5. Tree-shaking aware imports.
6. Dynamic import untuk komponen heavy.
7. Bundle analyzer rutin (next-bundle-analyzer).


---

## 29. Accessibility Requirement

### 29.1 WCAG 2.1 AA Compliance

1. Kontras warna minimum 4.5:1 (body text), 3:1 (large text).
2. Keyboard navigation WAJIB berfungsi (Tab, Shift+Tab, Enter, Escape).
3. Focus ring visible (outline 2px accent color).
4. Skip to content link (hidden, visible on focus).
5. Semua link memiliki label jelas (bukan click here).
6. Semua button memiliki accessible name.
7. Tidak mengandalkan warna saja untuk informasi.
8. Alt text pada SEMUA gambar.
9. Heading hierarchy rapi (h1 > h2 > h3, sequential).
10. Ukuran font minimum 16px body.
11. Touch target minimum 44x44px (mobile).
12. aria-label untuk icon-only buttons.
13. role dan aria attributes untuk custom components.

### 29.2 Reduced Motion (CRITICAL)

Jika `prefers-reduced-motion: reduce`:
1. Matikan parallax.
2. Matikan scrub animation.
3. Matikan magnetic button.
4. Text reveal langsung tampil.
5. FadeUp jadi instant appear.
6. Counter langsung tampil angka final.
7. Hero timeline jadi simple fade 0.3s.
8. Page transition jadi instant.

### 29.3 Screen Reader Support

1. Semantic HTML (nav, main, section, article, aside, footer).
2. aria-current untuk active nav item.
3. aria-expanded untuk mobile menu.
4. aria-hidden untuk decorative elements.
5. sr-only class untuk visually hidden labels.
6. Live regions untuk dynamic content (filter results count).

---

## 30. Responsive Design Requirement

### 30.1 Breakpoints

```txt
Mobile:        320px - 767px
Tablet:        768px - 1023px
Desktop:       1024px - 1439px
Large Desktop: 1440px+
```n
### 30.2 Mobile (320-767px)

1. Single column layout.
2. Font heading: clamp reduced.
3. Navbar: hamburger menu.
4. Project card: full width.
5. Animasi lebih sederhana (no parallax, simpler reveals).
6. Section padding: 64px-88px.
7. Stats: 2x2 grid.
8. Timeline: simplified (no growing line, just stacked cards).

### 30.3 Tablet (768-1023px)

1. 2 kolom grid untuk cards.
2. Navbar: bisa desktop jika cukup, atau hamburger.
3. Timeline: full version.
4. Section padding: 80px-100px.

### 30.4 Desktop (1024px+)

1. Full animation suite.
2. Grid 2-3 kolom.
3. Hero split layout (text + visual).
4. Case study cinematic layout.
5. Magnetic buttons aktif.
6. Parallax aktif.
7. Section padding: 96px-140px.

---

## 31. Security Requirement

Karena website static tanpa database dan auth, risiko minimal. Tetap wajib:

1. Tidak menyimpan secret/token di frontend code.
2. Tidak menaruh data sensitif di repository.
3. Gunakan email profesional (bukan personal).
4. Dependency audit rutin (npm audit).
5. Gunakan exact version di package.json.
6. Jangan expose file private di /public.
7. Jangan commit .env file.
8. Validasi input jika pakai contact form.
9. CSP headers via next.config.ts.
10. X-Frame-Options, X-Content-Type-Options headers.

### 31.1 Data Publik Warning

Semua data di website dianggap PUBLIK. JANGAN masukkan:
1. Dokumen identitas (KTP, KK).
2. Nomor sertifikat sensitif (kecuali yang memang publik).
3. Private token / API key.
4. Credential apapun.
5. Data internal instansi yang tidak boleh dipublikasikan.
6. Foto pribadi yang tidak ingin publik.


---

## 32. Copywriting Guidelines

### 32.1 Prinsip

1. Singkat, jelas, profesional.
2. Berorientasi hasil dan bukti.
3. Tidak overclaim.
4. Tidak bertele-tele.

### 32.2 Kata yang Direkomendasikan

Membangun, Mengembangkan, Mendukung, Mengoptimalkan, Mendokumentasikan, Mengelola, Merancang, Mengimplementasikan, Memvalidasi, Meningkatkan, Menyelesaikan, Mempublikasikan.

### 32.3 Kata yang Dihindari

Paling ahli, Master, Sangat jago, Hacker profesional, Dijamin sempurna, 100% terbaik, Semua bisa, Tanpa bug, Expert level, Guru.

### 32.4 Hero Copy

```txt
AgriTech Portfolio

Agrian Wahab
Web Developer & System Information Developer

Saya membangun website modern, sistem informasi, dan solusi digital yang rapi, fungsional, terdokumentasi, dan mudah digunakan.
```n
### 32.5 About Copy

```txt
Saya adalah lulusan Teknik Informatika dengan fokus pada pengembangan web, sistem informasi, UI/UX, pengolahan data, jaringan komputer, dan kecerdasan buatan. Saya terbiasa mengerjakan proses pengembangan mulai dari analisis kebutuhan, perancangan antarmuka, implementasi fitur, testing, dokumentasi teknis, hingga optimasi performa.

Melalui AgriTech, saya ingin membangun solusi digital yang tidak hanya terlihat modern, tetapi juga memiliki struktur, fungsi, dan pengalaman pengguna yang baik.
```n
### 32.6 Services Copy

```txt
Saya dapat membantu membangun website dan sistem digital seperti landing page, company profile, portfolio website, sistem informasi sederhana, UI/UX prototype, dokumentasi teknis, dan optimasi tampilan web.
```n
### 32.7 Contact Copy

```txt
Tertarik bekerja sama, berdiskusi tentang peluang kerja, atau membangun sistem digital bersama AgriTech? Mari terhubung.
```n
---

## 33. UI Component Specification

### 33.1 Button

**Variants:** primary, secondary, ghost, link
**States:** default, hover, focus, active, disabled
**Primary:** gradient bg + glow on hover + scale 0.98 on active
**Secondary:** glass surface + border + brightness on hover
**Ghost:** transparent + bg on hover
**Link:** underline animation on hover

### 33.2 Badge

**Variants:** tech, category, status, year
**Tech:** glass + accent border
**Status:** color-coded (Published green, In Press yellow, Completed blue)
**Category:** subtle bg + text
**Year:** muted, small

### 33.3 Card

**Variants:** project, skill, publication, certificate, service, stat
**Base:** glass surface + border + radius 16-24px
**Hover:** border glow + translateY -4px + brightness

### 33.4 Section Heading

**Structure:** eyebrow label + main heading + description
**Example:**
```txt
FEATURED PROJECTS
Selected work from AgriTech
Beberapa proyek web dan sistem informasi yang telah dibangun dan dipublikasikan.
```n
### 33.5 Container

- Max-width 1280px
- Padding horizontal: 24px (mobile), 48px (desktop)
- Center auto margin


---

## 34. Image & Asset Requirement

### 34.1 Gambar Wajib

1. Profile photo (profesional, square, 800x800).
2. Project screenshots (4 proyek utama, 1600x900).
3. OG image global (1200x630).
4. Favicon (.ico + .png variants).
5. Logo AgriTech wordmark (SVG).
6. Logo monogram AT (SVG).
7. Apple touch icon (180x180).

### 34.2 Style Screenshot

1. Rasio 16:9.
2. Bersih, tidak blur.
3. Tidak menampilkan data sensitif.
4. Compress (TinyPNG / Squoosh).
5. Format WebP atau AVIF.
6. Optional: mockup browser frame.

### 34.3 Fallback Image

Jika project belum punya screenshot:
1. Gradient placeholder dengan icon kategori.
2. Tidak boleh broken image.
3. Tidak boleh placeholder generic stock photo.

---

## 35. Brand Asset Requirement

### 35.1 Logo Variants

1. Wordmark: `AgriTech` (font Plus Jakarta Sans Bold)
2. Monogram: `AT` (geometric, untuk favicon)
3. With tagline: AgriTech | Modern Web & Information Systems

### 35.2 Logo Style

1. Clean, modern, tidak ramai.
2. Bisa di dark background (utama).
3. Bisa di light background (fallback).
4. Scalable (SVG).
5. Monochrome version untuk print.

### 35.3 Tagline Hierarchy

**Primary:** Modern Web & Information Systems.
**Secondary:** Build. Design. Optimize.
**Tertiary:** Digital Solutions with Purpose.

---

## 36. Development Workflow

### Phase 1 - Setup Project

1. Init Next.js 15 dengan App Router + TypeScript.
2. Setup Tailwind CSS.
3. Install GSAP + @gsap/react.
4. Setup folder structure.
5. Setup ESLint + Prettier.
6. Setup base metadata.
7. Connect ke Vercel project (via MCP).
8. Setup git + push initial commit.

### Phase 2 - Data Foundation

1. Buat `types/index.ts`.
2. Buat `data/profile.ts` (data dari CV).
3. Buat `data/projects.ts` (4 proyek).
4. Buat `data/skills.ts`.
5. Buat `data/experience.ts`.
6. Buat `data/publications.ts` (5 publikasi).
7. Buat `data/certificates.ts` (8 sertifikat).
8. Buat `data/services.ts`.
9. Buat `data/socials.ts`.
10. Tambah CV PDF ke `public/cv/`.

### Phase 3 - UI Foundation

1. Container, Button, Badge, Card.
2. SectionHeading.
3. Navbar + MobileMenu.
4. Footer.
5. Globals.css dengan design tokens.

### Phase 4 - GSAP Foundation

1. `lib/gsap.ts` setup.
2. Animation components (FadeUp, TextReveal, StaggerReveal, etc).
3. Reduced motion handler.

### Phase 5 - Homepage

1. Hero (cinematic timeline).
2. QuickStats (counter).
3. AboutPreview.
4. FeaturedProjects.
5. CaseStudyHighlight.
6. ExperienceTimeline.
7. SkillsMatrix.
8. PublicationsPreview.
9. CertificatesHighlight.
10. Services.
11. ContactCTA.

### Phase 6 - Other Pages

1. /projects (listing + filter).
2. /projects/[slug] (case study).
3. /about.
4. /publications.
5. /contact.
6. /not-found.

### Phase 7 - SEO & Performance

1. Metadata per halaman.
2. OG image generation.
3. sitemap.ts + robots.ts.
4. Image optimization audit.
5. Lighthouse testing.
6. Bundle analyzer check.

### Phase 8 - QA & Deploy

1. Responsive testing (mobile, tablet, desktop).
2. Browser testing (Chrome, Firefox, Safari).
3. Accessibility audit (axe, Lighthouse).
4. Link checking.
5. CV download testing.
6. Vercel preview deployment.
7. Final production deploy.
8. Custom domain (jika ada).


---

## 37. Acceptance Criteria

Website dianggap SELESAI jika:

1. Home page tampil rapi di desktop, tablet, dan mobile.
2. Brand AgriTech terlihat jelas di hero dan navbar.
3. GSAP animation berjalan smooth (60fps, no jank).
4. Reduced motion didukung dan berfungsi.
5. Semua 4 proyek utama tampil di homepage dan projects page.
6. Setiap proyek punya halaman detail case study.
7. CV bisa di-download dengan satu klik.
8. Contact link (email, LinkedIn, WhatsApp) berfungsi.
9. Tidak ada broken link.
10. Tidak ada broken image.
11. Lighthouse Performance >= 90.
12. Lighthouse Accessibility >= 95.
13. Lighthouse SEO >= 95.
14. Website berhasil deploy ke Vercel.
15. Data bisa diperbarui lewat file lokal + push GitHub.
16. Tidak ada database.
17. Tidak ada login/auth.
18. Tidak ada secret di source code.
19. Tampilan terlihat profesional dan premium.
20. Mobile experience nyaman (touch target, font size, spacing).
21. Navbar responsive dan berfungsi.
22. Filter project berfungsi tanpa reload.
23. SEO metadata lengkap per halaman.
24. Sitemap dan robots.txt tersedia.
25. 404 page custom tersedia.

---

## 38. QA Checklist

### 38.1 Functional QA

- [ ] Semua menu navigasi bisa diklik dan mengarah benar.
- [ ] Smooth scroll bekerja untuk section di homepage.
- [ ] Project filter bekerja (semua kategori).
- [ ] Project detail terbuka dari card.
- [ ] Live demo link terbuka di tab baru.
- [ ] Download CV berjalan (file terdownload).
- [ ] Contact link benar (email, LinkedIn, WhatsApp).
- [ ] Social links benar.
- [ ] 404 page muncul jika route salah.
- [ ] Back to top button berfungsi.
- [ ] Mobile menu open/close berfungsi.
- [ ] Breadcrumb di project detail berfungsi.

### 38.2 Visual QA

- [ ] Tidak ada teks terlalu kecil (min 16px body).
- [ ] Tidak ada card berantakan.
- [ ] Tidak ada warna kontras buruk.
- [ ] Tidak ada overflow horizontal.
- [ ] Section spacing konsisten.
- [ ] Mobile layout rapi.
- [ ] Dark theme nyaman dibaca.
- [ ] Gradient tidak terlalu terang/mengganggu.
- [ ] Glass effect terlihat premium.

### 38.3 Animation QA

- [ ] Hero animation tidak patah/jank.
- [ ] Scroll animation tidak delay berlebihan.
- [ ] Project card hover halus.
- [ ] Timeline animation sinkron dengan scroll.
- [ ] Counter animation berjalan saat masuk viewport.
- [ ] Reduced motion bekerja (semua animasi off/simplified).
- [ ] Tidak ada animasi yang membuat layout shift (CLS = 0).
- [ ] Stagger timing terasa natural.

### 38.4 Performance QA

- [ ] Lighthouse Performance >= 90.
- [ ] LCP < 2.5s.
- [ ] CLS < 0.1.
- [ ] INP < 200ms.
- [ ] Gambar sudah dikompres.
- [ ] Tidak ada JavaScript berlebihan.
- [ ] Bundle size reasonable (< 200kb first load).

### 38.5 Accessibility QA

- [ ] Keyboard navigation berfungsi end-to-end.
- [ ] Focus ring terlihat jelas.
- [ ] Alt text tersedia pada semua gambar.
- [ ] Heading hierarchy benar (sequential).
- [ ] Button dan link punya accessible name.
- [ ] Contrast ratio >= 4.5:1 body, >= 3:1 large text.
- [ ] Touch target >= 44px mobile.
- [ ] Skip to content link tersedia.


---

## 39. Risiko dan Mitigasi

### 39.1 Animasi Terlalu Berat
**Mitigasi:** transform + opacity only, kurangi parallax mobile, ScrollTrigger secukupnya, reduced motion fallback.

### 39.2 Website Terlihat Terlalu Ramai
**Mitigasi:** spacing luas, batasi glow, fokus konten proyek, jangan terlalu banyak warna.

### 39.3 Sulit Update Portfolio
**Mitigasi:** struktur data rapi, template project object, dokumentasi README, MDX untuk case study.

### 39.4 Overclaim
**Mitigasi:** kata berbasis bukti, hindari klaim berlebihan, fokus proyek nyata, role jujur, status publikasi akurat (semanTIK = In Press, bukan Published).

### 39.5 Gambar Belum Tersedia
**Mitigasi:** gradient placeholder dengan icon kategori, siapkan screenshot bertahap, jangan broken image.

### 39.6 Build Error di Vercel
**Mitigasi:** test build lokal dulu (next build), cek TypeScript strict errors, monitor build logs via MCP Vercel.

---

## 40. README Requirement

Repository wajib punya README berisi:
1. Nama project + deskripsi.
2. Tech stack.
3. Cara install (npm install).
4. Cara run lokal (npm run dev).
5. Cara tambah project baru.
6. Cara tambah publikasi.
7. Cara update CV.
8. Cara deploy ke Vercel.
9. Struktur folder.
10. Environment notes (tidak ada env yang dibutuhkan).

---

## 41. Cara Tambah Project Baru (untuk Bos Agrian)

1. Siapkan screenshot, masukkan ke `public/images/projects/nama-project.webp`.
2. Tambahkan object baru di `data/projects.ts`.
3. Buat case study di `content/projects/nama-project.mdx` (opsional).
4. Commit: `git add . && git commit -m feat: add new project`.
5. Push: `git push origin main`.
6. Vercel otomatis deploy.

---

## 42. Roadmap

### V1 - Foundation

Home, Projects, Project Detail, About, Publications, Contact, GSAP basic, deploy Vercel.

### V2 - Content Depth

MDX case study, full publications, certificates page, better SEO, OG image.

### V3 - Premium Interaction

Advanced GSAP storytelling, scroll progress, magnetic buttons, timeline growth, filter animation.

### V4 - Professional Expansion

English version, blog/notes, theme switch, custom domain, contact form integration, command menu.

---

## 43. Definition of Done

- [ ] Website selesai secara visual dan fungsional.
- [ ] Semua halaman utama tersedia.
- [ ] Semua data dari CV sudah masuk dengan akurat.
- [ ] 4 proyek utama tampil.
- [ ] 5 publikasi tampil dengan status akurat.
- [ ] 8 sertifikat tersedia.
- [ ] GSAP animation aktif dan smooth.
- [ ] Reduced motion aman.
- [ ] Responsive mobile/tablet/desktop rapi.
- [ ] SEO metadata lengkap.
- [ ] CV dapat diunduh.
- [ ] Contact link berfungsi.
- [ ] Tidak ada database.
- [ ] Tidak ada auth.
- [ ] Tidak ada error build.
- [ ] Berhasil deploy ke Vercel.
- [ ] README tersedia.
- [ ] Lighthouse score sesuai target.

---

## 44. Final Product Definition

> Website portofolio interaktif berbasis Next.js, TypeScript, Tailwind CSS, dan GSAP untuk brand AgriTech milik Agrian Wahab, di-deploy ke Vercel tanpa database dan tanpa auth, menggunakan data lokal, memiliki halaman proyek dan case study cinematic, SEO-friendly, mobile-friendly, cepat, mudah diperbarui, accessible, dan terlihat profesional untuk dilirik perusahaan.

**Prioritas utama:**
1. Recruiter paham siapa Agrian Wahab dalam 5 detik pertama.
2. Proyek utama (SEPADAN) terlihat kuat dan mudah diakses.
3. Animasi GSAP terasa premium tanpa mengorbankan performa.
4. Website cepat (Lighthouse >= 90).
5. Struktur kode rapi dan mudah dirawat.
6. Konten mudah diperbarui via file lokal.
7. Tanpa database, tanpa auth, Vercel-only.
8. Brand AgriTech terlihat jelas dan profesional.

---

**Disusun untuk Bos Agrian (Agrian Wahab) | AgriTech | v2.0 ULTRA COMPLEX**

*Modern Web & Information Systems.*
