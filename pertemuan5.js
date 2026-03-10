//Spread dan Rest Operator
// 1. Spread Operator
//Object
//contoh spread operator
const obj1 = {
    name: "samsul",
    age: 17
}

const obj2 = {...obj1};
console.log(obj2);

//Penggabungan object
const mentor = {
    name:"Irwan",
    age: 17
};

const mapel = {
    mapel: "IT",
    club: "programming"
};

const gabungan = {...mentor, ...mapel};
console.log(gabungan);

//Array
const buah = ["apel", "jeruk", "pepaya"];
const buahBaru = [...buah];

console.log(buahBaru);

//Penggabungan array
const tim1 = ["Farros", "Rafie", "Salim"];
const tim2 = ["Nahdan", "Rava", "Qeis"];
const timGabungan = [...tim1, ...tim2];

console.log(timGabungan);
console.log(timGabungan[5]);


// 2. Rest Operator
//Gunanya buat gabungin banyak nilai
const belajarRest = (siswa, ...nama) => {
    console.log(siswa)
    console.log(nama)
};

belajarRest("Daftar Siswa", "Farros", "Rafie", "Salim");
