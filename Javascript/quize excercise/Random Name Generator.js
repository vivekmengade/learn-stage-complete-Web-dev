let first, second, third;
let rand = Math.random();
if (rand < 0.33) {
    first = "Crazy";

}
else if (rand < 0.66) {
    first = "Amazing";
}
else {
    first = "Fire"
}


rand=Math.random();
if (rand < 0.33) {
    second = "Engine";

}
else if (rand < 0.66) {
    second = "Foods";
}
else {
    second = "Garments"
}



rand=Math.random();
if (rand < 0.33) {
    third = "Bros";

}
else if (rand < 0.66) {
    third = "Limited";
}
else {
    third = "Hub"
}


console.log(`the generated name is = ${first} ${second} ${third}`)
