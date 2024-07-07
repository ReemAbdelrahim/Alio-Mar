document.addEventListener('DOMContentLoaded', function() {
    const customSlider = document.querySelector('.custom-slider');
    const customSlides = document.querySelectorAll('.custom-slide');
    const customNavDots = document.querySelectorAll('.custom-nav-dot');

    let currentCustomIndex = 0;

    function goToCustomSlide(index) {
        customSlider.style.transform = `translateX(-${index * 100}%)`;
        customNavDots.forEach(dot => dot.classList.remove('active'));
        customNavDots[index].classList.add('active');
        currentCustomIndex = index;
    }

    customNavDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToCustomSlide(index);
        });
    });

    // Auto slide functionality (optional)
    setInterval(() => {
        let nextCustomIndex = (currentCustomIndex + 1) % customSlides.length;
        goToCustomSlide(nextCustomIndex);
    }, 5000); // Change slide every 5 seconds
});
