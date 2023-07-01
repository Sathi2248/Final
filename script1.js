// Get the navbar element
const navbar = document.getElementById('navbar');

// Function to handle scroll event
function handleScroll() {
  // Check the scroll position and screen width
  if (window.pageYOffset >= 100 || window.innerWidth < 1200) {
    // Add the scrolled class to the navbar
    navbar.classList.add('scrolled');
  } else {
    // Remove the scrolled class from the navbar
    navbar.classList.remove('scrolled');
  }
}

// Add a scroll event listener to the window
window.addEventListener('scroll', handleScroll);

// Add a resize event listener to the window
window.addEventListener('resize', handleScroll);

// Initial scroll event handling on page load
handleScroll();


