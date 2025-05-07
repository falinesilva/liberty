console.log("Hello world!");

const btn = document.querySelector(".btn-add-item");
const form = document.querySelector(".item-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Add item";
  }
});
