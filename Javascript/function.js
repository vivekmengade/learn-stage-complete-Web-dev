// function 
function n1(name) {
    console.log("hello "+ name +" from vivek")
    console.log("hello "+ name +" from vivek")
    console.log("hello   "+ name +" from vivek")
}
// n1("vivek")
n1("raju")
// n1(suyash)
// this function can pass value only once 

function sum1(a,b,c=3){
    return a+b+c
}
let ans=sum1(5,6,2)
console.log("sum /3= ",ans);

function sum(a,b,c=3){
    let d=a+b+c
   console.log("answer is" ,d)
}
sum(2,3)


// arrow function

const func =(x,y)=>{
    console.log("arrow function value",x+y)
}
func(34,5)
func(3,5)
func(5,5)
