/ const a=5
var a=6

// let a=7     //wrong error of identifier already declared
console.log("value of a is",a)
// quick quize create a object which stores name, mobile no. , marks of students using object 
const data={
    name:"Vivek Mengade",
    cont_no:8788658339,
    marks:73.00
}
console.log(data)
data.salary=1000;       //add keys in object
console.log(data)

// arithematic operations 
var a=5
var b=3
let add = a+b       
let sub = a-b
let div = a/b
let mul = a*b
console.log("add",add)
console.log("sub",sub)
console.log("div",div)
console.log("mul",mul)


let c= a=b  // value of b is assogn to a
console.log(c)



            //assignment opperators
let x=3
let y=5
console.log(x +=y) 
console.log(x *=y) 
console.log(x -=y) 
console.log(x /=y)

            //playing if & else loop
let e=2
let f=8

if(e==f){
    console.log("same ")
}
else if(e!=f){
    console.log("not same")
}
else if(e<f){
    console.log("f is greater than e")
}
else if(e>f){
    console.log("e is greater than f")
}
else{
    console.log("no match")
}
