export type Scenario = {
  tag: string;
  title: string;
  description: string;
  flow: string[];
};

export const scenarios: Record<string, Scenario> = {
  government: {
    tag: '01 / PEMERINTAHAN',
    title: 'Pelayanan nagari yang lebih terhubung.',
    description: 'Contoh pendekatan dari ekosistem SINTA. Implementasi mengikuti kebutuhan masing-masing nagari.',
    flow: ['Data & staf', 'SINTA Core', 'ANM & SintaAI']
  },
  business: {
    tag: '02 / APLIKASI BISNIS',
    title: 'Sistem yang mengikuti cara kerja bisnis.',
    description: 'Mulai dari pemetaan proses sampai aplikasi operasional dan pelaporan.',
    flow: ['Pahami alur', 'Rancang sistem', 'Bangun & uji']
  },
  cloud: {
    tag: '03 / CLOUD & APPLIED AI',
    title: 'Infrastruktur yang siap dijalankan dan dirawat.',
    description: 'Rancangan deployment, pemantauan sistem, dan automasi sesuai hak akses.',
    flow: ['Arsitektur', 'Cloud & monitor', 'AI sesuai akses']
  }
};

export const companyFocus = [
  { id: 'focus', label: 'Fokus kami', number: '01 / FOKUS KAMI', title: 'Teknologi yang tepat untuk tugas yang nyata.', copy: 'Kami berupaya memahami kebutuhan pengguna dan alur operasional sebelum memutuskan bentuk aplikasi, fitur, atau infrastrukturnya.' },
  { id: 'method', label: 'Pendekatan kami', number: '02 / PENDEKATAN KAMI', title: 'Kebutuhan dulu. Teknologi mengikuti.', copy: 'Pekerjaan dimulai dari diskusi dan pemetaan proses. Desain, pengembangan, dan penerapan dilakukan berdasarkan ruang lingkup yang disepakati.' },
  { id: 'commitment', label: 'Komitmen kerja', number: '03 / KOMITMEN KERJA', title: 'Sistem perlu mudah digunakan dan dirawat.', copy: 'Selain membangun fitur, kami mempertimbangkan kelengkapan alur, kemudahan penggunaan, dokumentasi, dan operasional yang realistis untuk tim klien.' }
];

export const services = [
  ['01', 'Website & landing page', 'Website perusahaan, profil instansi, katalog digital, dan halaman kampanye dengan pengalaman mobile yang matang.'],
  ['02', 'Aplikasi web & dashboard', 'Sistem operasional, portal pelanggan, administrasi, pelaporan, dan pengelolaan data sesuai hak akses.'],
  ['03', 'Aplikasi mobile', 'Antarmuka mobile untuk layanan pelanggan, pengumpulan data lapangan, dan kerja internal organisasi.'],
  ['04', 'Cloud, server & deployment', 'Penyiapan lingkungan server, deployment aplikasi, backup, monitoring, dan pemeliharaan sesuai kebutuhan proyek.'],
  ['05', 'AI & otomasi', 'Asisten digital, bantuan pemrosesan informasi, serta otomasi proses yang mengikuti alur dan batas kewenangan.'],
  ['06', 'Sistem pemerintahan digital', 'Portal informasi, manajemen data, pelayanan administrasi, dan integrasi kanal layanan. SINTA adalah contoh produk kami.'],
  ['07', 'UI/UX & konsultasi IT', 'Analisis kebutuhan, perancangan antarmuka, prototipe, dan evaluasi sistem sebelum pengembangan dimulai.']
];

export const industries: Record<string, { tag: string; title: string; description: string; items: string[] }> = {
  government: { tag: 'PEMERINTAHAN / CONTOH KEBUTUHAN', title: 'Pelayanan publik yang terhubung dengan data.', description: 'Pengelolaan penduduk, administrasi surat, statistik, dan kanal pelayanan mandiri dapat dirancang sebagai satu ekosistem.', items: ['Portal informasi dan dashboard aparatur', 'Pengelolaan data serta administrasi surat', 'Integrasi kios ANM dan layanan WhatsApp'] },
  business: { tag: 'PERUSAHAAN / CONTOH KEBUTUHAN', title: 'Sistem internal yang mengikuti proses kerja.', description: 'Proses persetujuan, pengelolaan pengguna, pelaporan, dan integrasi data dapat dibangun sesuai struktur organisasi.', items: ['Aplikasi web operasional serta dashboard', 'Pencatatan dan pelaporan lintas bagian', 'Integrasi proses dan otorisasi sesuai peran'] },
  umkm: { tag: 'UMKM / CONTOH KEBUTUHAN', title: 'Bangun kehadiran digital usaha Anda.', description: 'Mulai dari website usaha sampai kebutuhan katalog atau pencatatan sederhana, diskusikan prioritas yang paling memberi manfaat.', items: ['Website profil usaha dan katalog produk', 'Formulir pemesanan atau permintaan penawaran', 'Sistem pendataan operasional sesuai kebutuhan'] },
  organization: { tag: 'ORGANISASI / CONTOH KEBUTUHAN', title: 'Administrasi lebih tertata, informasi mudah diakses.', description: 'Lembaga pendidikan, yayasan, dan komunitas bisa mendiskusikan kebutuhan publikasi, pengelolaan anggota, serta sistem internal.', items: ['Website organisasi dan informasi publik', 'Pendataan keanggotaan dan kegiatan', 'Sistem pendaftaran, laporan, atau portal internal'] }
};

