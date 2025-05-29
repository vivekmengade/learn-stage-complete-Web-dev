// let sum=0;
// for(i=1; i<=5;i++){
//     console.log(sum+= i);
// }

// let a= 0;
// while(a<=0){
//     console.log(a);
//     a++;
// }

/*
// Using do...while loop
do{
    console.log(a);
    a++;
}while(a<=5){
    console.log("This will run at least once");
    a++;
}


let str = "Vivek";
let size=0;
// Using for...of loop to iterate over the string
for(let i of str){
    console.log("i = ",i);
    size++;
}
console.log("Size of the string is: ", size);



// Using for...in loop to iterate over the string
let student={
    name:"Vivek",
    age:20,
    City:"Pune"
}
for(let i in student){
    console.log("key= ",i,", Value = ", student[i]);
}


let a=100;
for(let i=0;i<a; i++){
    if(i%2==0){
        console.log("Even number: ", i);
    }
}
    
let gno=10;
let pno=prompt("enter a number to compare");
while(gno!=pno){
    console.log("correct number is: ", gno);
    pno=prompt("guess next number");
}
    
   let name = "Vivek";
   console.log(name[4])

   let product={
    name:"pen",
    cost:10
   }
   let output=`The cost of ${product.name} is ${product.cost}`;
console.log(output);
   console.log("the cost of", product.name,"is",product.cost);
  

   let name = "Vivek";
   console.log(name.toUpperCase());
   console.log(name.toLowerCase());


   let str = "Hello World";
   console.log(str);
   console.log(str.trim()); // Removes whitespace from both ends of the string
   console.log(str.slice(0, 5)); // Extracts a section of the string from index 0 to 5
   console.log(str.replace("World","Vivek"));
   console.log(str.split(" ")); // Splits the string into an array of substrings based on the space character
   console.log(str.concat(" - Welcome")); // Concatenates two strings
   console.log(str.charAt(0)); // Returns the character at index 0
 */
let fullname =prompt("Enter your full name: ");
// console.log(`username = @${fullname.toLowerCase().trim()}${fullname.length}`);
let userName="@"+fullname.toLowerCase().trim()+fullname.length;
console.log(userName);
