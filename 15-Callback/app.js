// Calback adalah: Function yang dikirimkan sebagai parameter pada function yang lain. atau function yang dieseksui setelah function lain selesai
//Synchronous Callback
// function halo(nama){
//   alert(`Halo, ${nama}`)
// }

// function tampilkanPesan(idk){
//     const nama = prompt("masukkan Nama :")
//     idk(nama)
//   }

// tampilkanPesan(nama=> alert(`halo ${nama}`))

// const mahasiswa = [{
//   "nama" : "Rafael Pandu Sumanti",
//   "nrp" : "0213213123",
//   "email" : "rafaelcodeid@gmail.com",
//   "jurusan": "Teknik Informatika",
//   "idDosenWali" : 1
// },
// {
//   "nama" : "Nadhira Rafani Ghifari",
//   "nrp" : "3203032103",
//   "email" : "nadhira289@gmail.com",
//   "jurusan": "Teknik Informatika",
//   "idDosenWali" : 2
// },
// {
//   "nama" : "Arya Pratama",
//   "nrp" : "3203042104",
//   "email" : "aryapratama@gmail.com",
//   "jurusan": "Teknik Informatika",
//   "idDosenWali" : 3
// },
// {
//   "nama" : "Dina Lestari",
//   "nrp" : "3203052105",
//   "email" : "dinalestari@gmail.com",
//   "jurusan": "Teknik Informatika",
//   "idDosenWali" : 1
// },
// {
//   "nama" : "Budi Santoso",
//   "nrp" : "3203062106",
//   "email" : "budisantoso@gmail.com",
//   "jurusan": "Teknik Informatika",
//   "idDosenWali" : 2
// },
// {
//   "nama" : "Siti Aisyah",
//   "nrp" : "3203072107",
//   "email" : "sitiaisyah@gmail.com",
//   "jurusan": "Teknik Informatika",
//   "idDosenWali" : 3
// },
// {
//   "nama" : "Rizki Maulana",
//   "nrp" : "3203082108",
//   "email" : "rizkimaulana@gmail.com",
//   "jurusan": "Teknik Informatika",
//   "idDosenWali" : 1
// },
// {
//   "nama" : "Lina Marlina",
//   "nrp" : "3203092109",
//   "email" : "linamarlina@gmail.com",
//   "jurusan": "Teknik Informatika",
//   "idDosenWali" : 2
// },
// {
//   "nama" : "Eko Prasetyo",
//   "nrp" : "3203102110",
//   "email" : "ekoprasetyo@gmail.com",
//   "jurusan": "Teknik Informatika",
//   "idDosenWali" : 3
// },
// {
//   "nama" : "Fitri Rahmawati",
//   "nrp" : "3203112111",
//   "email" : "fitrirahmawati@gmail.com",
//   "jurusan": "Teknik Informatika",
//   "idDosenWali" : 1
// }
// ]
// console.log("mulai")
// mahasiswa.map((nama) => {
//   for(let i = 0; i < 10000000; i++){
//     let date = new Date()
//   }
//   console.log(nama.nama)
// })
// console.log("selesai")

// Asynchronous Callback
// Request data menggunakan ajax

// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4){
//       if(xhr.status === 200){
//         success(xhr.response)
//       }else if(xhr.status === 404){
//         error()
//       }
//     }
//   }

//   xhr.open('get', url)
//   xhr.send()
// }


// console.log("mulai")
// getDataMahasiswa("./data/mahasiswa.json", (results)=>{
//   const dataMahasiswa = JSON.parse(results)
//   dataMahasiswa.map((mahasiswa)=>{
//     console.log(mahasiswa.nama)
//   })
// }, ()=>{
//   console.log("eror")
// }) 
// console.log("selesai")


// JQuery
console.log("Mulai")
$.ajax({
  url: './data/mahasiswa.json',
  success: (mhs) => {
    mhs.map((m)=>{
      console.log(m.nama)
    })
  },
  error: (e) => {
    console.log(e.responseText)
  }
})
console.log("Selesai")