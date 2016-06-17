
function Pizza (size, toppings) {
  this.pizzSize =size,
  this.toppings = [],
  this.cost = this.priceCalculator()
};

// Pizza.prototype.addTopping = function(topping) {
//
//        this.toppings.push($(this).val());
//      });
// };

Pizza.prototype.priceCalculator = function () {
  var priceLarge = 12;
  var priceMedium = 11;
  var priceSmall = 10;

  if (this.pizzaSize === "large" && this.toppings === cheese ) {
    this.cost = priceLarge += 1;
  }
  if (this.pizzaSize === "medium" && this.toppings === cheese){
    this.cost = priceMedium += 1;
  }
  if (this.pizzaSize === "small" && this.toppings === cheese) {
    this.cost = priceSmall += 1;
  }
  if (this.pizzaSize === "large" && this.toppings === meat ) {
    this.cost = priceLarge += 3;
  }
  if (this.pizzaSize === "medium" && this.toppings === meat){
    this.cost = priceMedium += 3;
  }
  if (this.pizzaSize === "small" && this.toppings === meat) {
    this.cost = priceSmall += 3;
  }
  if (this.pizzaSize === "large" && this.toppings === vegetable) {
    this.cost = priceLarge += 2;
  }
  if (this.pizzaSize === "medium" && this.toppings === vegetable){
    this.cost = priceMedium += 2;
  }
  if (this.pizzaSize === "small" && this.toppings === vegetable) {
    this.cost = priceSmall += 2;
  }
};








$(document).ready(function() {
  $("form").submit (function(event) {
    event.preventDefault;
    var inputtedPizzaSize = $("input:radio[name=size]:checked").val();
    debugger;
    var inputtedPizzaToppings = [];
    $("input[type='checkbox']:checked").each(function() {
      (inputtedPizzaToppings).push(this.value);
       debugger;
    });



    var newPizza = new Pizza(size, toppings);
    newPizza.priceCalculator();
  })
});