export const productTabs = {
  dashboard: { tag: 'EKOSISTEM / DASHBOARD BERBASIS PERAN', title: 'Setiap peran punya ruang kerjanya.', description: 'Lima antarmuka sesuai peran: portal publik, staf, Wali Nagari, Kader, dan Jorong. Terhubung melalui SINTA Core.' },
  anm: { tag: 'EKOSISTEM / ANJUNGAN NAGARI MANDIRI', title: 'Layanan mandiri, langsung di nagari.', description: 'ANM adalah kios layar sentuh terintegrasi dengan SINTA. Mode manual dan mode hybrid AI dirancang untuk pola interaksi yang berbeda.' },
  ai: { tag: 'EKOSISTEM / SINTAAI VIA WHATSAPP', title: 'Membantu layanan melalui pesan.', description: 'SintaAI beroperasi lewat WhatsApp berbasis teks. Validasi dan kewenangan pelayanan tetap mengikuti alur petugas.' }
} as const;

export const processSteps = [
  ['01', 'Requirement & discovery', 'Memetakan alur kerja, pengguna, dan kebutuhan prioritas.'],
  ['02', 'UI/UX & prototype', 'Membuat rancangan yang dapat ditinjau sebelum dikembangkan.'],
  ['03', 'Development & pengujian', 'Mengembangkan modul dan memeriksa alur kerja penting.'],
  ['04', 'Deployment & pendampingan', 'Menyiapkan penerapan, dokumentasi, dan dukungan yang disepakati.']
];

export const faqs: [string, string][] = [
  ['Apakah FAZALABS hanya mengembangkan SINTA?', 'Tidak. SINTA merupakan salah satu produk FAZALABS. Kami juga menerima diskusi pengembangan website, aplikasi web, mobile, infrastruktur cloud, dan solusi AI sesuai kebutuhan.'],
  ['Bisakah membuat aplikasi dari nol sesuai kebutuhan?', 'Ya, kebutuhan proyek dapat dibahas dari proses bisnis, pengguna, alur persetujuan, data, dan integrasinya. Cakupan serta jadwal pengembangan ditentukan setelah analisis kebutuhan.'],
  ['Bagaimana cara mendapatkan estimasi biaya?', 'Jelaskan tujuan, kelompok pengguna, fitur prioritas, integrasi yang diperlukan, dan target pelaksanaan. Tim FAZALABS dapat menindaklanjutinya melalui konsultasi dan penawaran sesuai ruang lingkup.'],
  ['Apakah ada layanan server dan maintenance?', 'Cloud, server, deployment, serta pemeliharaan termasuk ruang lingkup yang dapat dibahas. Bentuk layanan, masa dukungan, tanggung jawab, dan biaya ditetapkan dalam kesepakatan proyek.'],
  ['Bagaimana jika belum punya spesifikasi teknis?', 'Anda bisa memulai dari masalah yang ingin diselesaikan. Gunakan fitur Smart Project Brief pada halaman ini, lalu kirim rangkumannya ke WhatsApp FAZALABS.']
];

export type TeamMember = {
  number: string;
  name: string;
  role: string;
  field: string;
  initials: string;
  photo?: string;
  photoZoom?: boolean;
  photoZoomFurther?: boolean;
};

export const teamMembers: TeamMember[] = [
  { number: '01', name: 'Cahya Latief Anwar', role: 'Founder', field: 'Software Engineering', initials: 'CLA', photo: '/team/cahya.png', photoZoom: true },
  { number: '02', name: 'Feby Hendra Muklis', role: 'Co-Founder', field: 'Hardware Engineering', initials: 'FHM', photo: '/team/feby-transparent.png' },
  { number: '03', name: 'ZUL ADRI MAGFIRAH.M', role: 'Finance', field: 'Finance Engineering', initials: 'ZAM', photo: '/team/zul.png' },
  { number: '04', name: 'Addi Mulia', role: 'Social', field: 'Social Engineering', initials: 'AM', photo: '/team/aad-transparent.png', photoZoom: true, photoZoomFurther: true },
  { number: '05', name: 'Farid', role: 'Desainer', field: 'Design', initials: 'F', photo: '/team/farid-transparent.png' },
  { number: '06', name: 'Aan', role: 'Trainer', field: 'Training & Enablement', initials: 'A', photo: '/team/aan-transparent.png' }
];

export const westSumatraAreas = {
  region: 'Sumatera Barat',
  regencies: ['Kabupaten Agam', 'Kabupaten Dharmasraya', 'Kabupaten Kepulauan Mentawai', 'Kabupaten Lima Puluh Kota', 'Kabupaten Padang Pariaman', 'Kabupaten Pasaman', 'Kabupaten Pasaman Barat', 'Kabupaten Pesisir Selatan', 'Kabupaten Sijunjung', 'Kabupaten Solok', 'Kabupaten Solok Selatan', 'Kabupaten Tanah Datar'],
  cities: ['Kota Bukittinggi', 'Kota Padang', 'Kota Padang Panjang', 'Kota Pariaman', 'Kota Payakumbuh', 'Kota Sawahlunto', 'Kota Solok']
};
