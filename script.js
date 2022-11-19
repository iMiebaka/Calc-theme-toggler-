const calcContainer = document.querySelectorAll(".calc-container");
const numpad = document.querySelectorAll(".numpad");
const num = document.querySelectorAll(".numpad button");
const themeToggler = document.querySelector(".theme-toggler")
const sun = document.querySelector(".bi-brightness-low")
const moon = document.querySelector(".bi-moon")
const exp = document.querySelector('.user-input')
const answer = document.querySelector('.ans')
const display = document.querySelector('.output')

moon.style.display = "none"
let themeState = true;

if (localStorage.getItem('themeState') == null) {
  localStorage.setItem("themeState", JSON.stringify(themeState))
} else {
  themeState = JSON.parse(localStorage.getItem("themeState"))
}

function lightTheme() {
  calcContainer.forEach(element => {
    element.style.background = "#ffffff";
  });
  numpad.forEach(element => {
    element.style.background = "#f9f9f9";
  });

  num.forEach(element => {
    element.style.color = "#2b2a31";
    element.style.background = "#f6f6f6";
  });

  display.style.color = "#2b2a31";
  moon.style.display = "block"
  sun.style.display = "none"
}

function darkTheme() {
  moon.style.display = "none"

  calcContainer.forEach(element => {
    element.style.background = "#272b33";
  });


  numpad.forEach(element => {
    element.style.background = "#292d36";
  });

  num.forEach(element => {
    element.style.color = "#fcfcfc";
    element.style.background = "#2C2d37";
  });

  display.style.color = "#fcfcfc";
  moon.style.display = "none"
  sun.style.display = "block"
}


function toggleTheme() {
  if (themeState) {
    lightTheme()
    themeState = !themeState
    let data = JSON.stringify(themeState)
    localStorage.setItem('themeState', data)
  }

  else {
    darkTheme()
    themeState = !themeState
    let data = JSON.stringify(themeState)
    localStorage.setItem('themeState', data)
  }
}

if (themeState) {
  darkTheme()
} else {
  lightTheme()
}

num.forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (btn.className === '') {
      exp.innerText += btn.innerHTML
    }

    if (btn.classList.contains('operator')) {
      if (btn.classList.contains('square')) {
        exp.innerText += ' ** 2'
      } else if (btn.classList.contains('pi')) {
        answer.innerText += +eval(exp.innerText * Math.PI).toFixed(5)
      } else {
        exp.innerText += btn.innerHTML
      }
    }

    if (btn.classList.contains('equal')) {
      try {
        answer.innerText = eval(exp.innerText)
      } catch (e) {
        answer.innerText = 'Syntax error'
      }
    }

    if (btn.classList.contains('delete')) {
      answer.innerText = ''
      exp.innerText = exp.innerText.slice(0, -1)
    }
  })
})

themeToggler.addEventListener("click", toggleTheme)