// Lexical Scope

// function init() {
//   // let nama = "Rafael" // Local Variable
//   return function (nama) {
//     // Inner Function
//     console.log(nama);
//   };
// }
// let menampilkanNama = init();
// menampilkanNama("Pandu");

// Closure berfungsi untuk function factory & Membuat Private Method
// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama} Selamat ${waktu} Semoga harimu menyenangkan!`);
//   };
// }

// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatMalam = ucapkanSalam("Malam");

// selamatPagi("Rafael");
// selamatSiang("Pandu");
// selamatMalam("Sumanti");

let add = (function(){
  let counter = 0;
  return function(){
    return ++counter
  }
})()

console.log(add())
console.log(add())
console.log(add())