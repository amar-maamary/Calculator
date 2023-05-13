//importing elements
let output = document.querySelector(".output");
let result = document.querySelector(".result");
let buttons = document.querySelectorAll("button");

//creating a function for all elements
buttons.forEach((buttonItem) => {
    buttonItem.addEventListener("click", calculate);
})

function calculate(){
    let buttonText = this.innerText; //this refers to the clicked button
    if (buttonText == "AC"){
        output.innerText = "";
        result.innerText = "0";
        result.style.animation = "";
        output.style.animation = "";
        return;
    } else if (buttonText == "DEL"){
        output.innerText = output.innerText.substring(0, output.innerText.length -1);
    } else if(buttonText == "=") {
        result.innerText = eval(output.innerText);
        result.style.animation = "big 0.5s ease-in-out";
        result.style.animationFillMode = "forwards";
        output.style.animation = "small 0.5s ease-in-out";
        output.style.animationFillMode = "forwards";

    } else{
        output.innerText += buttonText;
    }
}