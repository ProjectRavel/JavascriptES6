const siswa = ["Rafael", "Pandu", "Sumanti"];
// console.log(...siswa)

// Menggabungkan 2 Array
const siswi = ["Nadhira", "Rafani", "Ghifari"];
const murid = [...siswa, "<3", ...siswi];
const conCat = siswa.concat(siswi);
console.log("Concat" + conCat);
console.log(murid);

// Mengcopy Arrau
const dummy = ["test1", "test2", "test3"];
const dummys = dummy
dummys[0] = "Tested"
console.log(dummy) // Output: ["tested", "test2", "test3"]

const dummy1 = ["TestA", "TestB", "TestC"]
const dummyTested = [...dummy1]
console.log(dummyTested)
dummy1[0] = "X..."

const listGhifa = document.querySelectorAll("li")
const listNadhira = []
const ArrayGhifa = [...listGhifa].map((li)=>{
  listNadhira.push(li.textContent)
})
console.log(listNadhira)

const nama = document.querySelector(".nama")
const arrayNama = [...nama.textContent]
const slicing = arrayNama.map((nama)=>{
  return `<span>${nama}</span>`
})

nama.innerHTML = slicing.join("")