const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

let list = document.getElementById("ingredients");
let food = ingredients.map((ingredient) => {
  let elementLi = document.createElement("li");
  elementLi.textContent = ingredient;
  elementLi.classList.add("food");
  return elementLi;
});

list.append(...food);
