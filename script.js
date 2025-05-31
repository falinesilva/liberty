// Selecting DOM elements
const menuBtn = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");
const form = document.querySelector(".item-form");
const addBtn = document.querySelector(".btn-add");
const stats = document.querySelector(".net-worth");
const menuImg = document.querySelector(".menu-img");
const saveBtn = document.querySelector(".btn-add-save");
const cancelBtn = document.querySelector(".btn-add-cancel");
const itemList = document.querySelector(".item-list");

//Create DOM elements: Render items in list
itemList.innerHTML = "";

// Load data from Supabase
loadItems();

async function loadItems() {
  const res = await fetch(
    "https://bagvahadiehddzgbibhj.supabase.co/rest/v1/items",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhZ3ZhaGFkaWVoZGR6Z2JpYmhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NDE2MTMsImV4cCI6MjA2MTQxNzYxM30.-mlmD04uoAd7YAChxX2QKFU_z6iznkS7lUTAodJb_0s",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhZ3ZhaGFkaWVoZGR6Z2JpYmhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NDE2MTMsImV4cCI6MjA2MTQxNzYxM30.-mlmD04uoAd7YAChxX2QKFU_z6iznkS7lUTAodJb_0s",
      },
    }
  );

  const data = await res.json();
  // console.log(data);

  // const filterData = data.filter((item) => item.class === "Asset");

  createItemList(data);
}

function createItemList(dataArray) {
  const htmlArr = dataArray.map((item) => {
    const className = item.class?.toLowerCase();
    const formattedValue = item.value.toLocaleString();

    return `
      <ul class="item-list">
        <li class="item">
          <span class="name">${item.name}</span><br />
          <span class="type">${item.type}</span><br />
          <span class="class ${className}">${item.class}</span><br />
          <span class="value">$ ${formattedValue}</span>
          <div class="item-buttons">
            <button class="btn btn-delete-item">Delete</button>
            <button class="btn btn-edit-item">Edit</button>
          </div>
        </li>
      </ul>
    `;
  });

  const html = htmlArr.join("");
  itemList.insertAdjacentHTML("afterbegin", html);
}

console.log([7, 64, -23, 11].filter((el) => el > 10));
console.log([7, 64, -23, 11].find((el) => el > 10));

// Menu Functionality
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
