const navLogo = document.querySelector(".nav-logo"),
navWrap = document.querySelector(".nav-wrap");

function navLogoHover(){
  navWrap.classList.toggle("nav-wrap-active");
  console.log(navWrap.className);
}

function scrollToElement(element) {
  if (element !== home) {
    window.scrollTo({
      top:
        Math.round(
          element.getBoundingClientRect().top +
            document.documentElement.scrollTop
        ) - 175,
      behavior: "smooth",
    });
  }else {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}


