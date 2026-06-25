// Tombol pesan
function orderAlert(menu) {
    alert(
        "Terima kasih telah memilih " +
        menu +
        " 🍦\nPesanan Anda sedang diproses."
    );
}

// Animasi card saat scroll
const cards = document.querySelectorAll(".menu-card");

function revealCards() {
    const trigger = window.innerHeight * 0.85;

    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if (top < trigger) {
            card.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);

// Navbar shadow saat scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow =
            "0 6px 20px rgba(0,0,0,0.12)";
    } else {
        header.style.boxShadow =
            "0 4px 20px rgba(255,182,193,0.2)";
    }
});
