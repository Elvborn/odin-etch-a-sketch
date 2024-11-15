const container = document.querySelector("#grid-container");
const btnSize = document.querySelector("button");

const gridSizeInPX = 500;

function generateGrid(size = 16){
    if(size > 100) size = 100;
    container.innerHTML = "";

    for(let i = 0; i < size; i++){
        const row = document.createElement("div");
    
        for(let j = 0; j < size; j++){
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = `${gridSizeInPX / size}px`;
            square.style.height = `${gridSizeInPX / size}px`;

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
    const gridSize = prompt("Enter grid size:", 16);
    generateGrid(gridSize);
});