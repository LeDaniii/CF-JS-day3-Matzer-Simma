
// level one

/* function AgeCalculator(){
    let currentYear = prompt("What year is it?");
    let birthYear = prompt("What year where you born?");
    let result1 = currentYear - birthYear;
    let result2 = result1 - 1;
    let result =[result1, result2];
    return document.write("<br>You are either " + result[0] + " or " + result[1] + " year old!" )
}
AgeCalculator(); */

// level two
let date = new Date();
let currentYear = date.getFullYear();

function AgeCalculator(){
    let birthYear = prompt("What year where you born?");
    let result1 = currentYear - birthYear;
    let result2 = result1 - 1;
    let result =[result1, result2];
    return document.write("<br>You are either " + result[0] + " or " + result[1] + " year old!" )
}
AgeCalculator();