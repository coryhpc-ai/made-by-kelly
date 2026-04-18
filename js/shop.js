function filterProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase().trim();
    const cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Clear search on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        document.getElementById('searchInput').value = '';
        filterProducts();
    }
});