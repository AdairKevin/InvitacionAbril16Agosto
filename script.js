function abrirSobre() {
  const sobre = document.querySelector(".envelope");
  if (!sobre.classList.contains("abierto")) {
    sobre.classList.add("abierto");
    sobre.onclick = null; // Desactiva el evento de clic después de abrir
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const DATE_TARGET = new Date("08/16/2025 04:00 PM");

  const SPAN_DAYS = document.querySelector("span#days");
  const SPAN_HOURS = document.querySelector("span#hours");
  const SPAN_MINUTES = document.querySelector("span#minutes");
  const SPAN_SECONDS = document.querySelector("span#seconds");

  const MILLISECONDS_OF_A_SECOND = 1000;
  const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
  const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
  const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;

  function updateCountdown() {
    const NOW = new Date();
    const DURATION = DATE_TARGET - NOW;
    const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
    const REMAINING_HOURS = Math.floor(
      (DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR
    );
    const REMAINING_MINUTES = Math.floor(
      (DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE
    );
    const REMAINING_SECONDS = Math.floor(
      (DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND
    );

    SPAN_DAYS.textContent = REMAINING_DAYS;
    SPAN_HOURS.textContent = REMAINING_HOURS;
    SPAN_MINUTES.textContent = REMAINING_MINUTES;
    SPAN_SECONDS.textContent = REMAINING_SECONDS;
  }

  updateCountdown();

  setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);
});

function PlayAudio() {
  document.getElementById("musica1").play();
}
