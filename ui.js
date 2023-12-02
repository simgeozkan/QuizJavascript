function UI() {
  (this.btn_start = document.querySelector(".btn-start")),
    (this.btn_next = document.querySelector(".next-btn")),
    (this.btn_replay = document.querySelector(".btn_replay")),
    (this.btn_quit = document.querySelector(".btn_quit")),
    (this.quiz_box = document.querySelector(".quiz-box")),
    (this.score_box = document.querySelector(".score-box")),
    (this.score_text = document.querySelector(".score-text")),
    (this.time_text = document.querySelector(".time-text")),
    (this.time_second = document.querySelector(".time-second")),
    (this.question_text = document.querySelector(".question_text")),
    (this.time_line = document.querySelector(".time-line")),
    (this.option_list = document.querySelector(".option_list")),
    (this.iconCheck = ` <div class="icon"><i class="fas fa-check"></i></div> `),
    (this.iconTimes = ` <div class="icon"><i class="fas fa-times"></i></div>`);
}

UI.prototype.soruGoster = function (soru) {
  let question = `
        <span>${soru.soruMetni}</span>
    
    `;

  let options = "";

  for (let cevap in soru.cevapSecenekleri) {
    options += `
        <div class="option">
            <span><b>${cevap}</b> ${soru.cevapSecenekleri[cevap]}</span>
        </div>  
        `;
  }
  this.question_text.innerHTML = question;

  this.option_list.innerHTML = options;

  const option = this.option_list.querySelectorAll(".option");

  for (let opt of option) {
    opt.setAttribute("onclick", "optionSelected(this)");
  }
};

UI.prototype.soruSayisiniGoster = function (soruSirasi, toplamSoru) {
  let tag = `<span class="badge bg-warning">${soruSirasi} / ${toplamSoru}</span>`;
  let footer = (document.querySelector(".quiz-box .question_index").innerHTML =
    tag);
};

UI.prototype.skoruGoster = function (toplamSoru, dogruCevap) {
  let score = `<div class="score-text"><b>toplam ${toplamSoru} sorudan ${dogruCevap} bildiniz</b></div>`;
  this.score_text.innerHTML = score;
};








