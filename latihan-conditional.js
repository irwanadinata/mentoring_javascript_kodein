//Soal 1

function hitungTotalBelanja(totalBelanja, isMember){

    let diskon = 0;

    if (totalBelanja >= 500000) {
        diskon = 0.2;
    } else if (totalBelanja >= 300000) {
        diskon = 0.1;
    }

    //jika isMember true eksekusi code ini, kalau isMember false jangan eksekusi
    if (isMember) {
        diskon = diskon + 0.05;
    }

    let totalBayar = totalBelanja - (totalBelanja * diskon);
    console.log(`Total yang harus dibayar: ${totalBayar}`);
}

hitungTotalBelanja(700000, true);

//Soal 2
const login = (username, password) => {
    if (username !== "admin" ) {
        console.log ("username salah");
    } else if (password !== "12345") {
        console.log("Password salah");
    } else
        console.log("Login berhasil")
}

login("admin", "12345");

//Soal 3
const tahunKabisat = (tahun) => {

    if (tahun % 400 === 0 || tahun % 4 ===0 ) {
        console.log("Ini tahun kabisat")
    } else {
        console.log("Ini bukan tahun kabisat")
    }
}

tahunKabisat(2024);


