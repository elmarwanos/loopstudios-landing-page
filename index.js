function toggleHamburger() {
  var links = document.getElementById("hidden-links");
  var logo = document.getElementsByClassName("header-logo")[0];
  var menu = document.getElementsByClassName("header-hamburger")[0];
  if (links.style.display === "flex") {
    window.scrollTo(0, 0);
    links.style.display = "none";
    logo.style.zIndex = 1;
    menu.style.zIndex = 1;
    menu.firstElementChild.src = "./images/icon-hamburger.svg";
    document.body.style.overflow = "auto";
  } else {
    window.scrollTo(0, 0);
    links.style.display = "flex";
    logo.style.zIndex = 10;
    menu.style.zIndex = 10;
    menu.firstElementChild.src = "./images/icon-close.svg";
    document.body.style.overflow = "hidden";
  }
}
