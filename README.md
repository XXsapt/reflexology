# Ayna Healthy Reflexology & Spa — Website

Website profesional untuk **Ayna Healthy Reflexology & Spa** dibuat dengan **Next.js** dan siap di-deploy ke **Vercel**.

---

## 🚀 Cara Menjalankan Lokal

### 1. Install Node.js
Download dan install dari: https://nodejs.org (versi LTS)

### 2. Install Dependencies
```bash
npm install
```

### 3. Jalankan Development Server
```bash
npm run dev
```
Buka browser ke: **http://localhost:3000**

---

## ☁️ Deploy ke Vercel

### Cara 1 — Via GitHub (Direkomendasikan)
1. Upload folder ini ke **GitHub** (buat repo baru)
2. Buka **https://vercel.com** → Login dengan akun GitHub
3. Klik **"Add New Project"** → Import repo Anda
4. Vercel otomatis mendeteksi Next.js → Klik **Deploy**
5. Website live dalam ~2 menit! ✅

### Cara 2 — Via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 🖼️ Logo
Pastikan file **logo.png** (logo Ayna Spa) ada di folder `public/`.
Salin file logo Anda ke: `public/logo.png`

---

## 🎨 Fitur Website
- ✅ Hero section dengan animasi floating logo
- ✅ Price list semua layanan
- ✅ Manfaat treatment
- ✅ Tombol WhatsApp booking langsung
- ✅ Watermark "DEMO" (hapus di `pages/index.js` setelah final)
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ SEO-optimized
- ✅ Siap deploy ke Vercel

---

## 🗑️ Menghapus Watermark DEMO
Di file `pages/index.js`, hapus bagian ini:
```jsx
{/* WATERMARK DEMO */}
<div className="watermark" aria-hidden="true">
  <span className="watermark-text">DEMO</span>
</div>
```
Dan hapus juga class `.watermark` dan `.watermark-text` di `styles/globals.css`.

---

## 📞 Kontak
WhatsApp: **0812-3018-1886**
