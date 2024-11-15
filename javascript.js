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

            square.addEventListener("mouseover", (e) => {
                e.target.style.background = "blue";
            });
    
            row.append(square);
        }
    
        container.append(row);
    }
}

generateGrid();

btnSize.addEventListener("click", () => {
    const gridSize = prompt("Enter grid size:", 16);
    generateGrid(gridSize);
});