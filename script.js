const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.main-nav');
const header = document.querySelector('.header');

mobileNavToggle.addEventListener('click', () => {
    const isVisible = primaryNav.getAttribute('data-visible');

    if (isVisible === 'false' || !isVisible) {
        primaryNav.setAttribute('data-visible', true);
        mobileNavToggle.setAttribute('aria-expanded', true);
        header.setAttribute('data-nav-open', true);
    } else {
        primaryNav.setAttribute('data-visible', false);
        mobileNavToggle.setAttribute('aria-expanded', false);
        header.setAttribute('data-nav-open', false);
    }
});