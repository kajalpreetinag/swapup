const input = require("readline-sync")
let a = input.questionInt("enter first number: ")
let b = input.questionInt("enter second number: ")

{
    a=a+b;
    b=a-b;
    a=a-b;
    console.log("b is a",a)
    console.log("a is b",b)
}