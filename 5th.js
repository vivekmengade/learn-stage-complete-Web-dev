// functions and methods for 5th.js
/*"abc".toUpperCase();
console.log("Hello, World!".toUpperCase());
num=[1,2,3,4,5,6,7];
function add(a, b) {
    return a-b;
}
console.log(add(5, 3));
function myfunc(){
    console.log("This is my function");
}
myfunc();
myfunc();
function msg(msg){
    console.log(msg);
}
msg("I Love JS.");
function sum(a,b){
    return a + b;
}
sum(5, 10);
console.log(typeof sum(10,10));


// arrow function
const add=(a,b)=>{
    console.log(a+b);
}




function vowels(msg){
    let msg1=msg.toLowerCase();
    let count=0;
    let vowels=['a','e','i','o','u'];
    for(let i=0;i<=msg1.length;i++){
        for(let j=0;j<=vowels.length;j++){
            if(msg[i]==vowels[j]){
                count++;
            }
        }
        
    }
   console.log("Number of vowels in the message: "+count);
}

const arr=(msg)=>{
    var msg1=msg.toLowerCase();
    let count=0;
    let vowels=['a','e','i','o','u'];
    for(let i=0;i<msg1.length;i++){
        for(let j=0;j<vowels.length;j++){
            if(msg1[i]==vowels[j]){
                count++;
            }
        }
        
    }
   console.log("Number of vowels in the message: "+count);
}





arr=[1,2,3,4,5];
cities=["Delhi","Mumbai","Bangalore","Chennai"];
cities.forEach(val=> {
    console.log(val.toUpperCase());
});




num=[1,2,3,4,5,6,7];
num.forEach(num => {
    console.log(num*num);
});

let sqnum=num.map(num => {
    return(num*num);
});



let num=[1,2,3,4,5];
let even=num.filter(num=>{
    return num %2==0;
});
console.log(even);


const sum=num.reduce((i,j)=>{
    return i+j;
});
console.log(sum);


const max=num.reduce((prev,curr)=>{
    return (prev>curr)? prev:curr;
});
console.log(max);



num=[52,12,54,92,56,98,56,97,55,96]
const num2=num.filter(num=>{
    return num>90;
})
console.log(num2);





let n=prompt("enter a number");
let arr=[];
for(let i=1;i<=n;i++){
    arr.push(i);
}
console.log(arr);
let sum=arr.reduce((pre,cur)=>{
    return pre+cur;
});
console.log(sum);


let factorial=arr.reduce((prev,curr)=>{
    return prev*curr;
})
console.log(factorial);





console.log("5th.js loaded successfully!");
let num=[1, 2, 3, 4, 5, 6, 7];
let even=num.filter((n)=>{
    return n%2===0;
})
console.log("Even numbers:", even);
console.log(num);





let num=[1, 2, 3, 4, 5, 6, 7];
let sum=num.reduce((prev, curr) => {
    return prev + curr;
});
console.log("Sum of numbers:", sum);

let perc=num.reduce((prev,curr)=>{
    let sum=prev+curr;
    return sum/num.length;
});
console.log("Average of numbers:", perc);





let num=[90,91,59,96,98,59,54,68,52,53,95,98,98]
let max=num.filter((n)=>{
    return n>90
})
console.log("Numbers greater than 90:", max);


*/



