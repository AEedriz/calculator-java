var opr = prompt("Operation: ")
var num1 = parseInt(prompt("Operation 1: "))
var num2 = parseInt(prompt("Operation 2: "))

if(opr == "+")
{
    console.log(num1 + num2)
} else if(opr == "-")
{  
    console.log(num1 - num2)
} else if(opr == "*")
{
    console.log(num1 * num2)
} else if(opr == "/")
{
    console.log(num1 / num2)
}