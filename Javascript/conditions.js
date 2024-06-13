// javascript conditions
let age = 20;
if (age >= 18) {
    console.log("you can drive");
}
else {
    console.log("you can't drive");
}




// arithematic operators
let a = 5;
let b = 9;
let addition = (a + b);
let subtraction = (a - b);
let multiplication = (a * b);
let dividetion = (a / b);
let expantion = (a ** b);
let moduleno = (a % b);
console.log("addition=", addition);
console.log("subtraction=", subtraction);
console.log("muliplication=", multiplication);
console.log("dividation=", dividetion);
console.log("expantion=", expantion);
console.log("module=", moduleno);
// assignment operator
// a=a+b addition
a += b;
console.log(a, "addition")
// a= a-b subtraction
a -= b;
console.log(a, "subtraction");
// a=a*b multiplication
a *= b;
console.log(a, "multiplication");
// a=a/b dividation
a /= b;
console.log(a, "dividation");
// a=a**b expanention
console.log(a, "expantion");
// a=a%b module
a %= b;
console.log(a, "module");



// comparison operater & if- else-if
let c = "3";
let d = "12";
let e=c+d;
if(c==d || e ==6){
    console.log("c==d");
}
else if(c!=d && e==8) {
    console.log("c!=d");
}
else if(c===d){
    console.log("c===d");
}
// else if(c!==d){
//     console.log("c!==d");
// }
else{
    console.log("no match")
}
// else if(e = c > d ? (c+d)){
//     console.log("e is addition",e)
// }



// ternary operator
let v=5;
let w= 6;
let f = v>w ? (v+w):(v-w);
console.log(f,"c>b");
let g = v<w ? (v+w):(v-w);
console.log(g,"c<b");
