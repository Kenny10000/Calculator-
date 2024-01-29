let display = document.getElementById('display');
let input = document.getElementById("input");
let history = document.getElementById('history');
let ac = document.getElementById('ac');
let output = 0;
function show(num) {
    if (display.value === '0') {
        display.value = num;
        history.value = "Ans= " + eval(output);
        ac.innerHTML = 'CE';
    }
    else if (history.value === (output + " = ")) {
        display.value = num;
        history.value = "Ans= " + eval(output);
        ac.innerHTML = 'CE';
    }
    else {
        display.value += num;
        history.value = "Ans= " + eval(output);
        ac.innerHTML = 'CE';
    }


}

function clr(screen) {
    if (ac.innerHTML === "CE" && display.value.length === 1) {
        display.value = 0;
    } 
    else if (ac.innerHTML === "CE") {
        display.value = display.value.slice(0,-1);
    }
    
    else {
        display.value = screen;
        history.value = "Ans= " + eval(output);
    }

}

function cal() {
    output = display.value;
    display.value = eval(output);
    history.value = output + " = ";
    ac.innerHTML = "AC";
}

function operator(join) {
    history.value = "Ans= " + eval(output);
    display.value += join;
}
function operatorMinus(join) {
    if (display.value === '0') {
        display.value = join;
        history.value = "Ans= " + eval(output);
    }
    else {
        history.value = "Ans= " + eval(output);
        display.value += join;
    }

}

function dot(join) {
    history.value = "Ans= " + eval(output);
    display.value += join;
}

function squareRoot() {
    display.value = Math.sqrt(display.value);
}