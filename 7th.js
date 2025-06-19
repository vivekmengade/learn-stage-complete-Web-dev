// let div = document.querySelector("#div1");
// console.log(div);


// let id=document.querySelector(".para");
// console.log(id);

// let name = document.querySelector("div");
// console.log(name);

// let para=document.querySelector("p");
// console.log(para.getAttribute("class"));

// console.log(para.setAttribute("class","paragraph"));

// let box=document.querySelector(".box");
// console.log(box.style);

// box.style.backgroundColor="red";
// box.style.backgroundColor="blue";
// box.style.fontSize="20px";
// box.style.color="white";
// box.innerText="Hello World !";
// box.style.visibility="hidden";


// let newbtn= document.createElement("button");
// newbtn.innerText="Click Me !";
// console.log(newbtn);



// let box=document.querySelector(".box");
// box.append(newbtn);
// box.before(newbtn);

// let para=document.querySelector("#para");
// para.append(newbtn);


// let newhead=document.createElement("h1");
// newhead.innerHTML="<h3> new Heading</h3>";
// document.querySelector("body").prepend(newhead);

// newhead.remove(newhead);


let btn=document.createElement("button");
btn.innerText="Click Me !";

let body=document.querySelector("body");
body.prepend(btn);

btn.style.backgroundColor="red";
btn.style.color="white";

let p=document.createElement("p");
p.innerText="this is a new paragraph";
p.setAttribute("class","para2");
body.append(p);
p.classList.add("para3");
// p.classList.remove("para2");