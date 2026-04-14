//SYNCRONUS
//eksekusi code dari atas ke bawah, 
// jika ada code yang belum selesai 
// dia nggak akan eksekusi code yang ada di bawah

console.log("1");
console.log("2");
console.log("3");

//ASYNCRONUS
//kita bisa skip code yang kita butuhin nanti,
//jadi dia bisa jalan tanpa nunggu code lainnya selesai

console.log("1");
setTimeout(()=>{
    console.log("2")
},10000);
console.log("3");
console.log("Tunggu 10 detik");

//------------------------------------------------------------------//
//JENIS-JENIS ASYNCRONUS
//CALLBACK
//Basic Callback
function ambilData(callback, errorCallback) {
  setTimeout(() => {
    const sukses = true;

    if (sukses) {
      callback("Data berhasil");
    } else {
      errorCallback("Gagal");
    }
  }, 2000);
}

function suksesHandler(data) {
  console.log("Sukses:", data);
}

function errorHandler(error) {
  console.log("Error:", error);
}

ambilData(suksesHandler, errorHandler);


//Real Case Callback (GET API)
console.log("1. Mulai");

function getUser(callback, errorCallback) {
  console.log("2. Mulai fetch ke API");

  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json()) // nunggu response + convert JSON
    .then((data) => {
      console.log("4. Data sudah siap dari API");
      callback(data); // panggil callback
    })
    .catch((error) => {
      errorCallback(error); // kalau error
    });
}

function tampilkanUser(data) {
  console.log("5. Nama user:", data.name); // jalan terakhir
}

function handleError(error) {
  console.log("Error:", error);
}

getUser(tampilkanUser, handleError);
console.log("3. Selesai");


//PROMISE
//Basic Promise
console.log("1. Mulai");

function ambilData() {
  return new Promise((resolve, reject) => {
    console.log("2. Proses ambil data...");

    setTimeout(() => {
      const sukses = true;

      if (sukses) {
        resolve("Data berhasil diambil"); // kirim ke .then()
      } else {
        reject("Gagal ambil data"); // kirim ke .catch()
      }
    }, 2000);
  });
}

ambilData()
  .then((hasil) => {
    console.log("4. Then:", hasil); // nunggu resolve
  })
  .catch((error) => {
    console.log("Error:", error);
  });

console.log("3. Selesai");

//Real Case Promise (GET API)
console.log("1. Mulai");

function getUser() {
  console.log("2. Mulai fetch");

  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json()); // convert ke JSON
}

getUser()
  .then((data) => {
    console.log("4. Then:", data.name); // nunggu hasil API
  })
  .catch((error) => {
    console.log("Error:", error);
  });

console.log("3. Selesai");

//ASYNC AWAIT (Cara Penulisan Promise Modern)
//Basic Async Await
console.log("1. Mulai");

function ambilData() {
  return new Promise((resolve) => {
    console.log("2. Proses ambil data...");

    setTimeout(() => {
      resolve("Data berhasil diambil");
    }, 2000);
  });
}

async function main() {
  const hasil = await ambilData(); // nunggu di sini

  console.log("4. Hasil:", hasil); // jalan setelah selesai
}

main();

console.log("3. Selesai");

//Real Case Async Await
console.log("1. Mulai");

async function getUser() {
  console.log("2. Mulai fetch");

  const response = await fetch("https://jsonplaceholder.typicode.com/users/1"); // nunggu fetch

  const data = await response.json(); // nunggu parsing JSON

  console.log("4. Hasil:", data.name); // setelah semua selesai
}

getUser();

console.log("3. Selesai");

