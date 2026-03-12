// 1. Print Numbers
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 2. Reverse Counting
for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// 3. Even Numbers 
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// 4. Odd Numbers
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


// 5. Sum of Numbers
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("Sum =", sum);


// 6. FizzBuzz 
for (let i = 1; i <= 30; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }

    else if (i % 3 === 0) {
        console.log("Fizz");
    }

    else if (i % 5 === 0) {
        console.log("Buzz");
    }

    else {
        console.log(i);
    }

}