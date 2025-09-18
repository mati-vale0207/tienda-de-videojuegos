document.querySelectorAll('.card-hover').forEach(card => {
    card.addEventListener('click', () => {
        const text = card.querySelector('.card-text');
        const isVisible = text.style.display === 'block';
        text.style.display = isVisible ? 'none' : 'block';
    });
});