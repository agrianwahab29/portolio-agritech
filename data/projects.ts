import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "sepadan",
    title: "SEPADAN — Sistem Pengelolaan Barang Persediaan",
    slug: "sepadan",
    category: "Sistem Informasi",
    year: "2026",
    status: "Published",
    featured: true,
    priority: 1,
    summary:
      "Sistem pengelolaan barang persediaan untuk pencatatan transaksi masuk-keluar, pemantauan stok, permintaan, persetujuan, pelaporan, audit trail, dan manajemen pengguna.",
    description:
      "Sistem pengelolaan barang persediaan untuk mendukung pencatatan transaksi masuk-keluar, pemantauan stok, permintaan, persetujuan, pelaporan, audit trail, dan manajemen pengguna di Balai Bahasa Provinsi Sulawesi Tenggara.",
    problem:
      "Pencatatan barang masih manual/spreadsheet, tidak ada audit trail, approval workflow tidak terstandar, sulit memantau stok real-time, pelaporan butuh waktu lama.",
    goals: [
      "Digitalisasi pencatatan barang masuk-keluar",
      "Dashboard monitoring stok real-time",
      "Workflow permintaan & persetujuan terintegrasi",
      "Audit trail otomatis untuk semua transaksi",
      "Modul pelaporan dengan filter",
    ],
    solution:
      "Sistem pencatatan transaksi terstruktur dengan dashboard monitoring, workflow approval multi-level, audit trail otomatis, dan modul pelaporan periodik.",
    role: "Full-stack Developer (analisis kebutuhan, UI/UX, implementasi, testing, dokumentasi)",
    techStack: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript", "Blade"],
    features: [
      "Pencatatan barang masuk dan keluar",
      "Monitoring stok real-time",
      "Approval workflow multi-level",
      "Audit trail (who, what, when)",
      "Laporan periodik",
      "Manajemen pengguna dengan role",
      "Notifikasi permintaan & persetujuan",
    ],
    thumbnail: "/images/projects/sepadan.webp",
    demoUrl: "https://slide.kemendikdasmen.go.id/sepadan/",
    tags: ["inventory", "workflow", "government", "full-stack"],
    result:
      "Sistem digunakan di Balai Bahasa Provinsi Sulawesi Tenggara. Mengurangi waktu pencatatan manual, audit trail yang dapat diaudit kapan saja, approval terstandar antar bagian.",
    challenges: [
      "Menyesuaikan alur kerja instansi yang sudah berjalan",
      "Memastikan audit trail tidak bisa dimanipulasi",
      "Membuat UI yang mudah digunakan oleh staf non-teknis",
    ],
    lessonsLearned: [
      "Pentingnya analisis kebutuhan mendalam sebelum coding",
      "Approval workflow butuh edge-case handling yang detail",
      "Dokumentasi teknis mempercepat onboarding pengguna baru",
    ],
  },
  {
    id: "portal-kamus",
    title: "Portal Kamus Digital BBST Sultra",
    slug: "portal-kamus-digital-bbst",
    category: "Web Portal",
    year: "2026",
    status: "Published",
    featured: true,
    priority: 2,
    summary:
      "Portal kamus digital berbasis web untuk akses bahasa daerah Sulawesi Tenggara. Mencakup 7 sub-kamus bahasa daerah.",
    description:
      "Portal kamus digital berbasis web untuk akses bahasa daerah Sulawesi Tenggara. Mencakup halaman portal dan 7 sub-kamus: Cia-Cia, Culambacu, Kulisusu, Moronene, Lasalimu-Kamaru, Muna, dan Tolaki.",
    role: "Full-stack Developer (desain portal, integrasi sub-kamus, deployment)",
    techStack: ["React", "Vite", "TypeScript", "Tailwind CSS", "PHP"],
    features: [
      "Portal publik di domain resmi kemendikdasmen.go.id",
      "Digitalisasi 7 bahasa daerah Sulawesi Tenggara",
      "Struktur sub-kamus yang scalable",
      "UI akses informasi yang ramah pengguna",
      "Pencarian kata lintas bahasa",
    ],
    thumbnail: "/images/projects/portal-kamus.webp",
    demoUrl: "https://slide.kemendikdasmen.go.id/kamus-bbst-sultra/",
    tags: ["portal", "education", "government", "multi-language"],
    result:
      "Portal publik aktif di domain pemerintah, digunakan untuk pelestarian bahasa daerah Sulawesi Tenggara.",
  },
  {
    id: "kamus-bergambar",
    title: "Kamus Bergambar Sulawesi Tenggara",
    slug: "kamus-bergambar-sultra",
    category: "Web Portal",
    year: "2026",
    status: "Published",
    featured: true,
    priority: 3,
    summary:
      "Portal kamus bergambar untuk pembelajaran bahasa daerah berbasis visual dengan akses publik untuk Kulisusu, Muna, Tolaki, dan Wakatobi.",
    description:
      "Portal kamus bergambar untuk pembelajaran bahasa daerah berbasis visual. Mencakup 4 bahasa daerah: Kulisusu, Muna, Tolaki, dan Wakatobi. Dirancang sebagai media pembelajaran visual untuk anak-anak dan pelajar.",
    role: "Full-stack Developer (desain visual, integrasi gambar, deployment)",
    techStack: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    features: [
      "Media pembelajaran visual untuk anak-anak dan pelajar",
      "4 bahasa daerah dengan pendekatan visual",
      "Akses publik di domain pemerintah",
      "Desain ramah pengguna",
      "Cocok untuk edukasi formal dan informal",
    ],
    thumbnail: "/images/projects/kamus-bergambar.webp",
    demoUrl: "https://slide.kemendikdasmen.go.id/kamusbergambar-sultra/",
    tags: ["education", "visual-learning", "government", "children"],
    result:
      "Portal aktif di domain pemerintah, digunakan sebagai media pembelajaran bahasa daerah berbasis visual.",
  },
  {
    id: "inventaris-buku",
    title: "Sistem Inventaris Buku BBST",
    slug: "inventaris-buku-bbst",
    category: "Sistem Informasi",
    year: "2026",
    status: "Published",
    featured: true,
    priority: 4,
    summary:
      "Sistem inventaris buku berbasis web dengan akses login untuk pengelolaan data inventaris buku secara terstruktur.",
    description:
      "Sistem inventaris buku berbasis web dengan akses login untuk mendukung pengelolaan data inventaris buku secara lebih terstruktur di Balai Bahasa Provinsi Sulawesi Tenggara.",
    role: "Full-stack Developer (analisis, implementasi, testing)",
    techStack: ["Laravel", "MySQL", "Tailwind CSS", "Blade", "JavaScript"],
    features: [
      "Sistem login untuk akses terbatas",
      "Pengelolaan data buku terstruktur",
      "Digitalisasi pencatatan inventaris",
      "Relevan untuk perpustakaan instansi",
      "Audit trail aktivitas pengguna",
    ],
    thumbnail: "/images/projects/inventaris-buku.webp",
    demoUrl: "https://slide.kemendikdasmen.go.id/inventaris-buku-bbst/",
    tags: ["inventory", "library", "government", "full-stack"],
    result:
      "Sistem aktif digunakan untuk pengelolaan inventaris buku di Balai Bahasa Provinsi Sulawesi Tenggara.",
  },
];
