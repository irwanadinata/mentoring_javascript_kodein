//PROMISE
//Basic Promise
function ambilData () {
    return new Promise((resolve, reject) => {

        setTimeout(()=>{

            const sukses = true;
            if (sukses){
                resolve("Data berhasil diambil") //kirim ke .then()
            } else {
                reject("Gagal ambil data") //kirim ke .catch()
            }

        }, 3000)
    })
};

ambilData()
.then((hasil)=>{
    console.log(`Hasil: ${hasil}`)
})
.catch((error)=>{
    console.error(`Error: ${error}`)
})

//Real Case Promise
function getUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
    res.json(),
  ); //convert ke JSON
}

getUser()
  .then((data) => {
    console.log(`${data.name}`);
  })
  .catch((err) => {
    console.log(`${err}`);
  });
