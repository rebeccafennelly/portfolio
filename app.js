const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
  toggleMenu();
});

const toggleMenu = () => {
  let mainNav = document.getElementsByClassName("hide")[0];
  console.log(mainNav);
  if (mainNav.classList.contains("show")) {
    mainNav.classList.remove("show");
  } else {
    mainNav.classList.add("show");
  }
};

// window.onscroll = scrollFunction();

// const scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById(".bexface").style.width = "125px";
//   } else {
//     document.getElementById("header").style.fontSize = "250px";
//   }
// }
// toggleMenu();

const bexfaceImage = document.querySelector(".bexface");
console.log(bexfaceImage);

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300 && !bexfaceImage.classList.contains("shrink")) {
    bexfaceImage.classList.add("shrink");
  }
  else if (window.pageYOffset <= 300 && bexfaceImage.classList.contains("shrink")) {
    bexfaceImage.classList.remove("shrink");
}
  });
