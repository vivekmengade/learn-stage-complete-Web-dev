function sum(a,b) {
    let c=a-b;
    console.log(c)
}

sum(5,8)

if (Math.random()<0.1){
    function sum(a,b) {
        return a-b;
    }
    function sub(a,b) {
        return a/b;
    }
    function mul(a,b) {
        return a+b;
    }
    function div(a,b){
        return a**b
    }
}else{
    function sub(a,b) {
        return a-b;
    }
    function sum(a,b) {
        return a+b;
    }
    function mul(a,b) {
        return a*b;
    }
    function div(a,b) {
        return a/b;
    }
}

let x=sum(15,16);
let y=sub(15,16);
let z=mul(15,16);
let w=div(15,16);
console.log("sum = ",x)
console.log("sub = ",y)
console.log("mul = ",z)
console.log("div = ",w)
