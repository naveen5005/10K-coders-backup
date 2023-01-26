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

// 6.	Write a function that returns the string "something" joined with a space " " 
// and the given argument a.
function somethingString(a) {
    return console.log("something", " ", a);
}
somethingString("special")

// 7.	Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
function checkNumberIsTen(a, b) {
    if (a == 10 || b == 10 || a + b == 10) {
        return console.log(true)
    }
    else {
        return console.log(false)
    }
}
checkNumberIsTen(5, 2);

// 8.	Create a function that takes two strings as arguments and returns either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
function stringLength(firstString, secondString) {
    if (firstString.length === secondString.length) {
        return console.log(true);
    } else {
        return console.log(false)
    }
}
stringLength("naveen", "shruti");

// 9.	Create a function that takes a name and returns a greeting in the form of a string. 
//  Don't use a normal function, use an arrow function.
var greetingMessage = (name) => {
    console.log("Happy new year ", name, " !!!");
}
greetingMessage("Naveen");

// 10.	Create a function that takes an array of 10 numbers (between 0 and 9) and returns 
//a string of those numbers formatted as a phone number (e.g. (555) 555-5555).
function phoneNumber(number) {
    let firstPart = "";
    let secondPart = "";
    let thirdPart = "";
    for (var i = 0; i < number.length; i++) {
        if (i < 3) {
            firstPart += number[i];
        }
        else if (i >= 3 && i <= 5) {
            secondPart += number[i];
        } else {
            thirdPart += number[i];
        }
    }
    console.log(firstPart);
    console.log(secondPart);
    console.log(thirdPart);
    console.log("(", firstPart, ") ", secondPart, "-", thirdPart)
}
phoneNumber([9, 3, 9, 8, 4, 5, 7, 8, 3, 3]);

// 11.	Create a function that returns an array of strings sorted by length in ascending order.
// Example:
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
function sortedArray() {
    var data = ["a", "ccc", "dddd", "bb"];
    for (var i = 0; i < data.length; i++) {
        for (var j = i + 1; j < data.length; j++) {
            if(data[i].length > data[j].length){
                var m = data[i];
                data[i] = data[j];
                data[j] = m;
            }
        }
    }
    console.log(data);
    console.log(data.sort());
}
sortedArray()

// 12.	Create a function that takes an array of arrays with numbers. 
// Return a new (single) array with the largest numbers of each.
// Example:
// 1.	findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
function largetArray() {
    var mainArray = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];
    var newLargeNum = [];
    mainArray.forEach((element) => {
        console.log(element.sort());
        // console.log(element.reverse(element.sort()));
        var datas = element.reverse(element.sort());
        datas.forEach((num, i) => {
            if (i == 0) {
                newLargeNum.push(num);
            }
        })
    })
    console.log(newLargeNum)
}
largetArray()

// 13.	Create a function that takes an array of numbers and returns the second largest number.
// Example:
// secondLargest([10, 40, 30, 20, 50]) ➞ 40
function secondLargestNumber() {
    var numbers = [10, 40, 30, 20, 50];
    numbers.reverse(numbers.sort()).forEach((num, i) => {
        if (i == 1) {
            console.log("second largest number : ", num);
        }
    })
}
secondLargestNumber()

// Q14.	Create a function that takes an array of items, removes all duplicate items 
// and returns a new array in the same sequential order as the old array (minus duplicates).
// Example:
// removeDups([1, 0, 1, 0]) ➞ [1, 0]
// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
function removeDuplicates(arry) {
    var newdata = []
    arry.forEach((data) => {
        if (newdata.length === 0) {
            newdata.push(data);
        }
        else {
            if (newdata.indexOf(data) === -1) {
                newdata.push(data)
            }
        }
    })
    console.log(newdata);
}
removeDuplicates([1, 0, 1, 0])
removeDuplicates(["The", "big", "cat", "The", "big", "cat"]);

// 15.	Create a function that takes an array of integers as an argument and returns 
// a unique number from that array. All numbers except unique ones have the same number 
// of occurrences in the array.
// Example: findSingleNumber([2, 2, 2, 3, 4, 4, 4]) ➞ 3
function uniqueNumbers(arry) {
    // return console.log("unique numbers : ",[...new Set(arry)])

    let num = arry.reduce((a, b) => {
        if (a == b) {
            return a;
        }
        else {
            return b;
        }
    })
    console.log(num)
}
uniqueNumbers([2, 2, 2, 3, 4, 4, 4])
var a = [1, 1, 2, 4, 5, 5, 6, 78, 9]
console.log([...new Set(a)])
// Question 16
// Question 17

// 18.	Given a string, create a function to reverse the case. All lower-cased letters 
// should be upper-cased, and vice versa.
// Example:
// reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"

function reverseCase(str) {
    console.log(str);
    // var str = document.getElementById("changeCase").innerHTML,
    var str2 = '';

    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === str.charAt(i).toLowerCase()) {
            str2 += str.charAt(i).toUpperCase();
        } else if (str.charAt(i) === str.charAt(i).toUpperCase()) {
            str2 += str.charAt(i).toLowerCase()
        } else {
            str2 += str.charAt(i);
        }
    }
    console.log(str2);
}
reverseCase("Naveen IS a GooD BoY")


// highest word in a sentence without using length method
var highLenghtWord = "10k coders is the best institute";
var arrySplitted = highLenghtWord.split(" ");
// console.log(arrySplitted , typeof arrySplitted);
var longestWord = arrySplitted.reduce((a, b) => {
    var alength = 0;
    var blength = 0;
    for (let i = 0; a[alength] !== undefined; i++) {
        alength++;
    }
    for (let i = 0; b[blength] !== undefined; i++) {
        blength++;
    }
    console.log(alength);
    console.log(blength);
    if (alength < blength) {
        return b;
    } else {
        return a;
    }
})
console.log(longestWord);
