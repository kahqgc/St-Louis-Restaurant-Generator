// script.js

// ------- Sample data (edit/add as you want) -------
const restaurants = [
  { name: "Sado", cuisine: "japanese", price: "$$$" },
  { name: "Cate Zone", cuisine: "chinese", price: "$$" },
  { name: "Trattoria Marcella", cuisine: "italian", price: "$$" },
  { name: "Mission Taco Joint", cuisine: "mexican", price: "$" },
  { name: "Pappy's Smokehouse", cuisine: "bbq", price: "$$" },
  { name: "Union Loafers", cuisine: "american", price: "$$" },
];

// ------- Grab elements -------
const cuisineFilter = document.getElementById("cuisineFilter");
const priceFilter = document.getElementById("priceFilter");

const pickButton = document.getElementById("pickButton");
const randomButton = document.getElementById("randomButton");

const resultSection = document.getElementById("result");
const resultName = document.getElementById("resultName");
const resultDetails = document.getElementById("resultDetails");

// ------- Helpers -------
function getFilteredRestaurants() {
  const cuisineValue = cuisineFilter.value;
  const priceValue = priceFilter.value;

  return restaurants.filter((r) => {
    const cuisineOk = cuisineValue === "any" || r.cuisine === cuisineValue;
    const priceOk = priceValue === "any" || r.price === priceValue;
    return cuisineOk && priceOk;
  });
}

function pickRandom(list) {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

function showResult(restaurant) {
  resultName.textContent = restaurant.name;
  resultDetails.textContent = `${restaurant.cuisine.toUpperCase()} • ${restaurant.price} — ${restaurant.details}`;
  resultSection.classList.remove("hidden");

  // optional: scroll result into view on small screens
  resultSection.scrollIntoView({ behavior: "smooth", block: "center" });
}

function showNoMatchMessage() {
  resultName.textContent = "No matches 😭";
  resultDetails.textContent =
    "Try changing Cuisine/Price filters, or set them to 'Any'.";
  resultSection.classList.remove("hidden");
}

// ------- Button logic -------

// "Pick a restaurant" (filtered random)
pickButton.addEventListener("click", () => {
  const filtered = getFilteredRestaurants();

  if (filtered.length === 0) {
    showNoMatchMessage();
    return;
  }

  const restaurant = pickRandom(filtered);
  showResult(restaurant);
});

// "Generate a random restaurant" (ignores filters)
randomButton.addEventListener("click", () => {
  const restaurant = pickRandom(restaurants);
  showResult(restaurant);
});