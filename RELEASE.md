# 📋 Release Process

Panduan ini menjelaskan proses release untuk OpenQuantum.

## 🏷️ Versioning

Kami menggunakan [Semantic Versioning](https://semver.org/) (SemVer):

```
MAJOR.MINOR.PATCH

Contoh: 1.2.3
```

| Keterangan | Kode | Contoh |
|------------|------|--------|
| **Major** | Breaking changes | `1.x.x` → `2.0.0` |
| **Minor** | Fitur baru (backward compatible) | `1.1.x` → `1.2.0` |
| **Patch** | Bug fixes | `1.2.1` → `1.2.2` |

## 📅 Release Schedule

| Tipe | Frekuensi | Keterangan |
|------|-----------|------------|
| **Patch** | Saat dibutuhkan | Bug fixes kritis |
| **Minor** | Bulanan | Fitur baru |
| **Major** | Quarterly | Breaking changes |

## 🚀 Release Steps

### 1. Preparation

```bash
# Pastikan semua test pass
npm test

# Pastikan lint clean
npm run lint

# Update dependencies (jika perlu)
npm update
```

### 2. Update Version

```bash
# Untuk patch release
npm version patch

# Untuk minor release
npm version minor

# Untuk major release
npm version major
```

### 3. Create Release Branch

```bash
# Buat release branch
git checkout -b release/v1.2.0

# Push ke remote
git push origin release/v1.2.0
```

### 4. Create Pull Request

1. Buka PR dari `release/v1.2.0` ke `main`
2. Isi template PR dengan changelog
3. Tunggu approval dari maintainer
4. Merge ke `main`

### 5. Create GitHub Release

```bash
# Tag release
git tag -a v1.2.0 -m "Release v1.2.0"
git push origin v1.2.0
```

Di GitHub:
1. Buka **Releases** → **Create new release**
2. Pilih tag `v1.2.0`
3. Isi **Release notes** dengan changelog
4. Publish release

### 6. Deploy

```bash
# Deploy ke production
git checkout main
git pull origin main
docker compose up -d --build
```

## 📝 Release Notes Format

```markdown
## [v1.2.0] - 2026-07-10

### ✨ New Features
- Tambah simulator qubit (#42)
- Implementasi quantum entanglement (#45)

### 🐛 Bug Fixes
- Perbaikan countdown timer (#38)
- Fix responsive layout di mobile (#40)

### 🔒 Security
- Update dependencies untuk security patch

### 📚 Documentation
- Update README dengan contoh penggunaan
- Tambah CONTRIBUTING.md

### ⚠️ Breaking Changes
- API endpoint `/api/v1` deprecated, gunakan `/api/v2`
```

## 🔄 Hotfix Process

Untuk bug kritis di production:

```bash
# Buat hotfix branch dari main
git checkout -b hotfix/fix-kritis main

# Fix bug
# ...

# Commit
git commit -m "fix: deskripsi fix"

# Merge ke main
git checkout main
git merge hotfix/fix-kritis

# Tag hotfix release
git tag -a v1.2.1 -m "Hotfix v1.2.1"
git push origin main --tags
```

## 📊 Release Checklist

- [ ] Semua test pass
- [ ] Lint clean
- [ ] Version sudah diupdate
- [ ] Changelog sudah ditulis
- [ ] Release notes sudah dipublish
- [ ] Docker image sudah di-build
- [ ] Production sudah di-deploy
- [ ] Monitoring aktif

---

Untuk pertanyaan, buka issue atau hubungi maintainer.
