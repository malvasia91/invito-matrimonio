/* ====== SCRIPT.JS - Countdown, animazioni e interazioni ====== */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Pagina caricata - Invito matrimonio Mattia & Lorenza');
    
    // Effetto fade-in pagina
    document.body.style.opacity = '0';
    setTimeout(function() {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease-in';
    }, 100);

    // Countdown fino al 4 settembre 2026, ore 11:00 (ora locale browser)
    initCountdown();
});

// Countdown function
function initCountdown() {
    const targetDate = new Date(2026, 8, 4, 11, 0, 0); // mesi 0-based: 8 = settembre

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    function updateCountdown() {
        const now = new Date();
        const diff = targetDate.getTime() - now.getTime();

        if (diff <= 0) {
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            clearInterval(intervalId);
            return;
        }

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

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
}

// Tracking click pulsante RSVP
const rsvpButton = document.querySelector('.rsvp-button');
if (rsvpButton) {
    rsvpButton.addEventListener('click', function() {
        console.log('Utente ha cliccato su Conferma Presenza - Google Forms');
    });
}

// Tracking link Wedshots
const wedshotsButton = document.querySelector('.wedshots-button');
if (wedshotsButton) {
    wedshotsButton.addEventListener('click', function() {
        console.log('Utente ha cliccato su Wedshots');
    });
}

// Rileva se siamo su mobile
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    console.log('Accesso da dispositivo mobile rilevato');
    document.body.classList.add('mobile');
}

// Scroll tracking
let scrolled = false;
window.addEventListener('scroll', function() {
    if (!scrolled) {
        scrolled = true;
        console.log('Utente ha iniziato a scorrere la pagina');
    }
});

// Copia IBAN al click
const ibanElement = document.querySelector('.bank-value');
if (ibanElement) {
    ibanElement.addEventListener('click', function() {
        const iban = this.textContent.trim();
        if (navigator.clipboard) {
            navigator.clipboard.writeText(iban).then(function() {
                alert('IBAN copiato negli appunti!');
                console.log('IBAN copiato: ' + iban);
            }).catch(function(err) {
                console.log('Errore nella copia: ' + err);
            });
        }
    });
}

// Carousel Turismo
function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = 0;
    
    function updateCarousel() {
        const translateX = -currentIndex * 100; // ← 100% per slide
        track.style.transform = `translateX(${translateX}%)`;
    }
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });
}

    
    // Auto-play opzionale (commentato)
    // setInterval(() => {
    //     currentIndex = (currentIndex + 1) % slides.length;
    //     updateCarousel();
    // }, 5000);
}

// Inizializza carousel dopo il caricamento
if (document.getElementById('carouselTrack')) {
    initCarousel();
}


