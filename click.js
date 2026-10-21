const clickCount = document.getElementById("clickCount");
let totalClicks = 0;

document.addEventListener("click", () => {
  totalClicks += 1;
  clickCount.textContent = `Click count: ${totalClicks}`;
});