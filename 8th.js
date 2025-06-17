let box = document.querySelector(".box");
let btn = document.querySelector(".button");
let btn2 = document.querySelector(".btn2");
box.onclick=()=>{
    box.style.backgroundColor = "white";
    box.style.color = "black";
    box.innerText = "Box Clicked!";
}
box.onmouseover=()=>{
    box.style.backgroundColor = "blue";
    box.style.color = "white";
    box.innerText = "Mouse Over Box!";
}
btn.onclick =()=>{
    box.style.backgroundColor="purple";
    box.style.color="yellow";
    box.innerText="button clicked !";
}
btn2.ondblclick =()=>{
    box.style.backgroundColor="green";
    box.style.color="white";
    box.innerText="double Clicked btn2 !";
}



const h3=()=>{
    box.style.backgroundColor="red";
    box.style.color="white";
    box.innerText="button clicked !- evt 2";
    console.log("Button clicked");
};
btn.addEventListener("click", h3);
btn.removeEventListener("click", h3);


