// Rest parameter:
// Merepresentasikan argument pada function dengan jumlah yang tidak terbatas

function jumlahkan(...allNum){
  return allNum.reduce((acc,num)=>{
    return acc + num
  })
}

console.log(jumlahkan(1,2,3,4,5))

// Array Destructing
const kelompok1 = ["Rafael", "Ghifa", "Reja", "Patir", "Gibran"]
const [ketua,wakil, ...anggota] = kelompok1
console.log(anggota)

// Object Destructing
const team = {
  lead: "Rafael",
  vice: "Nadhira",
  sekertaris: "Assa",
  bendahara: "Kiki"
}

const { lead : leader, ...myTeam} = team

console.log(leader)

// Filtering
function filtering(decision, ...allType){
  return allType.filter((type)=>{
    return typeof type === decision
  })
}

console.log(filtering("boolean", 1 , "RAFAEL", 2, true, false))