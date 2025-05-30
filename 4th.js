/*console.log("4th.js");
let array=[10,20,30,40,50]
console.log(array); // 10
let info={name:"John",age:30,city:"New York"}
console.log(info); // { name: 'John', age: 30, city: 'New York' }
console.log(info.length); // John
console.log(array.length); // 5
let name=["vivek","amruta","nihar"];
console.log(typeof name);
console.log(name.length); 
// name.add("priya");
// console.log(name);
for(let i=0;i<name.length;i++){
    console.log("\n",name[i])
}
console.log("\n using for loop");

while(name.length>0){
    console.log(name.pop());
}
for (const i of name) {
    console.log(i);
}
let cities=["pune","mumbai","delhi"];
for(const city of cities){
    console.log(city.toUpperCase());
}




let marks=[85,97,44,37,76,60];
let total=0;
for(let i=0; i<marks.length;i++){
    total+=marks[i];
}
let avg=total/marks.length;
console.log("total marks: ",total);
console.log("average marks: ",avg);
*/


let item=[250,645,300,900,50];
let offer=0;
let val;
for(let i=0;i<item.length;i++){
    console.log("\n \n item before offer: ",item[i]);
    offer=item[i]/10;
    item[i]-=offer;
    console.log("item after offer: ",item[i]);
}
