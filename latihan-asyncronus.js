//LATIHAN ASYNCRONUS JAVASCRIPT
//SOAL 1

// async function getUsers() {
//   try {
//     const data = await fetch("https://jsonplaceholder.typicode.com/users");

//     if(!data.ok) {
//         throw new Error ("Gagal mengambil data")
//     }

//     const hasil = await data.json(); //ini mengubah string menjadi object (JSON parse)
//     hasil.forEach(hasil2 => {
//         console.log(hasil2.name);
//     });
    
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// getUsers();



//SOAL 2

async function getUserById(id){
    try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!data.ok){
            throw new Error ("User tidak ditemukan")
        }

        const hasil = await data.json();
        console.log(hasil.name);
        console.log(hasil.username);
    } catch (error) {
        console.log(error.message)
    }
}

getUserById(10);

