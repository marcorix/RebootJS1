
const btnLarge = document.querySelector('.btn-lg a');
const ul = document.querySelector('ul')
const figures = document.querySelectorAll(".figures-box > *");

const names = ["purple", "cyan", "sandybrown", "aquamarine"];

const displayNames = (array) => {
  array.forEach((element) => {
    ul.insertAdjacentHTML(
      "beforeend",
      `<li><a href="#" class="btn-color">${element}</a></li>`
    );
  });
};

displayNames(names);


btnLarge.addEventListener('click', (e) => {
  ul.classList.toggle('d-none');
})



document.querySelectorAll(".btn-color").forEach((color) => {
  color.addEventListener("click", (e) => {
    figures.forEach((element) => {
      element.style.backgroundColor = e.currentTarget.text;
      console.log(e.currentTarget.text);
    })
  });
});
