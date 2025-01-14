const calcContainer = document.querySelectorAll(".calc-container");
const btns = document.querySelectorAll(".btns");
const num = document.querySelectorAll(".num");
const button = document.querySelectorAll("button");
const themeToggler = document.querySelectorAll(".theme-toggler")
const icon = document.querySelectorAll(".icon")
const sun = document.querySelector(".bi-brightness-low")
const moon = document.querySelector(".bi-moon")

moon.style.display = "none"

function darkTheme() {
  calcContainer.forEach(element => {
    element.style.background = "#272b33";
  });


  btns.forEach(element => {
    element.style.background = "#292d36";
  });

  num.forEach(element => {
    element.style.color = "#fcfcfc";
  });

  button.forEach(element => {
    element.style.background = "#2C2d37";
  });

  themeToggler.forEach(element => {
    element.style.background = "#2c2d37";
  });

  icon.forEach(element => {
    element.style.fill = "white";
  });

  moon.style.display = "none"
  sun.style.display = "block"
}

function lightTheme() {
  calcContainer.forEach(element => {
    element.style.background = "#ffffff";
  });
  btns.forEach(element => {
  element.style.background = "#f9f9f9";
  });

  num.forEach(element => {
    element.style.color = "#2b2a31";
  });

  button.forEach(element => {
    element.style.background = "#f6f6f6";
  });

  themeToggler.forEach(element => {
    element.style.background = "#f9f9f9";
  })

  icon.forEach(element => {
    element.style.fill = "black";
  })

  moon.style.display = "block"
  sun.style.display = "none"
}

let themeStateDark = true

function toggleTheme() {
  if (themeStateDark) {
    darkTheme()
    themeStateDark = false
  }

  else {
    lightTheme()
    themeStateDark = true
  }
}

document.querySelector(".theme-toggler").addEventListener("click", toggleTheme)