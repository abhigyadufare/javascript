// Convert Miles << >> Kilometers
let miles = 24;
let kilometers = 40;
let number = 1.609344;
let kilometersToMiles = kilometers / number;
let milesToKilometers = miles * number;
console.log("Distance conversions");
console.log("-----------------------");
console.log(kilometers + " kilometers are:");
console.log(kilometersToMiles + " miles");
console.log("----");
console.log(miles + " miles are:");
console.log(milesToKilometers + " kilometers");
console.log("\n");

// Convert Celsius << >> Fahrenheit
let celsius = 5;
let fahrenheit = 41;
let celsiusToFahrenheit = (celsius * 9 / 5) + 32;
let fahrenheitToCelsius = (fahrenheit - 32) * 5 / 9;
console.log("Temperature conversions");
console.log("-----------------------");
console.log(fahrenheit + " degrees Fahrenheit are:");
console.log(fahrenheitToCelsius + " degrees Celsius");
console.log("----");
console.log(celsius + " degrees Celsius are:");
console.log(celsiusToFahrenheit + " degrees Fahrenheit");
console.log("\n");

// Convert Pounds << >> Grams
let grams = 250;
let pounds = 2.5;
const weightConverter = 0.00220462;
let gramsToPounds = grams * weightConverter;
let poundsToGrams = pounds / weightConverter;
console.log("Weight conversions");
console.log("-----------------------");
console.log(grams + " grams are:");
console.log(gramsToPounds + " pounds");
console.log("----");
console.log(pounds + " pounds are:");
console.log(poundsToGrams + " grams");
console.log("\n");

// Convert Gallons to Grams
let gallons = 2200;
let liters = 43000;
const literPerGallon = 3.78541;
const litersToGallons = liters / literPerGallon;
const gallonsToLiters = gallons * literPerGallon;
console.log("Quantity conversions");
console.log("-----------------------");
console.log(gallons + " gallons are:");
console.log(gallonsToLiters + " liters");
console.log("----");
console.log(liters + " liters are:");
console.log(litersToGallons + " gallons");