// const boxes = document.querySelectorAll(".box");

// boxes.forEach((apple)=> {
//     apple.addEventListener("mouseenter",function(){
//         const color = document.getElementById("color")
//         const opacity = document.getElementById("op")
//         let currentOpacity = opacity.value * 0.1;

//         let r = Math.floor(255 * Math.random())
//         let g = Math.floor(255 * Math.random())
//         let b = Math.floor(255 * Math.random())
//         this.style.backgroundColor = color.value;
//         this.style.opacity = currentOpacity;

//     })
// });

// const content = document.querySelector(".content")
// const amount = document.getElementById("amount")

// function createBoxes(num){
//     for(let n=0; n>num*num; num++){       
//         const box = document.createElement("div");
//         content.appendChild(box);
//         box.addEventListener("mouseenter",function(){
//             this.style.backgroundColor = "black";
//         })
//     }
//     content.style.gridTemplateColumns = `repeat(${num},1fr)`
// }


// amount.addEventListener("click",function(){
//     const number = Number(prompt("How many boxes do you want?"))
//     createBoxes(number);
// })
// createBoxes(2);



const content = document.querySelector(".content");
const amount = document.getElementById("amount");


function createBoxes(num) {
    content.innerHTML = "";
    console.log(color())

    for (let n = 0; n < num * num; n++) {       
        const box = document.createElement("div");
        box.style.width = "100%";
        box.style.aspectRatio = "1"; // Делаем квадрат
        // box.style.border = "1px solid #ddd";
        content.appendChild(box);

        box.addEventListener("mouseenter", function() {
            this.style.backgroundColor = color();
        });
    }

    content.style.display = "grid";
    content.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
}

amount.addEventListener("click", function() {
    const number = Number(prompt("How many boxes do you want?"));
    if (number > 0) {
        createBoxes(number);
    }
 
});
function color() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

createBoxes(40);












