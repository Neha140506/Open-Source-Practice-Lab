/*
TASK:
Return a new array containing numbers greater than 10 and less than 20 and divisible by 2.

Input:
[2, 5, 8, 10, 12, 15, 19, 20, 25]

Output:
[12]
*/

const numbers = [2, 5, 8, 10, 12, 15, 19, 20, 25];

//one line solution by using filter funtion !!! #easy #no complexity

//const result = numbers.filter(num => num > 10 && num < 20 );

//longer solution using for loop
let arrays = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10 && numbers[i] < 20) {
    arrays.push(numbers[i]);
  }
}
console.log(arrays);

//depends on you wich one you want to go for!!!