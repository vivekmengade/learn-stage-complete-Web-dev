// find the number is divisible by 2/3
let n = 6;
if ((n%2==0)) {
    console.log("number is divisible by 2")
}
else if((n%3)==0){
    console.log("number is divisible by 3")
}
else if ((n % 3) == 0 && (n % 2) == 0 ) {
    console.log("number is divisible by both")
}
else{
    console.log("number is not divisible by 2&3")
}
