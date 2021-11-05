# Pizza Parlor Website

#### By: Anna Pittman

#### A website for a pizza parlor, that has the user choose a size and their choice of toppings. A price is then generated based on their selection.

## Specs

Describe: Pizza();
Test: "It will create a new pizza order with one topping and size property"
Code: pizzaOrder = new Pizza ("small", "pepperoni");
Expected Output: Pizza {size: "small", toppings: "pepperoni"}

Describe: calculateCost();
Test: "It will generate a price for the pizza, based on a user's size selection"
Code: pizzaOrder = new Pizza ("small", "pepperoni");
Expected Output: Pizza {"small", "pepperoni", cost: 7}

Test: "It will generate a price for the pizza, based on a user's size and toppings selection"
Code: pizzaOrder = new Pizza ("small", "pepperoni");
Expected Output: Pizza {size: "small", toppings: "pepperoni", cost: 10}

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description

This is a website for a pizza company. The website contains a menu with the available toppings and sizes listed. As well as the the prices that are associated with each option. Once a user starts an order, they will be able to select their choice of a "small", "medium", or "large" pizza. Then, they can choose their choice of toppings from a selection box. When the user clicks the "Submit Order" button, a price, generated from their pizza selection, will appear at the bottom of the page.

## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to the top level of the directory: pizza-parlor
* Open index.html

## Known Bugs

* No known bugs

## License

[GitHub Repository](https://github.com/an12346/pizza-parlor)

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021 Anna Pittman





