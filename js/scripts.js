
function Pizza(size, totalToppings) {
  this.pizzaSize = size;
  this.totalToppings = totalToppings;
}
Pizza.prototype.priceCalculator = function() {
  if (this.pizzaSize === "small") {
    if (this.totalToppings <= 1) {
      return 12;
    } else if (this.totalToppings === 2) {
      return 16;
    } else if (this.totalToppings === 3) {
      return 19;
    } else {
      return 22;
    }
  } else if (this.pizzaSize === "medium") {
    if (this.totalToppings <= 1) {
      return 16;
    } else if (this.totalToppings === 2) {
      return 20;
    } else if (this.totalToppings === 3) {
      return 24;
    } else {
      return 26;
    }
  } else if (this.pizzaSize === "large") {
    if (this.totalToppings <= 1) {
      return 20;
    } else if (this.totalToppings == 2) {
      return 24;
    } else if (this.totalToppings === 3) {
      return 28;
    } else {
      return 30;
    }
  }
};

$(document).ready (function() {
  $("#order-form").submit(function(event) {
    event.preventDefault();
    // clearOrder();
    var size = $("input[name=size]:checked").val();
    var totalToppings = $("input:checkbox:checked").length;
    var pizza = new Pizza(size, totalToppings);
    var cost = pizza.priceCalculator();
    $("#total").show();
    // debugger;
    $("#show-cost").text(cost);
    $("#new-order").click(function() {
      $("input:radio").attr("checked", false);
      $("input:checkbox").attr("checked", false);
      $("#total").hide();
    });


  });
});
