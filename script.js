
// Q number 1.

// const myfunction = (str) => {
//   let obj = {};
//   let words = str.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     if (obj[word]) {
//       let oldValue = obj[word];
//       oldValue++;
//       obj[word] = oldValue;
//     } else {
//       obj[word] = 1;
//     }
//   }
//   return obj
// };
// let result = myfunction("my name is khushboo my name is");
// console.log(result);



// Q number 2.

// function getUniqueElements(arr) { 
//      return new Set(arr);
//    }
//    const result = getUniqueElements([4, 6, 5, 4, 6]);
//    console.log(result);




// Q number 3.

// function swapValues(x, y){
//      return[y, x]
// }

// let x = 5;
// let y = 10;
// [x, y] = swapValues(x, y);
// console.log(x);
// console.log(y);



// Q number 4.

// function extractElements(arr) {
//      const [first, second, ...rest] = arr;
//      const last = rest.pop();
//      return [first, second, last];
//    }
//    const arr = [1, 2, 3, 4, 5];
//    const [first, second, last] = extractElements(arr);
//    console.log(first); // output: 1
//    console.log(second); // output: 2
//    console.log(last); // output: 5
   

//    Q number 5.

function findMaxAndMin(arr){
     let max = Math.max(...arr)
     let min = Math.min(...arr)
     return(min,max)
}
const arr = [4,67,8,9,2,44,6];
const result = findMaxAndMin(arr);
console.log(result);