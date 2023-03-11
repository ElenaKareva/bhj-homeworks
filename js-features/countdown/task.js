const timer = document.getElementById("timer");
timer.textContent = 40;
const report = function() {
  timer.textContent--;
    if(timer.textContent == 0) {
      clearInterval(tymerId);
      alert('Вы победили в конкурсе!');
    }
}
let tymerId = setInterval(report, 1000);