//Apa itu callback?
//Callback adalah proses memanggil function lain di dalam function
//sifatnya asyncronus

// Contoh Basic Callback
function ambilData(callbackSucces, errorCallback) {
    setTimeout(()=>{
        const sukses = true;

        if (sukses){
            callbackSucces("Data Berhasil");
        }
        else {
            errorCallback("Gagal")
        }
    }, 3000);
}

function sukses(data){
    console.log(`Sukses: ${data}`)
}

function error(error){
    console.log(`Error: ${error}`)
}

ambilData(sukses, error);




//Contoh Real Case Callback
function getUser(callback, errCallback){
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res)=> res.json())
    .then((data)=> callback(data))
    .catch((err)=> errCallback(err))
}

function tampilkanUser(data){
    console.log(`Nama User: ${data.username}`)
}

function handleError(){
    console.log(`ErrorBoss: ${error}`)
}

getUser(tampilkanUser, handleError);