
// const numNine = () => {
//     alert ("Number 9")
// }

// function numEight(){
//     alert ("Number 8")
// }


// function numSev(){
//     alert ("Number 7")
// }


// function numSix(){
//     alert ("Number 6")
// }


// function numFive(){
//     alert ("Number 5")
// }


// function numFour(){
//     alert ("Number 4")
// }


// function numThree(){
//     alert ("Number 3")
// }


// function numTwo(){
//     alert ("Number 2")
// }


// function numOne(){
//     alert ("Number 1")
// }


// function numZero(){
//     alert ("Number 0")
// }

// function numDot(){
//     alert ("Number .")
// }
function displaynum(value){
    document.getElementById("display").value += value;
}

function deleteOne(){
    document.getElementById("display").value = display.value.toString().slice(0, -1);
}

function deleteAll(){
    document.getElementById("display").value = "";
}