# St-Louis-Restaurant-Generator
# St. Louis Restaurant Adventure

A mobile-first, game show aesthetic web app that helps users choose a restaurant in St. Louis by filtering cuisine and budget or by throwing it up to the hands of fate and hitting the random restaurant generator button.
---

## Demo

`https://st-louis-restaurant-picker.netlify.app`

---

## Features

- **Pick a Restaurant** based on:
  - Cuisine
  - Price range (`$`, `$$`, `$$$`)
- **Generate a Random Restaurant** (ignores filters for surprise picks)

## Built With
- **HTML5**
- **CSS3**
  - Custom properties (CSS variables)
  - Flexbox
  - Media queries for responsive design
- **Vanilla JavaScript**
  - Array methods (`map`, `filter`)
  - Event listeners
  - DOM manipulation
- **Netlify** (deployment)
---

## Design Decisions
### Why no backend?
This project is intentionally frontend-only to focus on:
- UI/UX
- state handling with plain JavaScript
- clean data modeling

The data is stored locally in JavaScript and can easily be replaced later with an API or database.

---

### Mobile-first approach
The app is designed primarily for phones:
- On small screens, the app fills the viewport
- Background decorations are removed for clarity
- Layout shifts from “card” to “full-screen app”

Desktop styling exists mainly to preview the app comfortably during development.

---

## Project Structure

```text
/
├── index.html
├── styles.css
├── restaurantgenerator.js
└── README.md
