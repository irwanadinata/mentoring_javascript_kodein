// Function (Fungsi)
// Kode blok yang bisa kita pakai secara berulang-ulang

//Basic Function
//Function Biasa
function HelloWorld() {
    console.log("Halooo Dunia");
    console.log("Selamat Pagi");
    console.log("Saya sedang belajar function");
};

//Arrow Function
const HelloWord2 = () => {
    console.log("Halo Dunia 2")
}

HelloWorld();
HelloWord2();

//Function Parameter
//Function Biasa
function HelloWorld2(nama) {
    console.log("Selamat Pagi", nama);
};

HelloWorld2("Farros");

function Matematika(x, y){
    console.log(3*x + y);
};

Matematika(5,7);
Matematika(2,22);

//Arrow Function
const Matematika2 = (x, y) => {
    console.log(x+y);
}

Matematika2(2, 5);

//Return Function
//Function yang menghasilkan sebuah nilai dan nilai tersebut bisa kita pakai di luar function
//Function Biasa
function Tambah(a, b) {
    return a+b;
}

let hasil = Tambah(2,2); //isi variabel 4
console.log(hasil);

function Sapa(nama){
    // const hasil = "Selamat Pagi " + nama;
    const hasil = `Selamat Pagi ${nama}`;
    return hasil;
}

let tangkap = Sapa("Irwan");
console.log(tangkap);

//Arrow Function
const Sapa2 = (nama) => {
    const hasil = `Selamat pagi 2 ${nama}`;
    return hasil;
};

let tangkap2 = Sapa2("Jack");







