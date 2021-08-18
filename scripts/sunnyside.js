let btn = document.getElementById("btn");
let menu = document.getElementById("menu");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  let x = menu.toggleAttribute("active");
  console.log(x);
});
