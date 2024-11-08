const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Current year

function displayCurrentYear() {
  const currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;
}

// Call the function to display the year
displayCurrentYear();
