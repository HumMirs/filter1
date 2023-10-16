const min_input = document.getElementById("min_input");
const max_input = document.getElementById("max_input");
const show_cars_btn = document.querySelector(".show-cars-btn");
const main_container = document.querySelector(".main-container");

let cars = [
  {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    price: 24999,
    img_url:
      "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019__480.jpg",
  },
  {
    make: "Honda",
    model: "Accord",
    year: 2021,
    price: 26999,
    img_url:
      "https://cdn.pixabay.com/photo/2014/09/07/22/34/car-438467__480.jpg",
  },
  {
    make: "Chevrolet",
    model: "Camaro",
    year: 2021,
    price: 32999,
    img_url: "download.jpg",
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2022,
    price: 37999,
    img_url: "mustang.jpg",
  },
  {
    make: "Tesla",
    model: "Model 3",
    year: 2022,
    price: 45999,
    img_url: "tesla.jpg",
  },
  {
    make: "BMW",
    model: "M3",
    year: 2021,
    price: 58999,
    img_url: "bmw.jpg",
  },
  {
    make: "Mercedes-Benz",
    model: "S-Class",
    year: 2022,
    price: 89999,
    img_url: "mercedes.jpg",
  },
  {
    make: "Lamborghini",
    model: "Aventador",
    year: 2022,
    price: 419999,
    img_url:
      "https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629__480.png",
  },
  {
    make: "Ferrari",
    model: "458 Italia",
    year: 2015,
    price: 319999,
    img_url: "ferrari.jpg",
  },
  {
    make: "Porsche",
    model: "911",
    year: 2021,
    price: 124999,
    img_url: "porsche.jpg",
  },
  {
    make: "Audi",
    model: "R8",
    year: 2022,
    price: 169999,
    img_url: "audi.jpg",
  },
];

show_cars_btn.onclick = () => {
  main_container.innerHTML = "";
  for (i = 0; i < cars.length; i++) {
    if (cars[i].price >= min_input.value && cars[i].price <= max_input.value) {
      let inner_container = document.createElement("div");
      inner_container.className = "inner-container";

      let img = document.createElement("img");
      img.src = cars[i].img_url;

      let h2 = document.createElement("h2");
      h2.innerText = "Make: " + cars[i].make;

      let h3 = document.createElement("h3");
      h3.innerText = "Model: " + cars[i].model;

      let p1 = document.createElement("p");
      p1.innerText = "Year: " + cars[i].year;
      p1.style.fontWeight = "bold";
      p1.style.color = "green";

      let p2 = document.createElement("p");
      p2.innerText = "Price: " + cars[i].price;
      p2.style.fontWeight = "bold";

      main_container.appendChild(inner_container);
      inner_container.appendChild(img);
      inner_container.appendChild(h2);
      inner_container.appendChild(h3);
      inner_container.appendChild(p1);
      inner_container.appendChild(p2);
    }
  }
};
