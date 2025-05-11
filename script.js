const add_item_btn = document.querySelector(".btn-add-item");
const form = document.querySelector(".item-form");

add_item_btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    add_item_btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    add_item_btn.textContent = "Add item";
  }
});

// SUMMARY

let totalLiabilities = document.querySelector(".total-liabilities");
let totalAssets = document.querySelector(".total-assets");
let netWorth = document.querySelector(".net-worth");

let liabilities = parseFloat(totalLiabilities.textContent) || 0;
let assets = parseFloat(totalAssets.textContent) || 0;

let result = assets - liabilities;

netWorth.textContent = result;

const close_summary_btn = document.querySelector(".btn-close-summary");

const summary = document.querySelector(".summary");

const summary_btn = document.querySelector(".btn-summary");

const items = document.querySelector(".items");

summary_btn.addEventListener("click", function () {
  if (summary.classList.contains("hidden")) {
    summary.classList.remove("hidden");
    items.classList.add("hidden");
  }
  close_summary_btn.addEventListener("click", function () {
    if (!summary.classList.contains("hidden")) {
      summary.classList.add("hidden");
      items.classList.remove("hidden");
    }
  });
});

// Filters

const filter_assets = document.querySelector(".side-assets");

const filter_liabilities = document.querySelector(".side-liabilities");

const filter_assets_btn = document.querySelector(".btn-assets");

const filter_liabilities_btn = document.querySelector(".btn-liabilities");

filter_assets_btn.addEventListener("click", function () {
  if (filter_assets.classList.contains("hidden")) {
    filter_assets.classList.remove("hidden");
  } else filter_assets.classList.add("hidden");
});

filter_liabilities_btn.addEventListener("click", function () {
  if (filter_liabilities.classList.contains("hidden")) {
    filter_liabilities.classList.remove("hidden");
  } else filter_liabilities.classList.add("hidden");
});
