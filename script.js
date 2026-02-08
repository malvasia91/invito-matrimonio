/* ====== SCRIPT.JS - FUNZIONANTE ====== */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Pagina caricata - Invito matrimonio Mattia & Lorenza');
    
    // Effetto fade-in pagina
    document.body.style.opacity = '0';
    setTimeout(function() {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease-in';
    }, 100);

    // COUNTDOWN FUNZIONANTE
    initCountdown();
    
    // CAROUSEL FUNZIONANTE
    initCarousel();
});

// ====== COUNTDOWN FUNZIONANTE ======
function initCountdown() {
    const targetDate = new Date(2026, 8, 4, 11, 0, 0); // 4 Settembre 2026 ore 11:00
    
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date();
        const diff = targetDate.getTime() - now.getTime();

        if (diff > 0) {
            const totalSeconds = Math.floor(diff / 1000);
            const days = Math.floor(totalSeconds / (3600 * 24));
            const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;

            daysEl.textContent = String(days).padStart(2, '0');
            hoursEl.textContent = String(hours).padStart(2, '0');
            minutesEl.textContent = String(minutes).padStart(2, '0');
            secondsEl.textContent = String(seconds).padStart(2, '0');
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ====== CAROUSEL FUNZIONANTE ======
function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = 0;

    function updateCarousel() {
        const translateX = -currentIndex * 100;
        track.style.transform = `translateX(${translateX}%)`;
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel();
        });
    }
}

// Altre funzioni...
const rsvpButton = document.querySelector('.rsvp-button');
if (rsvpButton) {
    rsvpButton.addEventListener('click', function() {
        console.log('Conferma Presenza cliccato');
    });
}

const ibanElement = document.querySelector('.bank-value');
if (ibanElement) {
    ibanElement.addEventListener('click', function() {
        navigator.clipboard.writeText(this.textContent.trim()).then(() => {
            alert('IBAN copiato!');
        });
    });
}
