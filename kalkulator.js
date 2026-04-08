// Mengimpor modul bawaan Node.js untuk membaca input dari keyboard di terminal
const readline = require('readline');

// Membuat objek readline interface
// process.stdin  = sumber input (keyboard)
// process.stdout = tujuan output (layar terminal)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk menghitung hasil dari ekspresi matematika
// Parameter: ekspresi (string) — contoh: "10 + 5"
function hitung(ekspresi) {

  // Hapus spasi kosong di awal dan akhir string
  // Contoh: "  10 + 5  " menjadi "10 + 5"
  ekspresi = ekspresi.trim();

  // Pola regex untuk memvalidasi format ekspresi
  // ^(-?\d+\.?\d*)  = angka pertama, boleh negatif dan boleh desimal
  // \s*             = boleh ada spasi di antara angka dan operator
  // ([\+\-\*\/\%])  = operator: +, -, *, /, atau %
  // \s*             = boleh ada spasi setelah operator
  // (-?\d+\.?\d*)$  = angka kedua, sama seperti angka pertama
  const pola = /^(-?\d+\.?\d*)\s*([\+\-\*\/\%])\s*(-?\d+\.?\d*)$/;

  // Cocokkan ekspresi dengan pola regex
  // Hasilnya array jika cocok, null jika tidak cocok
  const cocok = ekspresi.match(pola);

  // Jika format ekspresi tidak valid, kembalikan pesan error
  if (!cocok) {
    return 'Format salah. Contoh: 10 + 5';
  }

  // Ambil angka pertama dari hasil regex, konversi ke tipe number
  const a = parseFloat(cocok[1]);

  // Ambil operator (+, -, *, /, %) dari hasil regex
  const op = cocok[2];

  // Ambil angka kedua dari hasil regex, konversi ke tipe number
  const b = parseFloat(cocok[3]);

  // Lakukan perhitungan sesuai operator yang dimasukkan
  switch (op) {
    case '+': return a + b;           // Penjumlahan
    case '-': return a - b;           // Pengurangan
    case '*': return a * b;           // Perkalian
    case '/':
      // Cek pembagian dengan nol agar tidak menghasilkan Infinity
      if (b === 0) return 'Error: tidak bisa dibagi dengan nol';
      return a / b;                   // Pembagian
    case '%': return a % b;           // Sisa bagi (modulo)
  }
}

// Fungsi untuk mencetak panduan penggunaan kalkulator ke layar
function tampilkanBantuan() {
  console.log('');
  console.log('Operator yang didukung:');
  console.log('  +   penjumlahan');
  console.log('  -   pengurangan');
  console.log('  *   perkalian');
  console.log('  /   pembagian');
  console.log('  %   sisa bagi (modulo)');
  console.log('');
  console.log('Contoh: 10 + 5   atau   20 * 3.5');
  console.log('Ketik "keluar" untuk berhenti.');
  console.log('');
}

// Fungsi utama yang menampilkan prompt dan menunggu input pengguna
// Fungsi ini dipanggil berulang (rekursif) agar kalkulator terus berjalan
function tanya() {

  // Tampilkan prompt ">>" lalu tunggu pengguna mengetik dan menekan Enter
  // Hasilnya dikirim ke parameter "input"
  rl.question('>> ', (input) => {

    // Hapus spasi di awal dan akhir input
    input = input.trim();

    // Jika pengguna mengetik "keluar", "exit", atau "q" — hentikan program
    if (input === 'keluar' || input === 'exit' || input === 'q') {
      console.log('Sampai jumpa!');
      rl.close(); // Tutup readline dan hentikan program
      return;
    }

    // Jika pengguna mengetik "bantuan" atau "help" — tampilkan panduan
    if (input === 'bantuan' || input === 'help') {
      tampilkanBantuan();
      tanya(); // Panggil tanya() lagi untuk menunggu input berikutnya
      return;
    }

    // Jika pengguna menekan Enter tanpa mengetik apapun — abaikan dan ulangi
    if (input === '') {
      tanya();
      return;
    }

    // Hitung hasil dari ekspresi yang dimasukkan pengguna
    const hasil = hitung(input);

    // Cetak hasil ke layar
    console.log('   = ' + hasil);
    console.log('');

    // Panggil tanya() lagi agar kalkulator siap menerima input berikutnya
    tanya();
  });
}

// ── Titik awal program ──────────────────────────────────────────

// Cetak judul kalkulator saat program pertama kali dijalankan
console.log('=============================');
console.log('   Kalkulator Terminal JS    ');
console.log('=============================');

// Tampilkan panduan penggunaan
tampilkanBantuan();

// Mulai sesi tanya jawab — program akan terus berjalan sampai pengguna keluar
tanya();