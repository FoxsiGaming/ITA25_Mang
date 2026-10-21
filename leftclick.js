const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  button.textContent = `Click count: ${event.detail}`;

   if (event.detail > 0) {
    console.log("Vajutas");
  } else {
    console.log("Midagi on mada");
  }
});