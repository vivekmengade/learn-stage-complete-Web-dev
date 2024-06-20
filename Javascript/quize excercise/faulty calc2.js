let random=Math.random()
console.log(random)
let a=prompt(`1st number `)
let c=prompt(`enter operation`)
let b=prompt(`2nd number `)

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}
if(random>0.1){
    alert(`result = ${eval(`${a} ${c} ${b}`)}`);
    console.log(`result = ${eval(`${a} ${c} ${b}`)}`);
}
else{
    c=obj[c]
    alert(`result = ${eval(`${a} ${c} ${b}`)}`);
}
