const budget = 2500;
const savingPriority = "low";
const rent = 800;
const utilities = 200;
const newLaptop = 1200;
const totalCosts = rent + utilities;
const budgetLeft = budget - totalCosts;
const buyLaptop = budgetLeft >= newLaptop;
console.log("New Laptop Within Budget: ");
console.log(buyLaptop);
console.log("Postpone Purchase and Save Instead:");
console.log(savingPriority === "high");
const savings = budgetLeft - buyLaptop;
if (savings < 200) {
  console.log("You should wait as there will be less saving ");
} else if (savings >= 200) {
  console.log("There still be savings so go ahead and buy your new Laptop");
}