//1. Display odd numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
    console.log(i);
    }
}

//2. Decreasing multiples of 3 from 100 to 0
for (let i = 100; i >= 0; i--) {
    if (i % 3 === 0) {
    console.log(i);
    }
}

//3. Print the sequence: 4, 2.5, 1, -0.5, -2, -3.5
for (let i = 4; i >= -3.5; i -= 1.5) {
    console.log(i);
}

//4. Sigma (sum from 1 to 100)
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum);


//5. Factorial-style multiplication from 1 to 12
let product = 1;

for (let i = 1; i <= 12; i++) {
  product *= i;
}

console.log(product);

