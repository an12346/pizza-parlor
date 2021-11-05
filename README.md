# Pizza Parlor Website

#### By: Anna Pittman

#### A website for a pizza parlor, that has the user choose a size and their choice of toppings. A price is then generated based on their selection.

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description

This is a programming language suggester, which has the user answer five questions, click the "Results" button and then the program displays which language the user should learn, based on their answers. The possible language types are C#, Ruby, JavaScript and Python. Select boxes are used to display answer choices. 

## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to the top level of the directory: pizza-parlor
* Open index.html

## Known Bugs

* No known bugs

## License

[GitHub Repository](https://github.com/an12346/programming-language-suggester)

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021 Anna Pittman




## Specs

Describe: Pizza ();
Test: "It will create a new pizza order with one topping and size property"
Code: pizzaOrder = new Pizza ("small", ["pepperoni"]);
Expected Output: Pizza {size: "small", toppings: ["pepperoni"]}


Describe: caluculateCost(size);
Test: "It will generate a price for the pizza, based on a user's size selection"
Code: pizzaOrder = new Pizza ("small", ["pepperoni"]);
Expected Output: Pizza ("small", ["pepperoni"], cost: 7);


Describe: calculateCost(size, toppings)
Test: "It will generate a price for the pizza, based on a user's size and toppings selection"
Code: pizzaOrder = new Pizza ("small", ["pepperoni"]);
Expected Output: pizzaOrder = Pizza ("small", ["pepperoni"], cost: 10);




