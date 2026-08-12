
let screen = document.getElementById("screen");

function appearOnScreen (input){
    screen.value += input;
}

function calculate (){
    screen.value = eval(screen.value);
}