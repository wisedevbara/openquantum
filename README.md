<p align="center">
  <a href="https://openquantum.id">
    <img src="public/favicon.svg" alt="OpenQuantum Logo" width="120" height="120">
  </a>
</p>

<h1 align="center">⚛️ OpenQuantum.id</h1>

<p align="center">
  <strong>Membangun Masa Depan Komputasi Kuantum Indonesia</strong><br>
  <em>Platform enkripsi tahan kuantum dan simulasi superposisi — buatan Indonesia, untuk dunia.</em>
</p>

<p align="center">
  <a href="https://openquantum.id">🌐 Website</a> •
  <a href="https://x.com/BaraMigSpace">𝕏 Twitter</a> •
  <a href="#getting-started">🚀 Getting Started</a> •
  <a href="#contributing">🤝 Contributing</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=flat-square&logo=tailwindcss" alt="Tailwind">
  <img src="https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker" alt="Docker">
  <img src="https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql" alt="PostgreSQL">
</p>

---

## 📖 Tentang

**OpenQuantum.id** adalah platform komputasi kuantum Indonesia yang membawa enkripsi tahan kuantum dan pemrosesan data superposisi ke dalam genggaman Anda. Kami membangun fondasi bagi masa depan aplikasi kuantum — dimulai dari Indonesia, untuk kontribusi global.

### ✨ Yang Kami Bangun

- 🔐 **Enkripsi Tahan Kuantum** — Algoritma kriptografi post-quantum yang aman dan andal
- ⚛️ **Simulasi Kuantum** — Visualisasi qubit dan operasi kuantum secara interaktif
- 🌐 **Web Interface** — Aksesibel dari browser, tanpa perlu instalasi rumit
- 🔒 **Security First** — CSP headers, rate limiting, dan sanitasi input menyeluruh
- 📱 **Responsive Design** — Tampilan optimal di desktop, tablet, dan mobile

## 🛠️ Tech Stack

| Komponen | Teknologi |
|----------|-----------|
| **Framework** | Next.js 15 (App Router) |
| **UI** | React 19, Tailwind CSS 4 |
| **Language** | TypeScript 5.8 |
| **Database** | PostgreSQL 16 + Prisma ORM |
| **Runtime** | Node.js 20 |
| **Container** | Docker + Docker Compose |
| **CI/CD** | GitHub Actions |
| **Security** | Middleware CSP, Rate Limiting |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+
- [Docker](https://www.docker.com/) (optional)
- [PostgreSQL](https://www.postgresql.org/) 16+

### Local Development

```bash
# 1. Clone repository
git clone https://github.com/wisedevbara/openquantum.git
cd openquantum

# 2. Install dependencies
npm install

# 3. Setup environment
cp .env.example .env
# Edit .env with your configuration

# 4. Setup database
npx prisma generate
npx prisma db push

# 5. Run development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Docker Deployment

```bash
# Start all services
docker compose up -d

# View logs
docker compose logs -f

# Stop all services
docker compose down
```

## 📁 Project Structure

```
openquantum/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page (Coming Soon)
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── CountdownTimer.tsx # Countdown timer
│   ├── EmailSignup.tsx    # Email subscription form
│   ├── Footer.tsx         # Footer component
│   ├── PillarCard.tsx     # Feature pillar card
│   ├── QuantumGrid.tsx    # Quantum grid animation
│   └── QuantumParticles.tsx # Particle system
├── prisma/                # Database schema
├── public/                # Static assets
├── docker-compose.yml     # Docker configuration
├── Dockerfile             # Multi-stage Docker build
└── middleware.ts           # Security middleware
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npx prisma studio` | Open Prisma Studio |
| `npx prisma db push` | Push schema to database |
| `npx prisma migrate deploy` | Run migrations |

## 🔒 Security

Keamanan adalah prioritas utama kami:

- **CSP Headers** — Content Security Policy yang ketat
- **Rate Limiting** — Proteksi terhadap brute force
- **Input Sanitization** — Validasi semua input pengguna
- **HTTPS Only** — Enkripsi semua komunikasi
- **Docker Isolation** — Container terisolasi

Lihat [SECURITY.md](SECURITY.md) untuk detail lebih lanjut.

## 🤝 Contributing

Kami menyambut kontribusi dari komunitas! Lihat [CONTRIBUTING.md](CONTRIBUTING.md) untuk panduan lengkap.

### Quick Start untuk Contributors

```bash
# Fork & clone
git clone https://github.com/YOUR_USERNAME/openquantum.git
cd openquantum

# Create feature branch
git checkout -b feature/fitur-baru

# Make changes & commit
git commit -m "feat: tambah fitur baru"

# Push & create PR
git push origin feature/fitur-baru
```

## 📋 Release Process

Lihat [RELEASE.md](RELEASE.md) untuk informasi versioning dan release process.

## 📄 License

Proyek ini menggunakan lisensi proprietary. Lihat [LICENSE](LICENSE) untuk detail.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) — React framework
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [Prisma](https://www.prisma.io/) — Database ORM
- [Docker](https://www.docker.com/) — Container platform

---

<p align="center">
  Made with ❤️ by <a href="https://x.com/BaraMigSpace">OpenQuantum Team</a>
</p>
