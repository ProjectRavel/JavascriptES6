// Array
const siswi = ["nadhira", "rafani", "ghifari"]
// for(let i = 0; i < siswi.length; i++){
//   console.log(siswi[i])
// }

// siswi.forEach(m => console.log(m))

// for(const m of siswi){
//   console.log(m)
// }

// String
const nama = "Sandhika"
for(const n of nama){
  console.log(n)
}

// siswi.forEach((n, i) => console.log(`${n} adalah mahasiswa ke-${i + 1}`))

for(const [i,m] of siswi.entries()){
  console.log(`${i + 1}.${m}`)
}

// entries [key : value]

const appList = document.querySelectorAll("li");

appList.forEach(i => console.log(i.innerHTML))


function jumlahAngka(){
  let jumlah = 0
  for(int of arguments){
    jumlah += int
  }
  return jumlah
}

console.log(jumlahAngka(1,2,3,4,5))

const muridMurid = {
  nama: "rafael",
  kelas: 10,
  email: "rafaelsumanti01@gmail.com"
}

for(m in muridMurid){
  console.log(muridMurid[m])
}

// for of (string, array, nodelist)
// for in (object)