//Soal 1
for (let primer = 1; primer <= 5; primer++) {
  let bintang = "";
  for (let sekunder = 1; sekunder <= primer; sekunder++) {
    bintang = bintang + "*";
  }
  console.log(bintang);
}

//Soal 2

const array = [1, 2, 3, 4, 5, 6, 7, 8];

for (let array2 of array) {
  if (array2 % 2 === 0) {
    console.log(array2);
  }
}

//Soal 3
function faktorial(parameter) {
  let hasil = 1;

  for (let variable = 1; variable <= parameter; variable++) {
    hasil = hasil * variable;
  }

  console.log(hasil);
}

faktorial(9);

//noted
// == sama isi datanya
//1 == "1"
// === sama isi datanya dan sama tipe datanya
