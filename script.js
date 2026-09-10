const sidebar = document.getElementById("sidebar");
const main = document.querySelector(".main");
const collapseBtn = document.getElementById("collapseBtn");

collapseBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  main.classList.toggle("expanded");
});

document.querySelectorAll("[data-toggle]").forEach(button => {
  button.addEventListener("click", () => {
    button.parentElement.classList.toggle("open");
  });
});

document.querySelector(".chat").addEventListener("click", () => {
  alert("Support chat opened.");
});
