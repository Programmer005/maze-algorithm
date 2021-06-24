const grid = document.querySelector(".grid")
const cells = document.querySelectorAll(".cell")
const classes = ["bottom", "top", "right", "left"]

for (let i = 0; i < cells.length; i++) {
  const element = cells[i]

  const randomNumber = Math.floor(Math.random() * classes.length)

  element.classList.add(classes[randomNumber])
}
