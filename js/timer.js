document.addEventListener('DOMContentLoaded', () => {

    const startCounting = (counterId, target) => {
        let current = 0;
        let increment = target / 100;
        let counter = document.getElementById(counterId);

        let counterInterval = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(counterInterval);
            }
            counter.innerText = Math.floor(current);
        }, 10);
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting('count1', 500);
                startCounting('count2', 18);
                startCounting('count3', 470);
                observer.disconnect();
            }
        });
    });
    const counterSection = document.getElementById('counter-section');
    observer.observe(counterSection);
});