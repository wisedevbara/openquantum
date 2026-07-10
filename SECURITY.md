# 🔒 Security Policy

Keamanan adalah prioritas utama OpenQuantum. Dokumen ini menjelaskan kebijakan keamanan kami.

## 🛡️ Supported Versions

| Versi | Status |
|-------|--------|
| 1.2.x | ✅ Supported |
| 1.1.x | ⚠️ Security updates only |
| < 1.1 | ❌ End of life |

## 🐛 Reporting Vulnerabilities

**JANGAN** buka issue publik untuk vulnerability!

### Cara Melaporkan

1. **Email** — Kirim ke security@openquantum.id
2. **GitHub** — Gunakan [Security Advisories](https://github.com/wisedevbara/openquantum/security/advisories/new)

### Yang Perlu Dilampirkan

- Deskripsi vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (jika ada)

### Response Timeline

| Stage | Timeline |
|-------|----------|
| Acknowledgment | < 24 hours |
| Initial assessment | < 72 hours |
| Fix development | < 7 days |
| Public disclosure | Setelah fix deployed |

## 🔐 Security Measures

### Application Level

- **CSP Headers** — Content Security Policy yang ketat
- **Rate Limiting** — Proteksi brute force
- **Input Validation** — Sanitasi semua input
- **SQL Injection Prevention** — Parameterized queries via Prisma
- **XSS Protection** — Output encoding

### Infrastructure Level

- **HTTPS Only** — TLS 1.3 enkripsi
- **Docker Isolation** — Container terisolasi
- **Network Binding** — Services hanya bind ke localhost
- **Database Auth** — PostgreSQL password authentication
- **Secret Management** — Environment variables, bukan hardcoded

### Development Level

- **Pre-commit Hooks** — Gitleaks untuk deteksi secrets
- **Dependency Scanning** — Automated vulnerability checks
- **Code Review** — Required approval sebelum merge
- **CI/CD Security** — Automated security scans

## 🚨 Incident Response

### Jika Terjadi Breach

1. **Isolate** — Putuskan akses ke sistem yang terdampak
2. **Assess** — Evaluasi dampak dan data yang terpengaruh
3. **Contain** — Batasi spread ke sistem lain
4. **Recover** — Restore dari backup yang bersih
5. **Notify** — Beritahu pengguna yang terdampak
6. **Review** — Post-mortem dan perbaikan

### Contact

- **Emergency**: security@openquantum.id
- **General**: support@openquantum.id

## 📋 Security Checklist

### Before Each Release

- [ ] Run security scanner
- [ ] Update dependencies
- [ ] Review CSP headers
- [ ] Test authentication
- [ ] Verify rate limiting
- [ ] Check database permissions

### Monthly

- [ ] Audit access logs
- [ ] Review user permissions
- [ ] Update security documentation
- [ ] Test backup restoration
- [ ] Review incident response plan

## 🔄 Security Updates

Kami berkomitmen untuk:

- **Fast Response** — Patch kritis dalam 24 jam
- **Transparent** — Communikasi terbuka tentang vulnerability
- **Proaktif** — Regular security audits
- **Collaborative** — Bekerja dengan security researchers

## 📚 Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy)
- [Docker Security](https://docs.docker.com/engine/security/)

---

Terima kasih telah membantu menjaga keamanan OpenQuantum! 🛡️
