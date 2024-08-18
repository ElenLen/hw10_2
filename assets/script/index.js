// Создайте функцию, которая выведет сообщение в консоли «Я учу JavaScript!».
const myLern = () => console.log("Я учу JavaScript!");
myLern();

// получить элемент картинки
const image = document.getElementById("cat");
console.log(image);

// функция
const previous = () => (image.src = "./assets/style/img/cat1.jpg");
console.log(previous());

const next = () => (image.src = "./assets/style/img/cat2.jpg");
console.log(next());
