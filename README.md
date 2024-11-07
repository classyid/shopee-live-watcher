# 📺 Shopee Live Watcher
> Monitoring livestream Shopee jadi super mudah!

## ⭐ Apa itu Shopee Live Watcher?
Tools gratis untuk monitoring livestream Shopee secara otomatis. Dibuat menggunakan Google Apps Script, kirim notifikasi ke WhatsApp & Telegram, plus simpan data lengkap di spreadsheet. Cocok untuk seller, tim marketing, atau siapa saja yang butuh pantau livestream Shopee!

## 🎯 Fitur Unggulan
- 🔄 Auto update setiap 10 menit
- 📱 Notifikasi instan ke WA & Telegram
- 📊 Data tersimpan di spreadsheet
- 🎯 Support multiple livestream
- ⚡ Setup super cepat (5 menit!)
- 💸 100% GRATIS selamanya

## 🚀 Cara Pakai

### Yang Harus Disiapkan
1. Akun Google
2. Bot Telegram (dari @BotFather)
3. API WhatsApp (dari Mpedia)
4. Link Shopee Live

### Langkah-langkah Setup
1. **Buat Project Baru**
   - Buka [Google Apps Script](https://script.google.com)
   - Klik "New Project"

2. **Copy-Paste Kode**
   - Copy semua file dari repo ini
   - Paste ke project baru Anda

3. **Setting Konfigurasi**
   ```javascript
   return {
     shopee: {
       shortLinks: ["link-shopee-anda"],
       fetchIntervalMinutes: 10
     },
     // ... config lainnya
   }
   ```

4. **Jalankan Bot**
   - Run fungsi setupTrigger()
   - Done! Bot akan mulai bekerja

## 📊 Format Notifikasi
```
📺 UPDATE LIVESTREAM SHOPEE
🟢 SEDANG BERLANGSUNG

👤 Username: TokoKeren
📢 Judul: Flash Sale Elektronik!

📊 STATISTIK LIVE:
- 👥 1.234 Penonton
- ❤️ 5.678 Like
- 📦 50 Produk
- ⏱️ 30 menit
```

## 🤝 Kontribusi
Mau berkontribusi? Silakan!
1. Fork repo ini
2. Buat branch baru
3. Commit perubahan
4. Push & buat pull request

## 📞 Bantuan
- Email: kontak@classy.id
- Issue GitHub
