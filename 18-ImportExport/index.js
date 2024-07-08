import {
  PI,
  luasLingkaran,
  kelilingLingkaran,
  volumeLingkaran,
} from "./Mathutil.js";

const keliling = kelilingLingkaran(10);
const luas = luasLingkaran(10);
const volume = volumeLingkaran(10);
console.log(`${keliling}cm`);
console.log(`${luas}cm`);
console.log(`${volume}cm`);
