
let screen = document.getElementById("screen");

function appearOnScreen (input){
    screen.value += input;
}

function calculate (){
    screen.value = eval(screen.value);
}

function clearSc (){
    screen.value = " ";
}

function erase (){
    screen.value = screen.value.slice(0, -1);
}