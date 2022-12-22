//  1.	Create a function that takes two numbers as arguments and returns their sum.
function addTwoValues(a, b) {
    var sum = a + b;
    console.log("Addition of", a, " and ", b, " is ", sum);
    return sum
}
addTwoValues(5, 5);

// 2.	Write a function that takes an integer minutes and converts it to seconds.
function convertSeconds(minutes) {
    var seconds = minutes * 60;
    console.log(minutes, " minites is equal to ", seconds, " seconds.");
}
convertSeconds(5);

// 3.	Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function incrementNumber(number) {
    var incNum = number + 1;
    console.log("Incremanted number is ", incNum);
}
incrementNumber(9);

// 4.	Create a function that takes the age in years and returns the age in days.
function ageDays(ageYears) {
    var days = ageYears * 365;
    console.log(ageYears, " years is equal to ", days, " days.")
}
ageDays(12);

// 5.	Create a function that takes voltage and current and returns the calculated power.
function powerCalculation(voltage, current) {
    var totalPower = voltage * current;
    console.log("Power = ", totalPower)
}
powerCalculation(5, 4)

// 6.	Write a function that returns the string "something" joined with a space " " and the given argument a.
function somethingString(a) {
    return console.log("something", " ", a);
}
somethingString("special")

// 7.	Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
function checkNumberIsTen(a, b) {
    if (a == 10 || b == 10 || a + b == 10) {
        return console.log(true)
    }
    else{
        return console.log(false)
    }
}
checkNumberIsTen(5,2);

// 8.	Create a function that takes two strings as arguments and returns either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
function stringLength(firstString,secondString){
    if(firstString.length === secondString.length){
        return console.log(true);
    }else{
        return console.log(false)
    }
}
stringLength("naveen","shruti");

// 9.	Create a function that takes a name and returns a greeting in the form of a string. 
//  Don't use a normal function, use an arrow function.
var greetingMessage =(name)=>{
    console.log("Happy new year ",name," !!!");
}
greetingMessage("Naveen");

// 10.	Create a function that takes an array of 10 numbers (between 0 and 9) and returns 
//a string of those numbers formatted as a phone number (e.g. (555) 555-5555).
function phoneNumber(number){
    let firstPart ="";
    let secondPart = "";
    let thirdPart = "";
    for(var i =0;i<number.length;i++){
        if(i<3){
            firstPart += number[i];
        }
        else if(i>=3 && i<=5){
            secondPart += number[i];
        }else{
            thirdPart += number[i];
        }
    }
    console.log(firstPart);
    console.log(secondPart);
    console.log(thirdPart);
    console.log("(",firstPart,") ",secondPart,"-",thirdPart)
}
phoneNumber([9,3,9,8,4,5,7,8,3,3]);

// 11.	Create a function that returns an array of strings sorted by length in ascending order.
// Example:
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

// Question 12
// Question 13
// Question 14
// Question 15
// Question 16
// Question 17
// Question 18
