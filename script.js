// Menu

const menu_btn = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu-section");
const stats = document.querySelector(".stats-section");

menu_btn.addEventListener("click", function () {
  // Toggle menu visibility
  menu.classList.toggle("hidden");
  stats.classList.toggle("hidden");

  // Swap the image
  if (menu_img.src.includes("open-menu.png")) {
    menu_img.src = "close-menu.png";
  } else {
    menu_img.src = "open-menu.png";
  }
});

// Add Menu

const menu_img = menu_btn.querySelector("img");
const item_form = document.querySelector(".item-form");
const add_btn = document.querySelector(".btn-add");
const add_save_btn = document.querySelector(".btn-add-save");

add_btn.addEventListener("click", function () {
  if (item_form.classList.contains("hidden")) {
    item_form.classList.remove("hidden");
    menu.classList.add("hidden");
  }
});

add_save_btn.addEventListener("click", function () {
  item_form.classList.add("hidden");
  menu.classList.remove("hidden");
  menu_img.src = "close-menu.png";
});

close_add_btn.addEventListener("click", function () {
  item_form.classList.add("hidden");
  stats.classList.toggle("hidden");
  menu_img.src = "open-menu.png";
});
