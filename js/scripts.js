
function Pizza(size, totalToppings) {
  this.pizzaSize = size;
  this.totalToppings = totalToppings;
}
Pizza.prototype.priceCalculator = function() {
  if (this.size == "small") {
    if (this.totalToppings <= 1) {
      return 12;
    } else if (this.totalToppings == 2) {
      return 16;
    } else if (this.totalToppings == 3) {
      return 19;
    } else {
      return 22;
    }
  } else if (this.size == "medium") {
    if (this.totalToppings <= 1) {
      return 16;
    } else if (this.totalToppings == 2) {
      return 20;
    } else if (this.totalToppings == 3) {
      return 24;
    } else {
      return 26;
    }
  } else if (this.size == "large") {
    if (this.totalToppings <= 1) {
      return 20;
    } else if (this.totalToppings == 2) {
      return 24;
    } else if (this.totalToppings == 3) {
      return 28;
    } else {
      return 30;
    }
  }
};

$(document).ready (function() {
  $("form").submit (function(event) {

    event.preventDefault
    var size = $("input[name=size]:checked").val();
    debugger;
    var totalToppings = $("input:checkbox:checked").length;
    var pizza = new Pizza(totalToppings, size);
    var cost = pizza.priceCalculator();
    $("#total").text("$" + parseInt(cost));
  });
});
