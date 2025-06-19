// console.log("hello");
// window.alert("hello world");
// console.log(window);
// window.console.log("hello world");
// console.log(window.document);
// console.log(document.body);

// console.dir(document.body.childNodes[0]);

// document.body.style.backgroundColor = "lightblue";
// document.body.style.color = "darkblue";
// document.body.children[3].innerText = "Hello, World!";

// console.dir(document.body);
// console.dir(heading);
// console.log(heading);

// let button = document.getElementById("button1");
// console.dir(button);
// console.log(button);
// let para=document.getElementsByTagName("p");
// console.dir(para);
// console.log(para);
// let para2= document.querySelector("p");
// console.log(para2);


// let ele2=document.querySelector("#button1");
// console.dir(ele2);
// console.log(ele2);


let ele1=document.querySelector("h2");
console.dir(ele1);
console.log(ele1.innerText);
ele1.innerText=ele1.innerText + " from vivek";



let divs=document.querySelectorAll("div");
console.dir(divs);
let cdiv=document.querySelectorAll(".box");
console.log(cdiv);

// cdiv[0].innerText="This is box 1";
// cdiv[1].innerText="This is box 2"; 
// cdiv[2].innerText="this is box 3";
// cdiv[0].style.backgroundColor="red";
// cdiv[1].style.backgroundColor="green";
// cdiv[2].style.backgroundColor="blue";



let idx =1;
for(div of cdiv){
    div.innerText=`this is box ${idx}`;
    idx++;
}