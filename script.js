"use strict";

/* =========================
   ORDER ALERT
========================= */
function orderAlert(menu) {
    alert(
        `Terima kasih telah memilih ${menu} 🍦\nPesanan Anda sedang diproses.`
    );
}

/* =========================
   MENU CARD ANIMATION
========================= */
const cards = document.querySelectorAll(".menu-card");

function revealCards() {
    if (!cards.length) return;

    const trigger = window.innerHeight * 0.85;

    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if (top < trigger) {
            card.classList.add("show");
        }
    });
}

/* =========================
   HEADER SHADOW ON SCROLL
========================= */
const header = document.querySelector("header");

function handleHeaderShadow() {
    if (!header) return;

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 6px 20px rgba(0,0,0,0.12)";
    } else {
        header.style.boxShadow = "0 4px 20px rgba(255,182,193,0.2)";
    }
}

/* =========================
   BACKGROUND MUSIC (SAFE)
   - tidak akan error kalau elemen tidak ada
========================= */
const music = document.getElementById("bgMusic");

function tryPlayMusic() {
    if (!music) return;

    music.play().catch(() => {
        console.log("Autoplay diblokir browser, tunggu interaksi user");
    });
}

// Play musik setelah user klik pertama kali
document.addEventListener(
    "click",
    () => {
        tryPlayMusic();
    },
    { once: true }
);

/* =========================
   INIT EVENTS
========================= */
window.addEventListener("scroll", () => {
    revealCards();
    handleHeaderShadow();
});

window.addEventListener("load", () => {
    revealCards();
    handleHeaderShadow();
});
