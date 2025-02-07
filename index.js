function sum(x, y) {
  return x + y;
}

sum(10, 4);
sum(2, 3);

function print() {
  let a = 10;
  let b = 20;
  console.log(sum(a, b));
}
print();

let originalArr = [1, 2, 3, 4];
let newArr = [];
// for (var i = 0; i < originalArr.length; i++) {
//   newArr.push(originalArr[i] + 5);
// }
// return newArr;

let newArray = originalArr.map((ele) => ele + 5);
