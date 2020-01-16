"use strict"
//Global Variables

var num1 = ""; //Store the first numbers for maths
var num2 = ""; //Stores the second number for maths
var operator; //stores the values for the operator
var flag = false; //boolean false if we havn't used an operator yet
var equalTo = false; //boolean fasle if we hav'nt presse the equal sign yet
var display = document.getElementById("display");
//Calculator

//Function to set numbers into the num1 and num2 variables
function setValue(number){

    if(equalTo === true){
        clearButton();
    }

    if (flag === false ){
        num1 += number;
        display.innerHTML = num1;
    }
    if(flag === true){
        num2 += number;
        display.innerHTML += number;
    }
    if(num1.length > 16 || num2.length > 16){
        display.innerHTML="Max limit of digits left";
        alert("You can't have more than 16 numbers")
    }
}

//Function to clear calculator
function clearButton(){
    num1 = "";
    num2 = "";
    display.innerHTML = "";
    equalTo = false;
    flag =false;
}

//function for storing and selecting the operator value
function setOperator (number){
    operator = number;
    var opString = "";
    flag = true;

    if(operator ===4){
        display.innerHTML += " / ";
        opString = " / ";
    }
        else if(operator === 3){
            display.innerHTML += " * ";
            opString = " * "
        }
        else if(operator === 2){
            display.innerHTML += " - ";
            opString = " - "
        }
        else{
            display.innerHTML += " + ";
            opString = " + "
        }
        //for getting rid of multiple operators
        if(flag === true){
            display.innerHTML = num1 + opString;
        }

        //does not let us do an operation before entering a num1
        if(flag === true && num1 === ""){
            clearButton()
        }

        if(equalTo === true){
            clearButton();
        }
    }

    //Function to solve the math equation
    function equalClick(){
        equalTo === true;
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        var result = "";
        var roundedResult="";

        if(operator === 1){
            result = num1 + num2;
        }
        else if(operator === 2){
            result = num1 - num2;
        }
        else if(operator === 3){
            result = num1 * num2;
        }
        else{
            result = num1 / num2;
        }

        roundedResult = result.toFixed(4);
        display.innerHTML = roundedResult;

        if(roundedResult === "infinity"){
            display.innerHTML = "you cannot divide by zero";
        }
        else if(roundedResult === "NaN"){
            display.innerHTML = "Invalid Calculation"
        }
    }

    //Funciton to delet the last digit in the display
    function backspace(){
        var temp1 = "";
        var temp2 = "";
        if(equalTo === true){
            backspace();
        }
    }
    if(flag === false){
        temp1 = num1.substring(0,num1.length-1);
        num1 = temp1;
        display.innerHTML = num1;
    }
    else if(flag === true){
        display.innerHTML = num1;
        flag = false;
    }
    if(num2 !== ""){
        temp2 = num2.substring(0, num2.length-1);
        num2 = temp2;
        flag = true;

        opsetString(operator);
    
        if(operator === 1){
            display.innerHTML = num1 + " + " + num2;
        } else if(op === 2) {
            display.innerHTML= num1 + " - " + num2;
        }  else if(op === 3) {
            display.innerHTML = num1 + " * " + num2;
        } else {
            display.innerHTML = num1 + " / " + num2;
        }
    
        
    }

    //function setDecimal(){
    function setDecimal(){
        if(flag === false){
            if(num1 === ""){
                num1 = "0."
                display.innerHTML += " . ";
            }
            if(num1.indexOf(".") === -1){
                num1 += ".";
                display.innerHTML = num1;
            }
        }
    }

    if(flag === true){
        if(num2 === ""){
            num2 = "0."
            display.innerHTML += " . ";
        }
        if(num2.indexOf(".") === -1){
            num2 += ".";
            display.innerHTML = num2;
        }

//Tell the calculator what operator you need when messing with num2
//function opsetString(op){
    if(operator === 1){
        display.innerHTML = num1 + " + " + num2;
    } else if(op === 2) {
        display.innerHTML= num1 + " - " + num2;
    }  else if(op === 3) {
        display.innerHTML = num1 + " * " + num2;
    } else {
        display.innerHTML = num1 + " / " + num2;
    }

}