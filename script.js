/* ====== SCRIPT.JS - Animazioni e Interazioni ====== */

// Smooth scroll behavior (già gestito da CSS, ma aggiungiamo JavaScript per maggiore compatibilità)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Pagina caricata - Invito matrimonio Mattia & Lorenza');
    
    // Aggiungi effetto fade-in al caricamento
    document.body.style.opacity = '0';
    setTimeout(function() {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease-in';
    }, 100);
});

// Gestisci il click sul pulsante RSVP con feedback
const rsvpButton = document.querySelector('.rsvp-button');
if (rsvpButton) {
    rsvpButton.addEventListener('click', function(e) {
        // Log per tracking
        console.log('Utente ha cliccato su Conferma Presenza');
    });
}

// Gestisci i link alle mappe
const locationLinks = document.querySelectorAll('.location-link');
locationLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        console.log('Utente apre mappa: ' + this.href);
    });
});

// Rileva se siamo su mobile e ottimizza per touch
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    console.log('Accesso da dispositivo mobile rilevato');
    document.body.classList.add('mobile');
}

// Scroll tracking per analytics (opzionale)
let scrolled = false;
window.addEventListener('scroll', function() {
    if (!scrolled) {
        scrolled = true;
        console.log('Utente ha iniziato a scorrere la pagina');
    }
});

// Copia IBAN al click (opzionale)
const ibanElement = document.querySelector('.bank-value');
if (ibanElement) {
    ibanElement.addEventListener('click', function() {
        const iban = this.textContent;
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
