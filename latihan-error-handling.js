//Soal 1
function cekUmur(umur) {
  //kita coba eksekusi, jika ada error dia akan ke block catch
  try {
    //cek apakah umurnya angka
    if (isNaN(umur)) {
      throw new Error("Umur harus angka");
    }

    //cek apakah umurnya < 0
    if (umur < 0) {
      throw new Error("Umur tidak Valid");
    }

    console.log("Umur:", umur);
  } catch (error) {
    //tangkap errornya
    console.log(error.message);
  } finally {
    console.log("Selesai");
  }
}

cekUmur(-5);

//Soal 2
function parseData(parsingdong) {
  try {
    let hasil = JSON.parse(parsingdong);
    console.log(hasil);
  } catch (error) {
    console.log(error.message);
    console.log("JSON nggak valid");
  }
}

parseData('{nama": "Irwan"}');

//Soal 3
function transfer(saldoRekening, jumlahTransfer) {
  try {
    //validasi jika jumlah yang ditransfer lebih besar daripada saldo rekening
    if (saldoRekening < jumlahTransfer) {
      throw new Error("Saldo Anda tidak Mencukupi");
    } else {
      console.log("Transfer Berhasil");
    }
  } catch (error) {
    console.log(error.message);
  }
}

transfer(100000, 200000);

//Soal 4
function bagiAngka(a, b) {
  try {
    if (b === 0) {
      throw new Error("Tidak bisa dibagi dengan 0");
    }
    let hasil = a / b;
    console.log(`Hasil Pembagian: ${hasil}`);
  } catch (error) {
    console.log(error.message)
  }
}

bagiAngka(5, 5);

//Soal 5
const validasiUmur = (umur) => {
    try {
        if (umur < 18){
            throw new Error ("Umur belum mencukupi")
        }
        console.log("Akses diberikan")
    } catch (error) {
        console.log(error.message)
    }
}

validasiUmur(14);
