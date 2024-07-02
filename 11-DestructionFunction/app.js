// function kalkulasi(a, b){
//   return [a + b, a - b, a * b, a/ b]
// }

// const [perjumlahan, pengurangan, perkalian, pembagian] = kalkulasi(5, 10)
// console.log(perjumlahan)

// function kalkulasi (a, b){
//   return{
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b
//   } 
// }

// const {bagi, tambah, kurang, kali} = kalkulasi(5, 10)

// console.log(kurang)

const mahasiswa = {
  nama: "Nadhira Rafani Ghifari",
  jurusan: "Bisnis",
  nilai: {
    uas: 98,
    pts: 99
  }
}

function getDataMhs({nama, jurusan, nilai: {uas, pts}}){
  console.log(pts)
}

getDataMhs(mahasiswa)