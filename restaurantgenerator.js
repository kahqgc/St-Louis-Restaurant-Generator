const restaurants = [
  { name: "Chez Ali", cuisine: "afro-caribbean", price: "$$" },

  { name: "Balkan Treat Box", cuisine: "balkan", price: "$$" },

  { name: "Patisserie 29", cuisine: "bakery", price: "$" },
  { name: "Bagel Union", cuisine: "bakery", price: "$" },
  { name: "Union Loafers", cuisine: "bakery", price: "$$" },
  { name: "Clementine’s Naughty & Nice Creamery", cuisine: "dessert", price: "$" },
  { name: "Damn Fine Hand Pies", cuisine: "bakery", price: "$" },
  { name: "Sugarwitch", cuisine: "dessert", price: "$" },
  { name: "SweetArt", cuisine: "vegan", price: "$" },
  { name: "La Patisserie Chouquette", cuisine: "bakery", price: "$" },
  { name: "Lefty’s Bagels", cuisine: "bakery", price: "$" },
  { name: "Nathaniel Reid Bakery", cuisine: "bakery", price: "$" },

  { name: "Beast Craft BBQ Co.", cuisine: "bbq", price: "$$" },
  { name: "Pappy’s Smokehouse", cuisine: "bbq", price: "$$" },
  { name: "O’B Que’s", cuisine: "bbq", price: "$$" },
  { name: "Salt + Smoke", cuisine: "bbq", price: "$$" },
  { name: "Shorty’s Smokehouse", cuisine: "bbq", price: "$$" },
  { name: "The Fattened Caf", cuisine: "filipino", price: "$$" },

  { name: "The Biscuit Joint", cuisine: "breakfast", price: "$" },
  { name: "Bolyard’s Meat & Provisions", cuisine: "breakfast", price: "$$" },
  { name: "Bowood by Niche", cuisine: "breakfast", price: "$$" },
  { name: "Clara B’s Kitchen Table", cuisine: "southern", price: "$" },
  { name: "Songbird", cuisine: "breakfast", price: "$" },
  { name: "Telva at the Ridge", cuisine: "mediterranean", price: "$$" },
  { name: "Fleur STL", cuisine: "burgers", price: "$$" },
  { name: "Honey Bee’s Biscuits + Good Eats", cuisine: "breakfast", price: "$" },
  { name: "Milque Toast Bar", cuisine: "contemporary", price: "$$" },

  { name: "J’s Pitaria", cuisine: "bosnian", price: "$$" },

  { name: "Sister Cities Cajun", cuisine: "cajun", price: "$$" },

  { name: "Havana’s Cuisine", cuisine: "cuban", price: "$$" },

  { name: "Afandi Kitchen", cuisine: "chinese", price: "$$" },
  { name: "ChiliSpot", cuisine: "chinese", price: "$$" },
  { name: "Jinzen", cuisine: "japanese", price: "$$" },
  { name: "Lona’s Lil Eats", cuisine: "thai", price: "$$" },
  { name: "Mai Lee", cuisine: "vietnamese", price: "$$" },

  { name: "Charlie Gitto’s", cuisine: "italian", price: "$$$" },
  { name: "Paul Manno’s Restaurant", cuisine: "italian", price: "$$" },

  { name: "Mayo Ketchup", cuisine: "venezuelan", price: "$$" },

  { name: "Vicia", cuisine: "contemporary", price: "$$$" },
  { name: "Little Fox", cuisine: "contemporary", price: "$$$" },
  { name: "Root Food + Wine", cuisine: "contemporary", price: "$$$" },
  { name: "Mainlander", cuisine: "contemporary", price: "$$$" },
  { name: "The Crossing", cuisine: "contemporary", price: "$$$" },
  { name: "Sidney Street Cafe", cuisine: "contemporary", price: "$$$" },
  { name: "Esca", cuisine: "mediterranean", price: "$$$" },
  { name: "Olive + Oak", cuisine: "contemporary", price: "$$" },
  { name: "Farmhaus", cuisine: "contemporary", price: "$$" },
  { name: "Annie Gunn’s", cuisine: "steakhouse", price: "$$$" },
  { name: "August the Mansion", cuisine: "contemporary", price: "$$" },
  { name: "Cleveland-Heath", cuisine: "contemporary", price: "$$" },
  { name: "No Ordinary Rabbit", cuisine: "mediterranean", price: "$$$" },
  { name: "Veritas", cuisine: "contemporary", price: "$$" },
  { name: "Westchester", cuisine: "contemporary", price: "$$$" },
  { name: "Yellowbelly", cuisine: "seafood", price: "$$$" },
  { name: "Farmtruk", cuisine: "food-truck", price: "$" },
  { name: "Le Ono", cuisine: "polynesian", price: "$$" },

  { name: "Southwest Diner", cuisine: "breakfast", price: "$$" },

  { name: "Kain Tayo", cuisine: "filipino", price: "$$" },

  { name: "Brasserie by Niche", cuisine: "french", price: "$$" },

  { name: "Byrd & Barrel", cuisine: "fried-chicken", price: "$$" },
  { name: "Grace Meat & Three", cuisine: "southern", price: "$$" },

  { name: "Black Salt", cuisine: "indian", price: "$$" },
  { name: "The Curry Club", cuisine: "indian", price: "$" },

  { name: "Louie", cuisine: "italian", price: "$$$" },
  { name: "Noto Italian Restaurant", cuisine: "italian", price: "$$" },
  { name: "Katie’s Pizza & Pasta Osteria", cuisine: "italian", price: "$$" },
  { name: "Acero", cuisine: "italian", price: "$$" },
  { name: "Bormio", cuisine: "italian", price: "$$" },
  { name: "O+O Pizza", cuisine: "pizza", price: "$$" },
  { name: "Pastaria", cuisine: "italian", price: "$$" },
  { name: "Madrina", cuisine: "italian", price: "$$" },
  { name: "Napoli Bros. Pizza and Pasta", cuisine: "italian", price: "$$" },

  { name: "Sado", cuisine: "japanese", price: "$$$" },
  { name: "Pavilion", cuisine: "japanese", price: "$$$" },
  { name: "Nobu’s", cuisine: "japanese", price: "$$$" },
  { name: "Indo", cuisine: "japanese", price: "$$$" },
  { name: "Taberu", cuisine: "japanese", price: "$$$" },
  { name: "Menya Rui", cuisine: "ramen", price: "$$" },

  { name: "Akar", cuisine: "malaysian", price: "$$$" },

  { name: "Sides of Seoul", cuisine: "korean", price: "$$" },
  { name: "Tiny Chef", cuisine: "korean", price: "$$" },

  { name: "El Molino del Sureste", cuisine: "mexican", price: "$$" },
  { name: "Sureste", cuisine: "mexican", price: "$" },
  { name: "Nixta", cuisine: "mexican", price: "$$$" },
  { name: "Sabroso Cocina Mexicana", cuisine: "mexican", price: "$$" },
  { name: "Locoz Tacoz", cuisine: "mexican", price: "$" },
  { name: "Malinche Mexican Culinary Experience", cuisine: "mexican", price: "$$" },
  { name: "Mestiza", cuisine: "mexican", price: "$$" },

  { name: "Mazaj Mediterranean", cuisine: "middle-eastern", price: "$$" },
  { name: "Golden Chicken", cuisine: "middle-eastern", price: "$$" },

  { name: "Levels Nigerian Cuisine", cuisine: "nigerian", price: "$$" },

  { name: "Jalea", cuisine: "peruvian", price: "$$" },
  { name: "Brasas", cuisine: "peruvian", price: "$$" },

  { name: "1929 Pizza & Wine", cuisine: "pizza", price: "$$" },
  { name: "Pie Hard Pizzeria", cuisine: "pizza", price: "$$" },
  { name: "Pizza Via", cuisine: "pizza", price: "$$" },
  { name: "Pizzeria da Gloria", cuisine: "pizza", price: "$$" },

  { name: "Dressel’s Public House", cuisine: "pub", price: "$$" },

  { name: "Blues City Deli", cuisine: "sandwiches", price: "$" },
  { name: "Ed’s Delicatessen", cuisine: "sandwiches", price: "$$" },
  { name: "Gioia’s Deli", cuisine: "sandwiches", price: "$$" },

  { name: "Wright’s Tavern", cuisine: "steakhouse", price: "$$$" },

  { name: "Chiang Mai", cuisine: "thai", price: "$$" },

  { name: "Vegan Deli & Butcher", cuisine: "vegan", price: "$$" }
];

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
  resultDetails.textContent = `${restaurant.cuisine.toUpperCase()} - Price: ${restaurant.price}`;
  resultSection.classList.remove("hidden");
}

function showNoMatchMessage() {
  resultName.textContent = "No matches found.";
  resultDetails.textContent =
    "Try changing Cuisine/Price filters, or set them to 'Any'.";
  resultSection.classList.remove("hidden");
}

// ------- Button logic -------

// Pick a restaurant (filtered random)
pickButton.addEventListener("click", () => {
  const filtered = getFilteredRestaurants();

  if (filtered.length === 0) {
    showNoMatchMessage();
    return;
  }

  const restaurant = pickRandom(filtered);
  showResult(restaurant);
});

// Generate a random restaurant (ignores filters)
randomButton.addEventListener("click", () => {
  const restaurant = pickRandom(restaurants);
  showResult(restaurant);
});