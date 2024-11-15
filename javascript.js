const container = document.querySelector("#grid-container");
const btnSize = document.querySelector(".btnSize");
const btnReset = document.querySelector(".btnReset");


const gridSizeInPX = 500;
let gridCount = 16;

function generateGrid(){
    if(gridCount > 100) gridCount = 100;
    container.innerHTML = "";

    for(let i = 0; i < gridCount; i++){
        const row = document.createElement("div");
    
        for(let j = 0; j < gridCount; j++){
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = `${gridSizeInPX / gridCount}px`;
            square.style.height = `${gridSizeInPX / gridCount}px`;

            square.opacity = 10;
            square.color = [];

            square.addEventListener("mouseover", (e) => {       
                e.target.style.opacity = `${square.opacity}%`; 
                
                if(square.color.length == 0){
                    square.color = getRandomRGBColor();
                }

                console.log(square.color.join(","));
                console.log(square.opacity);
                e.target.style.background = `rgb(${square.color.join(",")})`;

                square.opacity += 10;
                if(square.opacity > 100) square.opacity = 100;
            });
    
            row.append(square);
        }
    
        container.append(row);
    }
}

function getRandomRGBColor(){
    let rgb = [];

    for(let i=0; i < 3; i++)
        rgb.push((255 / 100 * (Math.random() * 100)).toFixed());

    return rgb;
}

generateGrid();

btnSize.addEventListener("click", () => {
    gridCount = prompt("Enter grid gridcount:", 16);
    generateGrid();
});

btnReset.addEventListener("click", () => {
    generateGrid();
});