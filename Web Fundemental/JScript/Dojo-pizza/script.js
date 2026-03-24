ل// Main function (pizza factory)
function pizzaOven(crust, sauce, cheeses, toppings) {
    return {
        crust: crust,
        sauce: sauce,
        cheeses: cheeses,
        toppings: toppings
    };
}

// Required pizzas
var p1 = pizzaOven(
    "deep dish",
    "traditional",
    ["mozzarella"],
    ["pepperoni", "sausage"]
);

var p2 = pizzaOven(
    "hand tossed",
    "marinara",
    ["mozzarella", "feta"],
    ["mushrooms", "olives", "onions"]
);

// Additional pizzas
var p3 = pizzaOven(
    "thin crust",
    "bbq",
    ["cheddar"],
    ["chicken", "corn"]
);

var p4 = pizzaOven(
    "stuffed crust",
    "alfredo",
    ["parmesan"],
    ["spinach", "mushrooms"]
);

// Bonus: Random pizza generator
function randomPizza() {
    var crusts = ["deep dish", "hand tossed", "thin crust"];
    var sauces = ["traditional", "marinara", "bbq"];
    var cheeses = ["mozzarella", "feta", "cheddar", "parmesan"];
    var toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions"];

    function randomItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    return pizzaOven(
        randomItem(crusts),
        randomItem(sauces),
        [randomItem(cheeses)],
        [randomItem(toppings), randomItem(toppings)]
    );
}

// Output results
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(randomPizza());