// /assets/js/script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.main-sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Auto-price calculator simulation
    const pagesInput = document.getElementById('pages');
    const deadlineInput = document.getElementById('deadline');
    const priceDisplay = document.getElementById('price-display');

    function calculatePrice() {
        if (!pagesInput || !deadlineInput || !priceDisplay) return;

        const pages = parseInt(pagesInput.value) || 0;
        const deadline = new Date(deadlineInput.value);
        const today = new Date();
        const daysUntilDeadline = (deadline - today) / (1000 * 60 * 60 * 24);

        let pricePerPage = 10; // Base price

        // Urgency charges
        if (daysUntilDeadline < 3) {
            pricePerPage = 20;
        } else if (daysUntilDeadline < 7) {
            pricePerPage = 15;
        }

        const totalPrice = pages * pricePerPage;
        
        if (totalPrice > 0) {
            priceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
        } else {
            priceDisplay.textContent = '$0.00';
        }
    }

    if (pagesInput) pagesInput.addEventListener('input', calculatePrice);
    if (deadlineInput) deadlineInput.addEventListener('change', calculatePrice);

});