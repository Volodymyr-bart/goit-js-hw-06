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
// let elementLi = document.createElement("li");
// elementLi.classList.add('item');
// for (let key of ingredients) {
//   let elementLi = document.createElement("li");
//   elementLi.classList.add('item');
//   elementUl.append(elementLi);
//   elementLi.textContent = key;  
// }

// console.log(elementUl);



// const makeElementLi = (ingredients) => {
//    let elementLi = document.createElement("li");
//    elementLi.classList.add('item');
//   // elementUl.append(elementLi);
//   // ingredients.forEach((element) => { elementLi.textContent = element });  
//   ingredients.map(ingredient => elementLi.textContent = ingredient); 
//   // console.log(ingr);
//   return elementLi;
// }
// let element = ingredients.map(makeElementLi)
// console.log(element);

//  elementUl.append(makeElementLi(ingredients)) 
// elementUl.append(ingredients.map(makeElementLi));
// console.log(elementUl);
//  console.log(ingredients.map(makeElementLi));
