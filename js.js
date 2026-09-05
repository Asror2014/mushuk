// ================================
// DARK / LIGHT MODE
// ================================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }

});


if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀️";
}


// ================================
// HERO BUTTON
// ================================

const catsBtn = document.getElementById("catsBtn");

catsBtn.addEventListener("click", () => {

  document.getElementById("breeds").scrollIntoView({
    behavior: "smooth"
  });

});


// ================================
// SEARCH
// ================================

const searchInput = document.getElementById("searchInput");
const catCards = document.querySelectorAll(".cat-card");

searchInput.addEventListener("input", () => {

  const searchValue = searchInput.value.toLowerCase();

  catCards.forEach(card => {

    const catName = card
      .querySelector("h3")
      .textContent
      .toLowerCase();

    if (catName.includes(searchValue)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }

  });

});


// ================================
// FILTER
// ================================

const filters = document.querySelectorAll(".filter");

filters.forEach(filter => {

  filter.addEventListener("click", () => {

    filters.forEach(btn => {
      btn.classList.remove("active");
    });

    filter.classList.add("active");

    const category = filter.dataset.filter;

    catCards.forEach(card => {

      if (
        category === "all" ||
        card.dataset.category === category
      ) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }

    });

  });

});


// ================================
// FAVORITES
// ================================

const favoriteButtons =
  document.querySelectorAll(".favorite");

const favoriteCount =
  document.getElementById("favoriteCount");

let favorites = 0;

favoriteButtons.forEach(button => {

  button.addEventListener("click", () => {

    button.classList.toggle("active");

    if (button.classList.contains("active")) {

      button.textContent = "♥";
      favorites++;

    } else {

      button.textContent = "♡";
      favorites--;

    }

    favoriteCount.textContent = favorites;

  });

});


// ================================
// RANDOM CAT
// ================================

const randomCats = [
  {
    name: "Siam",
    icon: "🐱",
    text: "Siam mushuklari juda aqlli va faol bo‘ladi."
  },
  {
    name: "Maine Coon",
    icon: "🦁",
    text: "Maine Coon katta va juda mehribon mushuk."
  },
  {
    name: "Persian",
    icon: "😺",
    text: "Persian mushuklari uzun junlari bilan mashhur."
  },
  {
    name: "Scottish Fold",
    icon: "😸",
    text: "Scottish Fold bukilgan quloqlari bilan ajralib turadi."
  },
  {
    name: "Bengal",
    icon: "🐯",
    text: "Bengal mushuklari juda faol va o‘ynoqi."
  },
  {
    name: "Ragdoll",
    icon: "😻",
    text: "Ragdoll juda sokin va mehribon mushuk."
  }
];


const randomBtn =
  document.getElementById("randomBtn");

const randomIcon =
  document.getElementById("randomIcon");

const randomName =
  document.getElementById("randomName");

const randomText =
  document.getElementById("randomText");


randomBtn.addEventListener("click", () => {

  const randomIndex =
    Math.floor(Math.random() * randomCats.length);

  const cat = randomCats[randomIndex];

  randomIcon.textContent = cat.icon;
  randomName.textContent = cat.name;
  randomText.textContent = cat.text;

});


// ================================
// FUN FACTS
// ================================

const facts = [

  "Mushuklar kuniga taxminan 12–16 soat uxlashi mumkin.",

  "Mushuklarning mo‘ylovi ularga atrof-muhitni sezishda yordam beradi.",

  "Mushuklar juda yaxshi eshitish qobiliyatiga ega.",

  "Mushuklar baland joylarga chiqishni yaxshi ko‘radi.",

  "Ko‘pchilik mushuklar panjalari bilan yumshoq joyni bosishni yaxshi ko‘radi.",

  "Mushuklar o‘zlarini yalab tozalash uchun ko‘p vaqt sarflaydi.",

  "Mushuklar sakrashda juda kuchli orqa oyoqlaridan foydalanadi."

];


const factText =
  document.getElementById("factText");

const factBtn =
  document.getElementById("factBtn");


factBtn.addEventListener("click", () => {

  const randomIndex =
    Math.floor(Math.random() * facts.length);

  factText.textContent = facts[randomIndex];

});


// ================================
// CAT AGE CALCULATOR
// ================================

const catAge =
  document.getElementById("catAge");

const calculateBtn =
  document.getElementById("calculateBtn");

const ageResult =
  document.getElementById("ageResult");


calculateBtn.addEventListener("click", () => {

  const age = Number(catAge.value);

  if (!age || age < 1) {

    ageResult.textContent =
      "Iltimos, mushuk yoshini kiriting 🐱";

    return;
  }


  let humanAge;

  if (age === 1) {
    humanAge = 15;
  }

  else if (age === 2) {
    humanAge = 24;
  }

  else {
    humanAge = 24 + (age - 2) * 4;
  }


  ageResult.textContent =
    `Mushugingiz inson yoshida taxminan ${humanAge} yoshda 🐱`;

});
