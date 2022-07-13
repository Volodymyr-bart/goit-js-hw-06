/*
Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

<ul class="gallery"></ul>
Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
*/

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');
const makeImage = ({ url, alt }) => {
  const imageEl = document.createElement('img');
  imageEl.src = url;
  imageEl.alt = alt;
  imageEl.width = 400;
  return imageEl
}

const elements = images.map(makeImage);
console.log(elements);
galleryList.append(...elements);

// console.log(makeImage(...images));

// const elements = images.map(image => {
//   const imageEl = document.createElement('img');
//   imageEl.src = image.src;
//   console.log(imageEl.src);
//   imageEl.alt = image.alt;
//   console.log(imageEl.alt);
//   return imageEl
// });
// console.log(elements);


// console.log(galleryList);


// galleryList.appendChild(imageEl)