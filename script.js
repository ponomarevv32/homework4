// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число


//   for (let index = 0 ; index <= 10 ; index++) {
//     if ( index === 0) {
//       console.log(`${index} - это ноль`)
//     } else if (index % 2 === 0) {
//       console.log(`${index} - четное число`)
//     } else {
//       console.log(`${index} - нечетное число`)
//     } 
//   }


//   Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]


// array = [1, 2, 3, 4, 5, 6, 7] 
// console.log(array.splice(3,2))



// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// let sum = 0;
// let array = [];
// let min = 10;
// let check = false;
// for (let index = 0; index <= 5; index++) {
//   array[index] = Math.floor( Math.random() * 10) ; 
//   sum += array[index];
//   if (min > array[index]) {
//     min = array[index]
//   }
//   if (array[index] === 3) {
//    check = true;
//   } 
// }
// console.log(array)
// console.log(sum)
// console.log(min)
// if (check == true) {
// console.log(`есть число 3`)
// } else { 
// console.log(`нет числа 3`)
// }



// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx



for (let i = 0; i < 20; i++) {
  let krest = "";
    for (let j = 0; j < i; j++) {
      krest += "X";  
    }
  console.log(krest);
}
  

  
