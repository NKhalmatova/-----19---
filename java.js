function findPrimeNumbers() {
  var numberInput = parseInt(document.getElementById("numberInput").value);
  var primeNumbersList = document.getElementById("primeNumbersList");
  primeNumbersList.innerHTML = '';

  for (var i = 2; i <= numberInput; i++) {
    if (isPrime(i)) {
      var listItem = document.createElement("li");
      listItem.textContent = i;
      primeNumbersList.appendChild(listItem);
    }
  }
}

function isPrime(num) {
  for (var i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}


/*Функция calculateRectanglePerimeter() принимает два параметра: length - длину прямоугольника и width - ширину прямоугольника. 
Затем она вычисляет периметр прямоугольника по формуле 2 * (длина + ширина) и возвращает результат.*/

function calculateRectanglePerimeter(length, width) {
  return 2 * (length + width);
}


/*Функция multiplyArrayByTwo() принимает массив array и создает новый массив multipliedArray, в котором каждый элемент исходного массива 
умножается на 2. Затем функция возвращает новый массив с умноженными значениями.*/

function multiplyArrayByTwo(array) {
  var multipliedArray = [];
  for (var i = 0; i < array.length; i++) {
    multipliedArray.push(array[i] * 2);
  }
  return multipliedArray;
}

/*Функция calculateSquareArea() принимает параметр side - длину стороны квадрата. 
Затем она вычисляет площадь квадрата по формуле сторона * сторона и возвращает результат.*/

function calculateSquareArea(side) {
  return side * side;
}