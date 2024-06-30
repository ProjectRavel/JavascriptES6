// 2 fase execution context:
//  1. creation
//  2. execution

// console.log(nama);
// let nama = "rafael";

// creation phase pada global context
// nama var = undefind
// function = fn()
// *** Hoisting ***
// window = global object
// this = window

// execution phase

// let nama = 'Rafael'
// let umur = 15

// console.log(sayHello())

// function sayHello() {
//   return `Halo, nama saya ${nama}, ${umur} tahun`
// }

// let nama = "rafael";
// let username = "@rulvyy";

// function cetakURL(instagramName){
//   let instagramLink = "https://instagram.com/"
//   return instagramLink + username
// }

// console.log(cetakURL(nama))

// function a() {
//   console.log("ini a");
//   function b() {
//     console.log("ini b");
//     function c() {
//       console.log("ini c");
//     }
//     c();
//   }
//   b();
// }
// a();

function init(){
  let nama = "Rafael"
  let umur = 16
  function tampilnama(){
    console.log(nama)
    console.log(umur)
  }
  return tampilnama
}

let panggilan = init();
console.log("Pandu")