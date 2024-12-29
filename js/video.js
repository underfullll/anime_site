// Получаем все элементы с классом image-slider_image
const slides = document.querySelectorAll('.image-slider_image');

slides.forEach(slide => {
    const video = slide.querySelector('.animated-video'); // Находим видео внутри слайда

    slide.addEventListener('mouseenter', () => {
        video.style.display = 'block'; // Показываем видео
        video.play(); // Запускаем воспроизведение видео
    });

    slide.addEventListener('mouseleave', () => {
        video.pause(); // Останавливаем воспроизведение видео
        video.currentTime = 0; // Сбрасываем видео на начало
        video.style.display = 'none'; // Скрываем видео
    });
});
