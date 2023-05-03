# Критерії прийому

- Створено репозиторій `js-hw-07`
- При здачі домашньої роботи є два посилання: на вихідні файли і робочу сторінку
  на GitHub pages
- Завдання виконується строго по ТЗ
- Кожне завдання виконано в окремому файлі з ім'ям `task-номер_завдання.js`.
- При відвідуванні робочої сторінки (GitHub pages) завдання, в консолі немає
  помилок і попереджень
- Імена змінних та функцій зрозумілі, описові
- Код відформатований за допомогою Prettier

## Стартові файли

В папці [src](./src) ти знайдеш стартові файли проєкту з базовою розміткою і
підключеними файлами скриптів для кожного завдання.

## Завдання 1

В HTML є список категорій `ul#categories`.

```html
<ul id="categories">
  <li class="item">
    <h2>Тварини</h2>

    <ul>
      <li>Кіт</li>
      <li>Хом'як</li>
      <li>Кінь</li>
      <li>Папуга</li>
    </ul>
  </li>
  <li class="item">
    <h2>Продукти</h2>

    <ul>
      <li>Хліб</li>
      <li>Петрушка</li>
      <li>Сир</li>
    </ul>
  </li>
  <li class="item">
    <h2>Технології</h2>

    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node</li>
    </ul>
  </li>
</ul>
```

Напиши скрипт, який виконає наступні операції.

Порахує і виведе в консоль кількість категорій в `ul#categories`, тобто
елементів `li.item`. Вийде `'У списку 3 категорії.'`.

Для кожного елемента `li.item` в списку `ul#categories`, знайде і виведе в
консоль текст заголовка елемента (тега h2) і кількість елементів в категорії
(всіх вкладених в нього елементів `li`).

Наприклад, для першої категорії вийде:

- Категорія: Тварини
- Кількість елементів: 4

## Завдання 2

В HTML є пустий список `ul#ingredients`.

```html
<ul id="ingredients"></ul>
```

В JS є масив рядків.

```js
const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
```

Напиши скрипт, який для кожного елемента масиву `ingredients` створить окремий
`li`, після чого вставить всі `li` за одну операцію в список `ul.ingredients`.
Для створення DOM-вузлів використовуй `document.createElement()`.