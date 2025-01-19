// let str1 = "shivani ";
// let str2 = "sahu";

// let res ="hello " + str1 + str2;
// console.log(res);   

// replace the char

// let str = "hello"
// console.log(str.replace("h", "y"));


//  print the character

// let str = "IloveJS";
// console.log(str.charAt(5));

// let str = "IloveJs";
// console.log(str[0]);

// let str = "IloveJS";
// str = str.replace("I", "s");
// console.log(str);

// let fullName = prompt("enter your name");
// let username = "@" + fullName +  fullName.length;
// console.log(username);


// ARRAYS

// let name = ["harry", "aruna","shivani", "shivi", "shree"];
// console.log(name);
// console.log(name.length);

// let age = [20,12,23,18,19];
// console.log(age);
// console.log(age.length);

let names = ["harry", "radhe", "ruhi", "shivi","aayu"];

// for loop

for(let i=0; i < names.length; i++){
    console.log(names[i]);
}

// for of 

for (let name of names){
    console.log(name);
}

let cities = ["delhi", "pune","mumbai", "banglore","hyderabad", "noida"];

for(let city of cities){
    console.log(city.toUpperCase());
}

let marks = [85, 97,44,37,76,60];
let sum = 0;
for(let val of marks){
    sum += val;
}

let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`);

let prices = [250, 645, 300, 900, 50]
let i = 0;
for(let val of prices){
    console.log(`values at index ${i}= ${val}`);
    let offer = val / 10;
    prices[i] = prices[i] - offer;
    console.log(`value after offer = ${val}`);
}