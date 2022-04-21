const header = document.querySelector('.header'),
    nav = header.querySelector('.primary-navigation'),
    navToggle = header.querySelector('.mobile-nav-toggle'),
    navItems = header.querySelectorAll('.nav-item > span');
    // features = nav.querySelectorAll('.features-menu');

console.log(navItems);

navToggle.addEventListener('click', () => {
    if (nav.dataset.expanded === "false") {
        nav.dataset.expanded = "true";
        navToggle.dataset.expanded = "true";
        document.body.style.overflow = 'hidden';
    } else {
        nav.dataset.expanded = "false";
        navToggle.dataset.expanded = "false";
        document.body.style.overflow = '';
    }
});

navItems.forEach(span => span.addEventListener('click', (e) => {
    const img = span.querySelector('img');
    const ul = span.parentElement.querySelector('.features-menu');

    if (ul.dataset.expanded === "false") {
        ul.dataset.expanded = "true";
        img.src = "images/icon-arrow-up.svg";
    } else {
        ul.dataset.expanded = "false";
        img.src = "images/icon-arrow-down.svg";
    }
}));