# Jurnal Project 2 — Todo-List App

**Nama Project:** belajar-immutable  
**Tanggal:** 26 Mei 2026  
**Stack:** React 19 + Vite 8  

---

## 1. Latar Belakang

Project ini dibuat sebagai bahan belajar konsep **immutability** di React melalui studi kasus sederhana: aplikasi **Todo-List**. Fokus utama adalah memahami bagaimana state tidak boleh dimutasi langsung, melainkan harus diganti dengan nilai baru menggunakan spread operator atau method seperti `filter`.

---

## 2. Tujuan

- Memahami konsep immutable state di React
- Menerapkan manipulasi array (tambah, hapus satu, hapus semua) tanpa mutasi
- Membangun UI sederhana dengan komponen fungsional dan hooks (`useState`)
- Melatih styling komponen dengan CSS murni

---

## 3. Fitur

| Fitur               | Keterangan                                  |
| ------------------- | ------------------------------------------- |
| Tambah Tugas        | Input teks + tombol "Tambah Tugas"          |
| Hapus Tugas         | Tombol "Hapus" per item daftar              |
| Hapus Semua Tugas   | Tombol "Hapus Semua" (muncul jika ada tugas)|
| Validasi Input      | Alert jika input kosong                     |

---

## 4. Alur Kerja Aplikasi

1. User mengetik nama tugas di input
2. Klik "Tambah Tugas" → state `tugas` di-update dengan array baru (spread operator)
3. Tugas muncul sebagai daftar `li`
4. Setiap item memiliki tombol "Hapus" → memanggil `filter` untuk membuat array baru tanpa item tersebut
5. Tombol "Hapus Semua" → mengosongkan state dengan array `[]`
6. Input divalidasi: alert muncul jika user mencoba menambah tugas kosong

---

## 5. Konsep Immutability yang Diterapkan

```js
// Menambah tugas — tidak pakai push(), tapi spread operator
setTugas([...tugas, ketikan.trim()])

// Menghapus satu tugas — tidak pakai splice(), tapi filter()
setTugas(tugas.filter((_, i) => i !== index))

// Menghapus semua — assign array baru
setTugas([])
```

Dengan pendekatan ini, state lama tidak pernah dimutasi — referensi baru selalu dibuat.

---

## 6. Struktur File

```
belajar-immutable/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── jurnal-project-2.md
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx           # Entry point, render App
    ├── index.css          # Global style + CSS variables + dark mode
    ├── App.jsx            # Komponen utama Todo-List
    └── App.css            # Styling komponen App
```

---

## 7. Penjelasan Kode

### App.jsx

- **`useState([])`** — menyimpan daftar tugas sebagai array of strings
- **`useState("")`** — menyimpan nilai input
- **`tambahTugas`** — validasi kosong → spread operator tambah tugas → reset input
- **`hapusTugas(index)`** — `filter` menyisakan item yang index-nya tidak cocok
- **`hapusSemuaTugas`** — set array kosong
- Render: container → heading → input + button → daftar `ul/li` → tombol hapus semua (conditional)

### App.css (style ulang)

Menggunakan **CSS variables** dari `index.css` agar konsisten dengan tema global (light/dark mode). Perubahan utama:

| Sebelum                           | Sesudah                                   |
| --------------------------------- | ----------------------------------------- |
| Warna hardcoded (hex)             | Memakai `var(--accent)`, `var(--border)` dll |
| Box-shadow kaku `8px 8px 8px grey`| `var(--shadow)` yang lebih halus          |
| Padding minimal                   | Padding lebih lega (28px–32px)            |
| Tombol tanpa efek interaksi       | Hover, focus ring, active scale           |
| Input tanpa feedback fokus        | Focus ring warna accent                   |
| List item polos                   | Background `code-bg`, border, hover effect|
| Border-radius kecil               | Border-radius lebih besar (8px–12px)      |

---

## 8. Tantangan & Solusi

| Tantangan                               | Solusi                                      |
| --------------------------------------- | ------------------------------------------- |
| Memahami kenapa state tidak boleh mutate | Latihan langsung dengan spread & filter     |
| Menghapus item tertentu dari array       | Gunakan `filter` dengan parameter index     |
| Styling konsisten dengan tema (darkmode) | Integrasikan CSS variables dari `index.css` |
| Validasi input agar tidak kosong         | `trim()` + alert                           |

---

## 9. Kesimpulan

Project Todo-List sederhana ini efektif sebagai pengantar konsep immutability di React. Dengan hanya menggunakan `useState` dan array methods non-mutating (`filter`, spread operator), kita dapat mengelola state secara aman dan dapat diprediksi. Penggunaan CSS variables juga membuat styling lebih terstruktur dan mudah dikembangkan ke depannya.

---

## 10. Saran Pengembangan

- Tambahkan fitur edit tugas
- Simpan data ke `localStorage` agar tidak hilang saat refresh
- Tambahkan kategori atau prioritas tugas
- Animasi transisi saat menambah/menghapus item (misal dengan Framer Motion)
- Unit test dengan Vitest / React Testing Library
