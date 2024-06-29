class Database {
  constructor(nama, kelas, umur) {
    this.nama = nama;
    this.kelas = kelas;
    this.umur = umur;
  }

  bulan() {
    return this.umur * 12;
  }
  hari() {
    return this.umur * 12 * 365;
  }
}

let ghifa = new Database("Ghifa", "9B", 15);
