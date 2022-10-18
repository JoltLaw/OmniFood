const header = document.getElementById("header");

function toggleNav() {
  if (!header.classList.contains("nav-open")) {
    header.classList.add("nav-open");
  } else {
    header.classList.remove("nav-open");
  }
}
