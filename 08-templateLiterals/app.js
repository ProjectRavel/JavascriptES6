const container = document.querySelector(".container");
const playlist = document.querySelector(".playlist");
const mahasiswa = document.querySelector(".mahasiswa")

//  Data Siswa
const dataSiswa = [
  {
    nama: "Rafael Pandu Sumanti",
    kelas: "XRPL1",
    umur: 16,
  },
  {
    nama: "Nadhira Rafani Ghifari",
    kelas: "9B",
    umur: 15,
  },
];

const siswa = dataSiswa
  .map((siswa) => {
    return `<h4>Nama: ${siswa.nama}</h4>
  <ul>
      <li>Kelas: ${siswa.kelas}</li>
      <li>Umur: ${siswa.umur}</li>
  </ul>`;
  })
  .join("");

container.innerHTML = siswa;

// Playlist
const dataMusik = [
  {
    penyanyi: "Nadhira Rafani Ghifari",
    musik: "Mantra Hujan",
  },
  {
    penyanyi: "Rafael Pandu",
    musik: "Ap ajh",
    feat: "siapa aja",
  },
];

const music = dataMusik.map((musik) => {
  return `<ul>
    <li>Penyanyi: ${musik.penyanyi}</li>
    <li>Lagu: ${musik.musik} ${dataMusik ? `Feat:${musik.feat}` : ""}</li>
  </ul>`;
}).join();

playlist.innerHTML = music;

// Gelar
const gelar = [
  {
    nama: "Rafael Pandu",
    umur: 16,
    gelar: [
      "Informatika",
      "Rekayasa Perangkat Lunak",
      "Matematika"
    ]
  },
  {
    nama: "Ghifa",
    umur: 15,
    gelar: [
      "Ekonomi",
      "Wirausahawan",
    ]
  }
]

const glr = gelar.map((glr)=>{  
return `<h2>nama:${glr.nama}</h2>
        <h2>umur:${glr.umur}</h2>
        <ol>
            ${listumur(glr.gelar)}
        </ol>`
}).join("")

function listumur(gelarList){
  return gelarList.map((gl)=>{
    return `<li>${gl}</li>`
  })
}

mahasiswa.innerHTML = glr
