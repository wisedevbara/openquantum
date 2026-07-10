# 🤝 Contributing to OpenQuantum

Terima kasih atas minat Anda untuk berkontribusi! Panduan ini akan membantu Anda memulai.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)

## 📜 Code of Conduct

### Standar Kami

- **Hormat** — Hargai setiap kontributor
- **Inklusif** — Terima beragam perspektif
- **Konstruktif** — Berikan feedback yang membangun
- **Profesional** — Jaga komunikasi tetap sopan

## 🚀 Getting Started

### 1. Fork Repository

```bash
# Klik tombol Fork di GitHub, lalu clone
git clone https://github.com/YOUR_USERNAME/openquantum.git
cd openquantum
```

### 2. Setup Development Environment

```bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env

# Setup database
npx prisma generate
npx prisma db push

# Jalankan development server
npm run dev
```

### 3. Buat Feature Branch

```bash
# Selalu mulai dari branch main
git checkout main
git pull origin main

# Buat branch baru
git checkout -b feature/nama-fitur
```

## 🔄 Development Workflow

### Branch Naming

| Prefix | Keterangan | Contoh |
|--------|------------|--------|
| `feature/` | Fitur baru | `feature/quantum-simulator` |
| `fix/` | Perbaikan bug | `fix/countdown-timer` |
| `docs/` | Dokumentasi | `docs/update-readme` |
| `refactor/` | Refactoring | `refactor/component-structure` |
| `test/` | Penambahan test | `test/add-unit-tests` |
| `chore/` | Maintenance | `chore/update-dependencies` |

### Development Steps

1. **Pahami Issue** — Baca issue dengan detail
2. **Diskusi** — Komentar di issue jika ada pertanyaan
3. **Develop** — Buat kode dengan TDD jika memungkinkan
4. **Test** — Pastikan semua test pass
5. **Document** — Update dokumentasi jika perlu
6. **Submit** — Buat Pull Request

## 📬 Pull Request Process

### Checklist Sebelum Submit

- [ ] Code mengikuti style guidelines
- [ ] Semua test pass (`npm test`)
- [ ] Tidak ada console.log yang tertinggal
- [ ] Tidak ada credentials atau secrets
- [ ] Dokumentasi sudah diupdate
- [ ] Commit messages jelas dan konsisten

### Template PR

```markdown
## Deskripsi
[Jelaskan perubahan yang dilakukan]

## Jenis Perubahan
- [ ] Bug fix
- [ ] Fitur baru
- [ ] Breaking change
- [ ] Dokumentasi

## Testing
[Jelaskan cara test]

## Screenshot (jika ada)
[Attach screenshot]
```

### Review Process

1. **Automated Checks** — CI/CD akan otomatis jalan
2. **Code Review** — Minimal 1 approval dari maintainer
3. **Merge** — Setelah approval, maintainer akan merge

## 🎨 Style Guidelines

### TypeScript/JavaScript

```typescript
// ✅ Good
interface UserProfile {
  id: string;
  name: string;
  email: string;
}

async function getUser(id: string): Promise<UserProfile> {
  const user = await db.user.findUnique({ where: { id } });
  if (!user) throw new Error('User not found');
  return user;
}

// ❌ Bad
async function getUser(id) {
  const user = await db.user.findUnique({ where: { id } });
  return user;
}
```

### CSS/Tailwind

```tsx
// ✅ Good — Gunakan Tailwind classes
<div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">

// ❌ Bad — Inline styles
<div style={{ display: 'flex', padding: '24px' }}>
```

### Component Structure

```tsx
// ✅ Good — Functional component dengan TypeScript
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ variant = 'primary', children, onClick }: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

## 💬 Commit Messages

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

| Type | Keterangan |
|------|------------|
| `feat` | Fitur baru |
| `fix` | Perbaikan bug |
| `docs` | Dokumentasi |
| `style` | Formatting (tidak mempengaruhi logic) |
| `refactor` | Refactoring |
| `test` | Penambahan/perbaikan test |
| `chore` | Maintenance tasks |
| `perf` | Performa improvement |

### Contoh

```
feat(quantum): tambah simulator qubit

- Implementasi simulasi single qubit
- Tambah visualisasi Bloch sphere
- Support untuk Hadamard gate

Closes #42
```

## ❓ Questions?

Jika ada pertanyaan, buka issue dengan label `question` atau hubungi maintainer.

---

Terima kasih atas kontribusi Anda! 🎉
