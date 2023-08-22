const navIconsEl = document.getElementById("nav-icons");
const barsEl = document.getElementById("bars");
const xEl = document.getElementById("x");
const navBarEl = document.getElementById("nav-bar");

const viewMoreEL = document.getElementById("view-more");
const viewLessEl = document.getElementById("view-less");
const moreBlogsEl = document.getElementById("blog-container-two");

document.addEventListener("click", function (e) {
  if (e.target.id === "bars" || e.target.id === "x") {
    xEl.classList.toggle("hide");
    barsEl.classList.toggle("hide");
    navBarEl.classList.toggle("hide");
  } else if (e.target.id === "view-more" || e.target.id === "view-less") {
    moreBlogsEl.classList.toggle("hide");
    viewMoreEL.classList.toggle("hide");
    viewLessEl.classList.toggle("hide");
  }
});
