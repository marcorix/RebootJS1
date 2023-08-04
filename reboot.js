
const btnLarge = document.querySelector('.btn-lg a');
const ul = document.querySelector('ul')
const figures = document.querySelectorAll(".main-box > *");

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



document.querySelectorAll(".btn").forEach((element) => {
  element.addEventListener("click", (e) => {

    console.log(e.currentTarget.text);
  });
});
