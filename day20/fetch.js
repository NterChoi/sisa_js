const loader = document.querySelector(".loader");
const buttons = document.querySelectorAll("button");
const item = document.querySelector(".item");

const products = buttons[0];
const recipes = buttons[1];
const users = buttons[2];

const clear = () => {
  item.innerHTML = "";
};

const showSpinner = () => {
  loader.classList.remove("hidden");
};

const hiddenSpinner = () => {
  loader.classList.add("hidden");
};

const makeCard = () => {};

products.addEventListener("click", () => {
  clear();
  removeHidden();
  fetch("https://dummyjson.com/products")
    .then((v) => v.json())
    .then((v) => {
      const newArray = v.products.map((x) => {
        return { title: x.title, thumbnail: x.thumbnail, price: x.price };
      });
      newArray.forEach((element) => {
        item.insertAdjacentHTML(
          "beforeend",
          `<article class="product-card">
    <img
      class="product-card__thumbnail"
      src="${element.thumbnail}"
      alt="${element.title}"
    />

    <div class="product-card__info">
      <h2 class="product-card__title">${element.title}</h2>
      <p class="product-card__price">${element.price}</p>
    </div>
  </article>`,
        );
      });
      hiddenSpinner();
    });
});

recipes.addEventListener("click", () => {
  clear();
  removeHidden();
  fetch("https://dummyjson.com/recipes")
    .then((v) => v.json())
    .then((v) => {
      const newArray = v.recipes.map((x) => {
        return { name: x.name, image: x.image, rating: x.rating };
      });
      newArray.forEach((element) => {
        item.insertAdjacentHTML(
          "beforeend",
          `<article class="product-card">
    <img
      class="product-card__thumbnail"
      src="${element.image}"
      alt="${element.name}"
    />

    <div class="product-card__info">
      <h2 class="product-card__title">${element.name}</h2>
      <p class="product-card__price">${element.rating}</p>
    </div>
  </article>`,
        );
      });
      hiddenSpinner();
    });
});

users.addEventListener("click", () => {
  clear();
  removeHidden();
  fetch("https://dummyjson.com/users")
    .then((v) => v.json())
    .then((v) => {
      const newArray = v.users.map((x) => {
        return {
          lastName: x.lastName,
          image: x.image,
          university: x.university,
        };
      });
      newArray.forEach((element) => {
        item.insertAdjacentHTML(
          "beforeend",
          `<article class="product-card">
    <img
      class="product-card__thumbnail"
      src="${element.image}"
      alt="${element.lastName}"
    />

    <div class="product-card__info">
      <h2 class="product-card__title">${element.lastName}</h2>
      <p class="product-card__price">${element.university}</p>
    </div>
  </article>`,
        );
      });
      hiddenSpinner();
    });
});
