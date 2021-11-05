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


1. Write out plan for business logic
2. Create every function/object needed
3. Test every function
4. Write out plan for html
5. write out plan for UI logic
6. Write out readme