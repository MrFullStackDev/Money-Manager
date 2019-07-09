

$("button").click(calc)

function calc() {
/* collects essential income data from forms and parses to integer*/
  rate = document.getElementById("rate").value;
  rate = parseFloat(rate);
  income = document.getElementById("income").value;

  income = parseInt(income);
  rent = document.getElementById("rent").value;

  rent = parseInt(rent);
  groceries = document.getElementById("groceries").value;

  groceries = parseInt(groceries);
  insurance = document.getElementById("insurance").value;

  insurance = parseInt(insurance);
  auto = document.getElementById("auto").value;
  auto = parseInt(auto);
  care = document.getElementById("care").value;
  care = parseInt(care);

/*calculates essential expenses*/
  essential = rent + groceries + insurance + auto + care;

/*collects optional income data from form and parses values as integers*/
  food = document.getElementById("food").value;
  food = parseInt(food);
  shopping = document.getElementById("shopping").value;
  shopping = parseInt(shopping);
  entertainment = document.getElementById("entertainment").value;
  entertainment = parseInt(entertainment);
  others = document.getElementById("others").value;
  others = parseInt(others);

/*calculates optional expenses*/
  optional = food + shopping + entertainment;

/*calculates total expenses*/
  spending = essential + optional;
  
/*calculates amount left over after expenses*/
  result = income - essential - optional;

/*calculates desired savings amount based on entered rate of savings*/
  savings = (income * rate);

/*removes instructions from results div to prepare for results*/
  $(".results").empty();

/*tells user to enter information in form if no info entered*/
  if (result === 0) {
    $(".results").append('<p> Please enter your information using the form.</p>');
  }

/*displays results if essential spending is more than their income*/
  else if (essential > income) {
    $(".results").append('<p>Your essential expenses exceed your monthly income. You should look at increasing your income or making changes to your lifestyle.</p>');
  }

/*displays reults if total expenses are more than income*/
  else if (spending > income) {
    $(".results").append('<p>You have enough income to meet your basic spending, but your optional expenses put you over budget. You should consider reducing your spending on things like restaurants, shopping, and entertainment.');
  }

/*displays results if spending is less than income, differentiating whether savings rate is at 20 percent*/
  else {

/*displays results if spending is less than income and they have enough to save 20 percent of income*/
    if (result > savings) {
     $(".results").append(
      '<p> After your expenses you have ₹' + result + ' left in your budget. You should be setting aside ₹' + savings +' of this as savings.</p>');
    }

/*displays results if spending is less than income but they do not have enough left over to save 20 percent of income*/
    else {
      $(".results").append('<p> After your expenses you have ₹' + result + ' left in your budget, but you should be saving ₹' + savings + ' each month. Try to reduce optional expenses.</p>');
    }
  }
}