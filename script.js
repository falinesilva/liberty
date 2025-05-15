const menuBtn = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");
const form = document.querySelector(".item-form");
const addBtn = document.querySelector(".btn-add");
const stats = document.querySelector(".net-worth");
const menuImg = document.querySelector(".menu-img");
const saveBtn = document.querySelector(".btn-add-save");
const cancelBtn = document.querySelector(".btn-add-cancel");
menuBtn.addEventListener("click", function () {
  const menuHidden = menu.classList.contains("hidden");
  const formVisible = !form.classList.contains("hidden");

  if (menuHidden && !formVisible) {
    menu.classList.remove("hidden");
    stats.classList.add("hidden");
  } else {
    menu.classList.add("hidden");
    form.classList.add("hidden");
    stats.classList.remove("hidden");
  }

  // Toggle menu icon
  if (menuImg.src.includes("open-menu.png")) {
    menuImg.src = "close-menu.png";
  } else {
    menuImg.src = "open-menu.png";
  }
});

addBtn.addEventListener("click", function () {
  form.classList.remove("hidden");
  menu.classList.add("hidden");
});

saveBtn.addEventListener("click", function () {
  form.classList.toggle("hidden");
  menu.classList.toggle("hidden");
  console.log("Item Form Saved");
});

cancelBtn.addEventListener("click", function () {
  form.classList.toggle("hidden");
  menu.classList.toggle("hidden");
  console.log("Item Form Cancelled");
});
