const ul = document.querySelector('.color-list');
const btn = document.querySelector('button');
const shapes = document.querySelectorAll(".shape-box > *");

const colors = ["purple", "cyan", "sandybrown", "aquamarine"];

const displayColors = (colors) => {
  colors.forEach((color) => {
    ul.insertAdjacentHTML("beforeend", `<li><a href="#">${color}</a></li>`);
  })
};

displayColors(colors)

btn.addEventListener('click', () => {
  ul.classList.toggle("d-none");
})


const changColor = (color) => {
  shapes.forEach((shape) => {
    shape.style.backgroundColor = color;
  });
}

const colorLinks = document.querySelectorAll('li a')

colorLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    changColor(e.currentTarget.text)
  })
})
