const menuButton = document.querySelector("button.menu")
const mainTag = document.querySelector("main")

menuButton.addEventListener("click", function () {

  mainTag.classList.toggle("dark-mode")
  menuButton.classList.toggle("dark-mode")

if (mainTag.classList.contains("dark-mode")) {
  menuButton.innerHTML = "You're in the dark"
} else {
  menuButton.innerHTML = "Don't Click Me"
}

});