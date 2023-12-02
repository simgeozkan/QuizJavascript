// -------Soru constructor ,propertyleri ile birlikte oluşturuldu----

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  (this.soruMetni = soruMetni),
    (this.cevapSecenekleri = cevapSecenekleri),
    (this.dogruCevap = dogruCevap);
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

// ----------sorular dizisi içerisine sorular obje şeklinde oluşturuldu-----
// ---Soru constructordan oluşturulan yeni nesneler diziye atıldı----

let sorular = [
  new Soru(
    "1-hangisi javascript paket yönetici uygulamasıdır ?",
    { a: "node.js", b: "typeScript", c: "npm", d: "nuget" },
    "c"
  ),

  new Soru(
    "2-hangisi js paket yönetici uygulamasıdır ?",
    { a: "node.js", b: "typeScript", c: "npm", d: "nuget" },
    "a"
  ),
  new Soru(
    "3-hangisi c paket yönetici uygulamasıdır ?",
    { a: "node.js", b: "typeScript", c: "npm", d: "nuget" },
    "d"
  ),
  new Soru(
    "4-hangisi javascript paket yönetici uygulamasıdır ?",
    { a: "node.js", b: "typeScript", c: "npm", d: "nuget" },
    "c"
  ),
];
