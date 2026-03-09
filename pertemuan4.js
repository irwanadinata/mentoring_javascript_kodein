//Data Collection (Object dan Array)
//Object

//Variable
// const name = "samsul";

// Object
const dataSamsul = {
  name: "Samsul",
  age: 18,
  address: "Jalan Mawar",
};

//Cara mengakses data object menggunakan dot(.)
console.log(dataSamsul.name);
console.log(dataSamsul.age);
console.log(dataSamsul.address);

//Cara mengakses data object menggunakan object destructuring
const { name, age, address } = dataSamsul;
console.log(age);
console.log(name);
console.log(address);

// Array
const fruits = ["Apel", "Jeruk", "Strawberry"];
const spekLaptop = ["Asus", 8, 256];

//Index Array selalu dimulai dari 0
//Cara mengakses data di array
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//Lanjutan
//Array of Object
const dataSiswa = [
  {
    name: "Farros",
    age: 18,
    username: "farossss",
  },
  {
    name: "Rayhan",
    age: 18,
    username: "rayhannnn",
  },
  {
    name: "Nahdan",
    age: 18,
    username: "nahdannnnn",
  },
];

//Cara mengakses array of object
console.log(dataSiswa[0])
console.log(dataSiswa[0].name)
console.log(dataSiswa[0].age)
console.log(dataSiswa[2].username)

//Array of array
const data1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//Cara mengakses data array of array
console.log(data1[0][0]);
console.log(data1[2][1]);


