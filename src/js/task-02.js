/*
1) Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
2) Додасть назву інгредієнта як його текстовий вміст.
3) Додасть елементу клас item.
4) Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
*/
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const elementUl = document.querySelector('#ingredients');
let elementLi = document.createElement("li");


console.log(elementUl);


// for (let i = 0; i < ingredients.length; i+=1) {
  
//   elementLi.textContent = 'lkjl'
//   elementUl.append(elementLi[i].textContent = ingredients[i]);
  
// }
 
