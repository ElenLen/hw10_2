// Создайте функцию, которая выведет сообщение в консоли «Я учу JavaScript!».
function myLern() {
  console.log('Я учу JavaScript!');
}
myLern();

// получить элемент
const image = document.getElementById('cat1');
console.log(image);

// функция
function previous() {
  image.src = "./assets/style/img/cat1.jpg"
}

function next() {
  image.src = "./assets/style/img/cat2.jpg"
}
console.log(next()) ;
console.log(previous());