function Pizza(size, toppings) {
  this.size = size 
  this.toppings = toppings;
  this.cost = 0;
};

Pizza.prototype.calculateCost = function(size, toppings) {
  if (this.size === "1") {
    this.cost+=7;
  } else if (this.size === "2") {
    this.cost+=10;
  } else if (this.size === "3") {
    this.cost+=12;
  } if (this.toppings === "4") {
    this.cost+=4;
  } else if (this.toppings === "5") {
    this.cost+=3;
  } else if (this.toppings === "6") {
    this.cost+=2;
  }
}

$(document).ready(function() {
  $("form#order-selection").submit(function(event) {
    event.preventDefault();
    const size = ($("#size").val());
    const toppings = ($("#toppings").val());
    let newPizza = new Pizza(size, toppings);
    newPizza.calculateCost(size, toppings);
    $(".price").text(newPizza.cost);
    $("#price-output").show()
  });
});