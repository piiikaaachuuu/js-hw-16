const numberOfCategories = document.querySelectorAll(".item");
console.log(`У списку ${numberOfCategories.length} категорії.`);

const categoriesName = [...numberOfCategories]
  .map(
    (categories) => `Категорія: ${categories.children[0].textContent}
  Кількість елементів: ${categories.children[1].children.length}`
  )
  .join(`\n\n`);
console.log(categoriesName);
