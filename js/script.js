let swiper;

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed"); // Проверка загрузки DOM
  swiper = new Swiper(".sim-slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  console.log("Swiper initialized");

  swiper.on("slideChange", function () {
    const currentSlide = swiper.slides[swiper.activeIndex];
    const currentImage = currentSlide.querySelector("data-anons-image");
    const anonsImage = document.getElementById("anons-image");

    console.log("Current slide index:", swiper.activeIndex);
    console.log("Current image:", currentImage);

    if (currentImage) {
      const newSrc = currentImage.getAttribute("data-anons-image");
      anonsImage.src = newSrc;
      console.log("Updated anons image src to:", newSrc);
    } else {
      console.log("No image found for current slide.");
    }
  });
});
