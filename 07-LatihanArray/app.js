const videos = Array.from(document.querySelectorAll("ul li"));
const durasiVideo = document.querySelector(".total-durasi")
const jmlhVideo = document.querySelector(".jumlah-video")

// jumlah video
const jumlah= videos.filter((video)=>{
  return video.innerHTML.includes("JAVASCRIPT LANJUTAN")
}).length

jmlhVideo.innerHTML = `${jumlah} Video`

// durasi video
const durasiVideoJS = videos.filter((video)=>{
  return video.innerHTML.includes("JAVASCRIPT LANJUTAN")
})

// ambil durasi masing" video
.map((item)=>{
  return item.dataset.duration
})

// ubah durasi menjadi ini, ubah menit menjadi detik
.map((durasi)=>{
  const split = durasi.split(":").map((num)=>{ return parseInt(num)})
  return (split[0] * 60) + split[1]
})

// Jumlahkan
.reduce((angka, kumulatif)=>{
  return angka + kumulatif
})



waktu(durasiVideoJS)
function waktu(detik) {
  const hour = Math.floor(detik / 3600) 
  const minute = Math.floor((detik % 3600) / 60 )
  const second = detik % 60
 

  durasiVideo.innerHTML = `${hour} jam, ${minute} menit, ${second} detik`
}