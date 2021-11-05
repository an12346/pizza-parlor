//Business Logic

function Pizza(size, toppings) {
    this.size = size 
    this.toppings = [toppings];
    this.cost = 0;
};

Pizza.prototype.calculateCost = function(size, toppings) {
      if (this.size === "large") {
        this.cost += 12;
      } else if (this.size === "small") {
        this.cost += 7;
      } if (this.toppings === ["pepperoni", "sausage"]) {
        this.cost += 3;
      } else if (this.toppings === ["olives", "mushrooms"]) {
        this.cost += 2;
      }
};












//Objects:
  //Constuctor for Pizza
    //1. Property for size;
    //2. Property for toppings: [];

//Functions:
  //1. Function to calculate price
    //-Input for size selection
    //-Input for toppings selection


















//UI Logic