// Q1
function reverseString(str) {
    let reversed = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    
    return reversed;
}

console.log(reverseString("hello"));


// Q2
function countVowels(str) {
    let count = 0;
    let vowels = "aeiou";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("hello"));


// Q3
function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("madam"));


// Q4
function findLongestword (sentence) {
    let words = sentence.split(" ");

    let longest = words[0];

for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) { 
        longest = words[i];
    }
}
return longest; 
}I
console.log(findLongestword("I love solving algorithms"));





//part2. Q1
function gradeFeedback(grade) {

    switch (grade) {

        case "A":
            return "Excellent";

        case "B":
            return "Good job";

        case "C":
            return "You passed";

        case "D":
            return "Need improvement";

        case "F":
            return "Failed";

        default:
            return "Invalid grade";
    }

}

console.log(gradeFeedback("B"));




//part2. Q2
function countCharacters(str) {
    var vowels = 0;
    var digits = 0;
    var spaces = 0;
    var others = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();

        switch (true) {
            case "aeiou".includes(char):
                vowels++;
                break;
            case char >= "0" && char <= "9":
                digits++;
                break;
            case char === " ":
                spaces++;
                break;
            default:
                others++;
        }
    }

    return {
        vowels: vowels,
        digits: digits,
        spaces: spaces,
        others: others
    };
}

console.log(countCharacters("Hi 123!"));