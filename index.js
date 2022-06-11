// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
/*
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = arr1.concat(arr2);
console.log(arr3);
*/

// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
/*
const arr = [1,2,3];

const reversedArr = arr.reverse();
console.log(reversedArr);
*/

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
/*
let arr = [1,2,3];

arr.push(4,5,6);
console.log(arr);
*/

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
/*
let arr = [1, 2, 3];

arr.unshift(4, 5, 6);
console.log(arr);
*/

// 5. Дан массив ['js', 'css', ‘html']. Выведите на экран первый элемент и удалите его.
/*
const arr = ['js', 'css', 'html'];
const firstElementArray = arr.shift();
console.log(firstElementArray);
*/

// 6. Дан массив ['js', 'css', ‘html']. Выведите на экран последний элемент и удалите его.
/*
const arr = ["js", "css", "html"];
const lastElementArray = arr.pop();
console.log(lastElementArray);
*/

// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
/*
const arr = [1,2,3,4,5];
const newArr = arr.slice(0,3);
console.log(newArr);
*/

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
/*
const arr = [1, 2, 3, 4, 5];
const newArr = arr.slice(-2);
console.log(newArr);
*/

// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
/*
const arr = [1,2,3,4,5];
arr.splice(1,2);
console.log(arr);
*/

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
/*
const arr = [1, 2, 3, 4, 5];
const newArr = arr.splice(1, 3);
console.log(newArr);
*/

// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
/*
const arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');
console.log(arr);
*/

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
/*
const arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, "a", "b");
arr.splice(5, 0, "c");
console.log(arr);
*/

// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
/*
const arr = [3,4,1,2,7];
console.log(arr.sort());
*/

// 14. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
/*
const object = {
  js: "test",
  jq: "hello",
  css: "world",
};

console.log(Object.keys(object));
*/
