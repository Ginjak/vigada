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

document.getElementById("mainVideo").addEventListener("click", function () {
  if (this.paused) {
    this.play();
  } else {
    this.pause();
  }
});

function updateMainMedia(type, src) {
  const mainImage = document.getElementById("mainImage");
  const mainVideo = document.getElementById("mainVideo");
  const videoSource = document.getElementById("videoSource");

  if (type === "image") {
    // Add fade-out effect
    mainImage.classList.remove("show");
    mainImage.classList.add("hide");
    mainVideo.classList.remove("show");
    mainVideo.classList.add("hide");

    // Wait for the fade-out transition to complete
    setTimeout(() => {
      mainImage.src = src;
      mainImage.classList.remove("hide");
      mainImage.classList.add("show");
      mainImage.classList.remove("d-none");
      mainVideo.classList.add("d-none");
      mainVideo.pause();
      console.log("Image displayed"); // Log for troubleshooting
    }, 100); // This should match the duration of the CSS transition
  } else if (type === "video") {
    // Add fade-out effect
    mainImage.classList.remove("show");
    mainImage.classList.add("hide");
    mainVideo.classList.remove("show");
    mainVideo.classList.add("hide");

    // Wait for the fade-out transition to complete
    setTimeout(() => {
      videoSource.src = src;
      mainVideo.load();
      mainImage.classList.add("d-none");
      mainVideo.classList.remove("hide");
      mainVideo.classList.add("show");
      mainVideo.classList.remove("d-none");
      mainVideo.play();
      console.log("Video displayed and playing"); // Log for troubleshooting
    }, 100); // This should match the duration of the CSS transition
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const swiperNew = new Swiper(".swiper-test", {
    direction: "horizontal",
    slidesPerView: 2,
    spaceBetween: 20,
    loop: false,
    breakpoints: {
      400: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      550: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1260: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});
