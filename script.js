const container = document.querySelector("#container");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createGrid(size) {
  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const squares = document.createElement("div");
    squares.classList.add("square");
    squares.style.opacity = 0;
    squares.addEventListener("mouseenter", () => {
      let currentOpacity = parseFloat(squares.style.opacity);
      if (currentOpacity < 1) {
        squares.style.opacity = currentOpacity + 0.1;
      }
      squares.style.backgroundColor = getRandomColor();
      squares.style.borderColor = getRandomColor();
    });
    container.appendChild(squares);
  }
}

createGrid(16);

const button = document.querySelector("#btn");
button.addEventListener("click", () => {
  let userInput = prompt(
    "Enter the number of squares per side for the new grid (1-100):"
  );
  let number = parseInt(userInput, 10);

  if (number > 100 || number < 1 || isNaN(number)) {
    alert("Please enter a number between 1 and 100");
  } else {
    createGrid(number);
  }
});
