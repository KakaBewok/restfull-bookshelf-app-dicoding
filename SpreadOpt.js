// database di server
const books = [
  {
    id: 12345,
    nama: 'rizal',
    kelas: 2,
  },
  {
    id: 678910,
    nama: 'malik',
    kelas: 1,
  },
];
// params
const id = 678910;
// payload
let nama = 'roro';
let kelas = 1000;
// pengecekan berapa index yang akan diubah
const index = books.findIndex((b) => b.id === id);
// proses replace
books[index] = {
  ...books[index],
  nama,
  kelas,
};
// keluaran
console.log(books[index]);
