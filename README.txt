========================================================================
JELAJAH KENEP — DIGITAL THEMATIC TRAVEL GUIDE
Desa Wisata Kreatif Kenep — KKN Tim II IDBU 64 UNDIP 2026
========================================================================

SELAMAT DATANG DI OPERATIONAL GUIDE WEBSITE JELAJAH KENEP

1. STRUKTUR FOLDER & LOKASI FOTO MANUAL:
   Masukkan file foto Anda ke dalam folder images/ sesuai dengan daftar berikut:
   
   - Hero Section:
     images/hero/kenep-hero.jpg           (Foto suasana utama Desa Kenep)

   - General & Denah:
     images/general/kenep-village.jpg     (Foto umum suasana desa)
     images/general/batik.jpg             (Foto aktivitas membatik)
     images/general/jenang.jpg            (Foto aktivitas pembuat jenang)
     images/general/masjid.jpg            (Foto Masjid Darussalam)
     images/general/denah-kenep.jpg       (Gambar Denah / Peta dari Canva)

   - Rute Jejak Sejarah:
     images/history/masjid-darussalam.jpg (Foto Masjid Darussalam Kedunggudel)
     images/history/makam-kyai-lombok.jpg (Foto Makam Kyai Lombok)

   - Rute Karya & Rasa:
     images/craft-culinary/batik-ayu-kusuma.jpg (Foto Sentra Batik Ayu Kusuma)
     images/craft-culinary/jenang-lestari.jpg    (Foto Jenang & Roti Lestari)
     images/craft-culinary/karak-rambak.jpg      (Foto Karak & Rambak Bu Ngatiyem)

2. CARA MENGEDIT DATA DESTINASI & GOOGLE MAPS:
   - Buka file `script.js` di VS Code / Text Editor.
   - Cari bagian bertuliskan:
     // ===== EDIT MANUAL DATA DESTINASI DI SINI =====
   - Ganti properti `mapsUrl` dengan link Google Maps lokasi asli.
   - Ganti properti `hours`, `contact`, `description` jika ada update terbaru hasil observasi.

3. PENGGUNAAN UTK QR CODE DESTINASI:
   Link utama website (Misal: https://username.github.io/jelajah-kenep/)
   Bisa langsung ditambahkan #id_destinasi agar saat di-scan QR Code di lokasi fisik,
   pengunjung langsung otomatis di-scroll ke destinasi tersebut!

   Contoh URL QR Code Spesifik:
   - Batik Ayu Kusuma:  https://username.github.io/jelajah-kenep/#batik-ayu-kusuma
   - Jenang Lestari:    https://username.github.io/jelajah-kenep/#jenang-lestari
   - Karak Bu Ngatiyem: https://username.github.io/jelajah-kenep/#karak-rambak
   - Masjid Darussalam: https://username.github.io/jelajah-kenep/#masjid-darussalam
   - Makam Kyai Lombok: https://username.github.io/jelajah-kenep/#makam-kyai-lombok

4. CARA UJI COBA LOKAL:
   - Cukup klik 2x file `index.html` untuk membuka langsung di Google Chrome / Browser HP.
   - Atau gunakan extension Live Server di VS Code.

5. CARA DEPLOY KE GITHUB PAGES (GRATIS):
   a. Buat Repository baru di GitHub (misal: `jelajah-kenep`).
   b. Upload semua file (index.html, style.css, script.js, folder images/ & README.txt).
   c. Masuk ke tab Settings -> Pages.
   d. Pada bagian Build and deployment -> Branch: Pilih `main` / `/root` -> Save.
   e. Tunggu 1-2 menit, website Anda aktif di https://username.github.io/jelajah-kenep/

========================================================================
