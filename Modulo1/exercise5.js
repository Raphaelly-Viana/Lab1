let countries = [ "United States", "Brazil", "France", "Italy", "Spain" ];
console.log(countries[0]); // United States
console.log(countries[1]); // Brazil
console.log(countries[2]); // France
console.log(countries[3]); // Italy
console.log(countries[4]); // Spain     
// countries[1] = "Spain";
// countries[4]= "Brazil";
let temp = countries[1];
console.log(temp); // Brazil
countries [1] =countries[4]
countries[4] = temp;
console.log(countries)

countries.unshift("Germany"); // Adds "Germany" to the beginning 
console.log(countries); // ["Germany", "Spain", "France", "Italy", "Brazil"]
countries.pop(); // Removes the last element
console.log(countries); // ["Germany", "Spain", "France", "Italy"]