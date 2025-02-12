const slider = document.querySelector(".team-slider");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let scrollAmount = 0;
let slideWidth = document.querySelector(".grid").offsetWidth + 20; // Account for margins

// Auto Scroll Function
function autoScroll() {
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0; // Reset to beginning
    } else {
        scrollAmount += slideWidth;
    }
    slider.style.transform = `translateX(-${scrollAmount}px)`;
}

// Set auto-scroll interval
let scrollInterval = setInterval(autoScroll, 2000);

// Click Events
next.addEventListener("click", () => {
    clearInterval(scrollInterval);
    autoScroll();
    scrollInterval = setInterval(autoScroll, 2000);
});

prev.addEventListener("click", () => {
    clearInterval(scrollInterval);
    scrollAmount -= slideWidth;
    if (scrollAmount < 0) scrollAmount = 0;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
    scrollInterval = setInterval(autoScroll, 2000);
});
