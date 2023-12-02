const quiz = new Quiz(sorular);

const ui = new UI();

// -----teste başlamak için buton click olayını veriyoruz---

ui.btn_start.addEventListener("click", function () {
  startTimer(10);
  startTimerLine();
  ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
  ui.quiz_box.classList.add("active");
  ui.soruGoster(quiz.soruGetir(quiz.soruIndex));
});

// -----next butonu ile soruları ekrana getir-----

ui.btn_next.addEventListener("click", function () {
  ui.btn_next.classList.remove("next-btn-show");
  if (quiz.sorular.length != quiz.soruIndex + 1) {
    // else bloguna girmesi için +1 ekledik
    quiz.soruIndex += 1;
    clearInterval(counter);
    startTimer(10);
    clearInterval(counterLine);
    startTimerLine();
    ui.soruGoster(quiz.soruGetir(quiz.soruIndex));
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
  } else {
    clearInterval(counter);
    console.log("quiz bitti");
    ui.quiz_box.classList.remove("active");
    ui.score_box.classList.add("active");
    ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi);
  }
});

// ----score göster----

// -----soru göster----

let option_list = ui.option_list;

// ----cevap seçiliyor----

function optionSelected(option) {
  clearInterval(counter);

  clearInterval(counterLine);
  let cevap = option.querySelector("span b").textContent;

  let soru = quiz.soruGetir();

  if (cevap == soru.dogruCevap) {
    quiz.dogruCevapSayisi += 1;
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", ui.iconCheck);
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.iconTimes);
  }

  for (let opt of ui.option_list.children) {
    opt.classList.add("disabled");
  }

  ui.btn_next.classList.add("next-btn-show");
}

// ---testi buton yardımıyla yeniden başlatıp ilk soruyu görüntülüyoruz----

ui.btn_replay.addEventListener("click", function () {
  quiz.soruIndex = 0;
  quiz.dogruCevapSayisi = 0;
  ui.btn_start.click();
  // ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
  // ui.quiz_box.classList.add("active");
  // ui.soruGoster(quiz.soruGetir(quiz.soruIndex));
  ui.score_box.classList.remove("active");
});

// -----buton yardımıyla testi bitirip ana ekran başlat butonuna geri dönüyoruz---

ui.btn_quit.addEventListener("click", function () {
  window.location.reload();
  // quiz.soruIndex = 0;
  // ui.quiz_box.classList.remove("active");
  // ui.score_box.classList.remove("active");
});

// -----timer fonksiyonu ile süre ayarlıyoruz----
let counter;
function startTimer(time) {
  counter = setInterval(timer, 1000); // 1 er saniye aralıklarla timer fonksiyonunu çağırdık

  function timer() {
    ui.time_second.textContent = time;
    time--;

    if (time < 0) {
      clearInterval(counter); // süreyi sıfırladık.

      ui.time_text.textContent = "süre bitti";

      let cevap = quiz.soruGetir().dogruCevap; // mevcut soruyu aldık

      for (let option of ui.option_list.children) {
        // her cevap üzerinde dolaşıp doğru cevapla eşleşen option ı buluruz.
        if (option.querySelector("span b").textContent === cevap) {
          option.classList.add("correct"); // doğru cevap olan optionı işaretledik
          option.insertAdjacentHTML("beforeend", ui.iconCheck);
          ui.btn_next.classList.add("next-btn-show"); // next butonunu gösterdik snraki soruya geçmek için
        }
        option.classList.add("disabled"); // diğer optionları pasife düşürdük seçimi kısıtlamak için
      }
    }
  }
}

let counterLine;
function startTimerLine() {
  let line_width = 0;

  counterLine = setInterval(timer, 20);

  function timer() {
    line_width += 1;
    ui.time_line.style.width = line_width + "px";

    if (line_width > 549) {
      clearInterval(counterLine);
    }
  }
}
