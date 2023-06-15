let counter = 1;
let line = "";
console.log(".....^.^.....");
while (counter <= 10) {
  line += "(*^*)";
  console.log(line);
  counter++;
}
let n = 10;
let newLine = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i; j++) {
    newLine += "(*^*)";
  }
  newLine += "\n";
}
console.log(newLine);
