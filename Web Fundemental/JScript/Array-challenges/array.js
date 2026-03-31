// 1. Always Hungry
function alwaysHungry(arr) {
    let found = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "food") {
            console.log("yummy");
            found = true;
        }
    }

    if (!found) {
        console.log("I'm hungry");
    }
}

//2. High Pass Filter
function highPass(arr, cutoff) {
    let filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

//3. Better Than Average
function betterThanAverage(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let avg = sum / arr.length;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            count++;
        }
    }

    return count;
}

//4. Array Reverse
function reverse(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }

    return arr;
}

//5. Fibonacci Array
function fibonacciArray(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    let fibArr = [0, 1];

    for (let i = 2; i < n; i++) {
        fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }

    return fibArr;
}