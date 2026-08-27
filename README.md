# 🚀 Giovanni Alfadiansyah — Enterprise Portfolio Website

Website portofolio profesional berstandar enterprise untuk **Giovanni Alfadiansyah** (Software Engineer | Full Stack Developer | Technical Consultant).

Didesain dengan aesthetic **Cyber-Enterprise Precision & Tactical High-Tech** yang menonjolkan kredibilitas cybersecurity (BSSN), enterprise banking (Bank Mega CCBM), dan ERP MES (Singapore Technologies).

---

## 🌟 Fitur Utama Website

1. **Interactive Architecture Visualizer**: Blueprint interaktif sistem enterprise:
   - *BSSN Cybersecurity LMS*: SSO ConnectIDN (FAL2) JWS/JWE Verification, TOTP MFA (RFC 6238), PostgreSQL + AWS S3.
   - *Bank Mega (CCBM Division)*: Migrasi sistem legacy PHP ke Java Spring Boot microservices dengan response time sub-second dan SLA 99.9%.
   - *Singapore Technologies (ST MES)*: Automasi shop-floor, barcode scanning, dan sinkronisasi real-time inventory ledger di Odoo ERP.
2. **Interactive CLI Terminal & Production Code Inspector**:
   - Terminal interaktif dengan perintah: `whoami`, `skills`, `experience`, `projects`, `contact`, `download-cv`, `clear`.
   - Syntax inspector untuk Java Spring Security FAL2 Filter, Python Odoo MES Server Action, dan NestJS RBAC Guard lengkap dengan tombol copy-to-clipboard.
3. **Career Roadmap & Timeline**:
   - Riwayat pengalaman kerja di Badan Siber dan Sandi Negara (BSSN), PT Wixander Beneficia Technology, PT Xsis Mitra Utama (Bank Mega), Diceritain, dan PLABS.ID.
4. **Skills Competencies Matrix**:
   - Matriks keahlian filterable dan search bar dinamis mencakup Backend, Cybersecurity/Auth, ERP/MES, Database/Storage, DevOps, dan Frontend.
5. **Project Case Studies & Modals**:
   - Modal pop-up dengan ringkasan eksekutif, tantangan, solusi arsitektur, dan metrik dampak.
6. **Multi-Format CV Download Hub & In-Browser Preview**:
   - Akses langsung untuk mengunduh 1-Page Resume, 2-Page CV, dan Complete Master CV dalam format PDF maupun DOCX, dilengkapi in-browser preview dan animasi selebrasi.
7. **Direct Connect & Contact Hub**:
   - Integrasi langsung ke WhatsApp (+62 813-9554-0904), LinkedIn, email copy-to-clipboard, dan formulir kontak interaktif.
8. **Dark / Light Theme**:
   - Dukungan tema Dark dan Light dengan transisi halus dan persistensi `localStorage`.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Bundler & Dev Server**: Vite
- **Styling**: Tailwind CSS (Custom Cyber Theme & Glassmorphism)
- **Icons**: Lucide React
- **Animations & Effects**: Canvas Confetti, Keyframe Glow & Pulse, Custom Glass Panels

---

## 🚀 Menjalankan Website Secara Lokal

1. Masuk ke direktori `portfolio`:
   ```bash
   cd portfolio
   ```

2. Jalankan development server:
   ```bash
   npm run dev
   ```

3. Buka browser di [http://localhost:3000](http://localhost:3000)

---

## 📦 Build untuk Production / Hosting

Untuk membuat bundle statis siap upload ke GitHub Pages, Vercel, Netlify, atau Nginx:

```bash
npm run build
```

Hasil build akan berada di folder `portfolio/dist/`.
