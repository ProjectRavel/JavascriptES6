const angka = [3, 1, 4, 6, 5, 7, 9999, 293013129, 321983201801]


const chaining = angka.reduce((num, kumulatif)=>{
  return num + kumulatif
})

console.log((chaining / angka.length) * 2)
