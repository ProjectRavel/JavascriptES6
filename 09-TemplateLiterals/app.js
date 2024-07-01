// const nama = "hikam"
// const umur = 1945

// function coba(strgs, ...values){
//   // let result = ''
//   // strgs.forEach((str, i) => {
//   //   result += `${str}${values[i] || ''}`
//   // });
//   // return result

//   return strgs.reduce((result, str, i)=> `${result}${str}${values[i] || ""}
//   `, '')

// }

// const str = coba`Halo, nama saya ${nama}, saya,${umur} tahun.`
// console.log(str)

// *** HIGHLIGHT ***
const nama = "ghifa";
const umur = 15;

function highlight(strgs, ...values) {
  return strgs.reduce((result, string, i)=>
    `${result}${string}<span class="hl">${values[i] || ''}</span>`, ''
  )
}

const str = highlight`Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
console.log(str);

document.body.innerHTML = str