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


if(e+f==11||e-f==5){
    console.log("e = 6 & f = 5")
}
else if(e+f==10||e-f==0){
    console.log("e=5 and f=5")
}
else{
    console.log("no number in 5& 6")
}




                // ternary operater

//condition ? (statment ):(else statement) 
e>f?(console.log("e is greater than f")):(console.log("f is greater than e"))


                //loops study 
let q=4
let w=5
//making table using for loop 
console.log("table of",q)
for(i=1;i<=10;i++){
    console.log(q,"*",i,"=",q*i)
}

//for in loop 
//creating object 
let obj = {
    name: "vivek",
    "job role": "developer",
    salary: `900000.LPA`
}
for (let key in obj) {
    console.log(`${key}:${obj[key]}`)
}
obj.Surname = "Mengade"
for (let key in obj) {
    console.log(`${key}:${obj[key]}`)
}


// creating array and using for in loop 
let colors = ["Red", "Green", "Blue"]
for (let index in colors) {
    console.log(`${index}:${colors[index]}`)
}
let object = new Object([

    ["name", "raja"],
    ["salary", `4lpa`],
    ["job role", "developer"]
])


// for of loop 
for (let [index, value] of object) {
    console.log(`${index}:${value}`)
}

// while loop 
let E = 0
do {
    E++;
    console.log(E)
}
while (E <= 10)
if (E > 10) {
    console.log(E, "is greater than 10")
}
else {
    console.log(E, "is greater than 10")
}



/ let num = 10


                            // create function 
function table(num) {
    for (i = 1; i <=10; i++) {
        console.log(i*num)
    }
}
table(10)


function sum(a,b){
    return a+b;
}
console.log(sum(10,11))
console.log(sum(11,12))
console.log(sum(12,13))
let result=sum(10,12)
console.log("result defined",result)






                    // arrow function 
const func=(x,y)=>{
    console.log(x+y)
}
func(100,12)




                    // string
let name="viVek"
let surname= "Mengade"
// let upper=name.toUpperCase()
console.log(name[1])
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2))
console.log(name.replace("v","h"))
console.log(name.concat(surname))
console.log(name.concat(" Mengade"))
// console.log(name.trim(2))





                                // quize of exercise
// 1st chapter 3
let objects = {
    vivek:70,
    pritesh:80,
    suyash:90
}
for (const key in objects) {
    console.log(key,objects[key])
}



// try again until number is correct 

const b = "9"
let a = ""
while (a !== b) {
    a = prompt("enter element")
    if (a === b) {
        alert("correct");
    }
    else {
        alert("try again");
    }
}





// find mean of elements
function mean(a,b,c,d,e){
    let sum=a+b+c+d+e
    console.log(sum/mean.length)
    console.log(sum)
}
mean(11,22,33,44,55)




let name=`     Vivek's`
console.log(name.trim())
console.log(name.length)
console.log(typeof name)
console.log(name)
let a=`the name is ${name} `
console.log("print \n \t \r \r",a)





let arr=[1,2,3,4,5]
console.log(arr)
console.log(arr.length)

arr[0]=50
console.log(arr)
let ar=arr.toString()
console.log(typeof ar)

console.log(arr.join(" and "))
console.log(arr.pop())
console.log(arr)
console.log(arr.pop())
console.log(arr)
console.log(arr.push(5))
console.log(arr)
console.log(arr.shift())
console.log(arr)
console.log(arr.unshift(1))
console.log(arr)
console.log(delete arr[0])
console.log(arr)
console.log(arr.concat(arr,ar))
console.log(arr.sort())
console.log(arr.splice(1))
console.log(arr.reverse())





            // map


console.log(arr)
let a=3
let arr2=arr.map(e=> e*a)
console.log(arr2)
let num=[1,2,3,4,5,6,7,8,9,10]
let table=num.map(e=> {
    return e*a;
});
console.log(table)



const greaterthan3=((e)=>{
    if(e>3){
        return true;
    }
    else{
        return false
    }
})
console.log(arr.filter(greaterthan3))

const red=(a,b)=>{
    return a+b
}
console.log(arr.reduce(red))
// let name=A
console.log(Array.from("Vivek"))




let a=5
let b=1
for(i=1;i<=a;i++){
    console.log(b=b*i)
}




                    // today no change in file


document.body.childNodes
document.body.firstChild
document.body.firstElementChild
document.body.parentElement
document.body.children
document.body.children[2].nextSibling
document.body.children[4].previousElementSibling
                                           //Selection By Class & Id



document.querySelector(".name").style.backgroundColor="red"
document.getElementById("purpose")
document.querySelector("name").style.backgroundColor="red"
document.querySelector(".name").innerHTML="Nihar"
