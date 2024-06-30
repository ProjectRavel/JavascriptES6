// const tampilNama = (nama, waktu)=>{
//   return `Selamat ${waktu} ${nama}!`
// }

// // console.log(tampilNama("Rafael", "Siang"))

// Implisit Parameter
const tampilNama = (nama) => `Halo ${nama}`;
console.log(tampilNama("Rafael"));

// Pengimplementasian Arrow Function
let mahasiswa = ["Rafael", "Nadhira", "Ghifari"];
let jumlahHuruf = mahasiswa.map((nama) => nama.length);

console.log(jumlahHuruf);
console.log(`===========================`);

let siswa = ["Pandu", "Rafani", "Ghifari"];
let huruf = siswa.map((nama) => ({ nama: nama, huruf: nama.length }));
console.table(huruf);
console.log(`===========================`);

// Konsep This pada arrow Function
const murid = function () {
  this.nama = "Rafael";
  this.umur = 16;
  this.sayHello = function () {
    console.log(`Halo ${this.nama} kamu berumur ${this.umur} tahun`);
  };

  setInterval(() => {
    console.log(this.umur++);
  }, 500);
};

const rafael = new murid();

// Real World Arrow function
const box = document.querySelector(".box");
box.addEventListener("click", function(){
  this.classList.toggle("size");
  setTimeout(() => {
    this.classList.toggle("caption");
  }, 600);
});
