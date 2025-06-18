// let box = document.querySelector(".box");
// let btn = document.querySelector(".button");
// let btn2 = document.querySelector(".btn2");
// box.onclick=()=>{
//     box.style.backgroundColor = "white";
//     box.style.color = "black";
//     box.innerText = "Box Clicked!";
// }
// box.onmouseover=()=>{
//     box.style.backgroundColor = "blue";
//     box.style.color = "white";
//     box.innerText = "Mouse Over Box!";
// }
// btn.onclick =()=>{
//     box.style.backgroundColor="purple";
//     box.style.color="yellow";
//     box.innerText="button clicked !";
// }
// btn2.ondblclick =()=>{
//     box.style.backgroundColor="green";
//     box.style.color="white";
//     box.innerText="double Clicked btn2 !";
// }



// const h3=()=>{
//     box.style.backgroundColor="red";
//     box.style.color="white";
//     box.innerText="button clicked !- evt 2";
//     console.log("Button clicked");
// };
// btn.addEventListener("click", h3);
// btn.removeEventListener("click", h3);


let modebtn= document.querySelector("#mode")
let mode= "light";
let body= document.querySelector("body");
modebtn.addEventListener("click",()=>{
    if(mode==="light"){
        body.style.backgroundColor="black";
        body.style.color="white";
        console.log("Dark Mode Activated");
        mode="dark";
    }else{
        body.style.backgroundColor="white";
        body.style.color="black";
        console.log("ligth Mode Activated");
        mode="light";
    }



});
