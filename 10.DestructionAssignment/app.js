// // Destruction Variable / Assignment

// // Destruction Array
// const perkenalan = ["Halo", "nama", "saya", "Rafael"];

// // const [salam, satu, dua, nama] = perkenalan

// // Skipping items
// // const [salam, , , nama] = perkenalan;
// // console.log(salam, nama);

// // Swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];

// console.log(a, b);

// // return value pada function
// function coba() {
//   return [1, 2];
// }

// const [c, d] = coba();
// console.log(c);

// // Rest Parameter
// const [f, ...isi] = [1, 2, 3, 4, 5, 6, 7];
// console.log(isi);
// console.log(f)
  // Destruction Object
  // const mhs = {
  //   nama: "sumanti",
  //   umur: 16
  // };

  // const { nama, umur } = mhs
  // console.log(nama, umur)

  // Asignment tanpa deklarasi Object

// const mahasiswa = {
//     nama: "rafael",
//     kelas: 15,
//     email: "rafaelsumanti01@gmail.com"
//   }
// const {nama: n, ...values} = mahasiswa
// console.log(n, values.email )


// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const smpWB = {
  id: 312321,
  nama: "Nadhira Rafani Ghifari",
  kelas: 10,
  email: "nadhira289@gmail.com"
}

function getID({ id }){
  return id
}

console.log(getID(smpWB))
