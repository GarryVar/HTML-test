$(window).on("load resize", () => {
  if ($(window).width() < 767) {
    $(".slider:not(.slick-initialized)").slick({
      dots: true,
      arrows: false,
    });
  } else {
    $(".slider.slick-initialized").slick("unslick");
  }
});

let minute = 30;
let sec = 60;

const timer = () => {
  const hoursDigit = document.querySelector(".timer__hours");
  const minutesDigit = document.querySelector(".timer__minutes");
  const secDigit = document.querySelector(".timer__seconds");

  sec--;
  secDigit.textContent = sec;

  if (sec < 10) {
    secDigit.textContent = `0${sec}`;

    if (sec <= 0) {
      minute--;
      sec = 60;
      secDigit.textContent = sec;
      minutesDigit.textContent = minute;

      if (minute < 10) {
        minutesDigit.textContent = `0${minute}`;

        if (minute <= 0) {
          minute = "00";
          minutesDigit.textContent = minute;

          sec = "00";
          secDigit.textContent = sec;
        }
      }
    }
  }
};

setInterval(timer, 1000);
clearInterval(timer);

window.addEventListener("load", timer);
