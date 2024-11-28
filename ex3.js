//shady and Saed

let arr = [1, 4, 7, 6, 8, 56, 0, 0, 76];
let counter = 0;
for (let i = 0; i < arr.length; i++)
   {
  arr[i] == 0 && counter++;
   }

console.log("מספר האפסים במערך הוא :" + counter);
