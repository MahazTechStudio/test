let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// Handle scroll behavior
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150; // Adjust for a slight buffer above the section
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active"); // Corrected variable name from `links` to `link`
      });

      // Correct selector syntax with template literals
      document
        .querySelector(`header nav a[href*="${id}"]`)
        .classList.add("active");
    }
  });
};

// Handle menu icon click
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x"); // Toggle the icon class for styling
  navbar.classList.toggle("active"); // Toggle the navbar visibility
};
