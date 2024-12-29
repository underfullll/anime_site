// Получаем все элементы с классом image-slider_image
const slides = document.querySelectorAll('.image-slider_image');

slides.forEach(slide => {
    const video = slide.querySelector('.animated-video');

    slide.addEventListener('mouseenter', () => {
        video.style.display = 'block'; 
        video.play();
    });

    slide.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
        video.style.display = 'none'; 
    });
});
