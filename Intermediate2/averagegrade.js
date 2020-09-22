

let mathGrade = prompt("What's your Math Grade?");
let physicsGrade = prompt("What's your Physics Grade?");
let englishGrade = prompt("What's your English Grade?");

function averageGrade(mathGrade, physicsGrade, englishGrade){
    let average = (parseInt(mathGrade) + parseInt(physicsGrade) + parseInt(englishGrade))/3;
    return document.write("Your grade average is "+ Math.round(average) + ". Well done!");
}

averageGrade(mathGrade, physicsGrade, englishGrade);

