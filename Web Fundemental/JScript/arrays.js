//1. Accessing Elements

let colors = ["red", "blue", "green", "yellow", "purple"];

console.log(colors[0]); // first element

console.log(colors[colors.length - 1]); // last element

console.log(colors[1]); // second position

// update third element
colors[2] = "orange";
console.log(colors);


//2. Traversing an Array

let numbers = [10, 20, 30, 40, 50];

// print using for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// reverse order
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}


//3. Searching in an Array

let numbers2 = [5, 10, 15, 20, 25];
let found = false;

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] === 25) {
        console.log("Found at position " + i);
        found = true;
        break;
    }
}

if (!found) {
    console.log("Not Found");
}


//4. Sorting an Array

let scores = [50, 20, 70, 10, 40];


let asc = [...scores].sort((a, b) => a - b);
console.log("Ascending:", asc); // ascending

let desc = [...scores].sort((a, b) => b - a);
console.log("Descending:", desc); // descending

// names sorting
let names = ["Shatha", "Sara", "Lina", "Sami", "Dalia"];
names.sort();
console.log(names);


//5. Inserting Elements

let animals = ["dog", "cat", "rabbit"];

animals.push("elephant"); // add elephant to end

animals.unshift("lion"); // add lion to beginning

animals.splice(2, 0, "tiger");

console.log(animals); // insert tiger between dog and cat


//6. Deleting Elements

let fruits = ["apple", "banana", "cherry", "date"];


fruits.shift(); // remove first
fruits.pop(); // remove last
// remove banana without index
let index = fruits.indexOf("banana");
if (index !== -1) {
    fruits.splice(index, 1);
}

console.log(fruits);


//7. Combining Arrays

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let combined = array1.concat(array2);

console.log(combined);


//8. Splitting an Array

let items = ["a", "b", "c", "d", "e"];

let firstPart = items.slice(0, 3);
let secondPart = items.slice(3);

console.log(firstPart);
console.log(secondPart);


//9. Filtering Elements

let numbers3 = [1, 5, 10, 15, 20, 25, 30];

let filtered = numbers3.filter(num => num > 15);

console.log(filtered);


//10. Advanced Challenge

let arr = [1, 2, 2, 3, 4, 4, 5];

let unique = [...new Set(arr)];

console.log(unique);



//Bonus Challenge

let a = [1, 3, 5];
let b = [2, 4, 6];

let merged = [];
let i = 0;
let j = 0;

while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
        merged.push(a[i]);
        i++;
    } else {
        merged.push(b[j]);
        j++;
    }
}

while (i < a.length) {
    merged.push(a[i]);
    i++;
}

while (j < b.length) {
    merged.push(b[j]);
    j++;
}

console.log(merged);