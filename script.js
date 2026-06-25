// Animasi muncul saat scroll (Scroll Reveal)
const cards = document.querySelectorAll('.menu-card');

const checkCards = () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        
        if(cardTop < triggerBottom) {
            card.classList.add('show');
        }
    });
};

// Jalankan saat pertama dimuat dan saat di-scroll
window.addEventListener('scroll', checkCards);
window.addEventListener('load', checkCards);

// Fungsi interaktif tombol order
function orderAlert(flavor) {
    alert(`Terima kasih! Pesanan Es Krim "${flavor}" sedang disiapkan. 🍦✨`);
}
