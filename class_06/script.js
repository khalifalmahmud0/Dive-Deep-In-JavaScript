// Array
var myArray = ["khalif", 1990, "ten", true];
console.log(myArray);
myArray.push("New Element");
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.unshift("New Element First");
console.log(myArray);
myArray.shift();
console.log(myArray);

// Object
var myObj = {
  name: "khalif",
  "last name": "AL Mahmud",
};

console.log(myObj.name);
console.log(myObj["name"]);
console.log(myObj.name + " " + myObj["last name"]);
console.log(`My Name Is ${myObj.name} ${myObj["last name"]}`);
