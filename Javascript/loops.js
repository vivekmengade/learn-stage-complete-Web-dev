let a = 1;
do {
    console.log(a)
} while (a>10);
while (a <= 9) {
    console.log("hello while loop", a)
    a++;
}

for (a = 0; a < 9; a++) {
    console.log("for loop ", a, "times")
}
let obj = {
    name: "vivek",
    edu: "BCA",
    job: "developer",
}
console.log("for in loop");
for (const key in obj) {
    const element=obj[key]
    console.log(key, element);
}
console.log("for of loop");
for (const char of "MENGADE") {
    console.log("char of",char);
}
