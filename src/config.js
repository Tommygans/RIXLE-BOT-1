const fs = require("fs")
userbot = {
Prem: JSON.parse(fs.readFileSync('./db/premium.json')),
 owner:  [ "6281261324817", "6281916259786", "62857420881846","628812904283","6282328303332", "62822980698995", "436504463151666", "62823283033323" ],
  MONGO_URI: "mongodb+srv://zanDb:veth0581@cluster0.eyx0e.mongodb.net/<mydb>?retryWrites=true&w=majority",
   mess: {
   wait: "tunggu sedang di proses...",
   api: "Maaf terjadi kesalahan", 
   success: "Berhasil",
   SudahAktif: "Perintah Tersebut Sudah Diaktifkan Sebelumnya.",
   SudahNonaktif: "Perintah Tersebut Sudah Dinonaktifkan Sebelumnya.",
   KhususGrup: "Perintah ini hanya bisa digunakan di Grup",
   KhususPribadi: "Perintah ini hanya bisa digunakan di private message",
   GrupAdmin: "Perintah ini hanya bisa digunakan oleh Admin Grup",
   BotAdmin: "Bot Harus menjadi admin",
   KhususOwner: "Perintah ini hanya dapat digunakan oleh owner bot",
   KhususPremium: "Perintah ini khusus member premium"
   },
   error: {
   Iv: "Link yang kamu berikan tidak valid",
   tombol: "Silahkam Masukkan prameter on/off",
   forget: "Silahkan Masukkan Teks Anda."
   },
   simple: {
   expiredQr: "[!] Scan Kode QR Diatas, Expired dalam 30 detik",
   credentials: "credentials updated!",
   opendocs: "open docs is complete!", 
   readBaileys: "berhasil masuk ke dalam baileys",
   connecting: "Menghubungkan",
   refresh: "Berhasil Perbarui Jaringan\n"
   },
   prefix: ["/"],
   gexp: 50,
   limit: 100,
   eror: "Sepertinya Eror",
   waits: "Sedang di proses",
   butmag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHDLrd0_DwHnJfuZ_pRMOAbLi3-ot-NxyPA&usqp=CAU',
   packname: "RIXLE-BOT-OFFICIAL",
   author: '@_fearTeam',
    setting: {
    admin: "only admin",
    group: "only group",
    owner: "owner only pack",
    jadibot: "jadibot only",
    botadmin: "bot harus menjadi admin",
    nsfw: "FITUR BELUM DIAKTIFKAN!"
    }
}

module.exports = userbot
