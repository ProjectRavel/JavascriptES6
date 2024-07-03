// *** JQuery ***
// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers",
//   success: movies =>{
//       const search = movies.Search
//       search.map((movie)=> console.log(movie.Title))
//   }
// })

// *** JavaSCript Vanilla ***
// fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
// .then(response => response.json())
// .then(response => console.log(response))

// promise
// object yang merepresentasikan keberhasilan atau kegagalan dari sebuah event yang asynchronous yang terjadi di masa yang akan datang
// Janji (Terpenuhi / ingkar)
// states (fullfilled / rejected / pending)
// calback (resolve/ reject / finally)
// aksi(then / catch)

// Contoh 1
// let ditepati = true
// const janji1 = new Promise((resolve, reject) => {
//   if(ditepati){
//     resolve("Janji telah ditepati")
//   }else{
//     reject("Janji telah di ingkar")
//   }
// })

// janji1
// .then(response => console.log(`OK! ${response}`))
// .catch(response => console.log(`NOT OK! ${response}`))

//contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati setelah beberapa waktu");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("Tidak Ditepati Setelah Beberapa Waktu");
//     }, 2000);
//   }
// });

// console.log("Mulai");
// janji2
//   .finally(() => {
//     console.log("selesai menunggu");
//   })
//   .then((janji) => {
//     console.log(`behasil : ${janji}`);
//   })
//   .catch(() => {
//     console.log(`Gagal`);
//   });

//Promise all()

const film = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avengers",
        sutradara: "Rafael",
        pemeran: "Nadhira, Ghifari",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve, reject) => {
  {
    setTimeout(() => {
      resolve([
        {
          kota: "bandung",
          temp: 26,
          kondisi: "Cerah Berawan",
        },
      ]);
    }, 500);
  }
});


Promise.all([film, cuaca])
.then(Response => console.log(...Response))