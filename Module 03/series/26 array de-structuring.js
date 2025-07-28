var district = ["Dhaka", "Chittagong", "Barisal"];

var [a, ...b] = district;
var [country1, ,country1] = district;
var [, ,country4] = district;

console.log(a + " "+b)
console.log(country1)
console.log(country4)