const body = document.querySelector('body'),
    header = body.querySelector('.header'),
    nav = header.querySelector('.nav'),
    navToggle = nav.querySelector('.nav-toggle'),
    navItems = body.querySelectorAll('.nav-links li a');

// window.addEventListener('click', (e) => {
//     if (!e.target.matches('[role="list"]')) {
//         let li = document.querySelector('[role="list"]').parentElement;
        
//         if (li.classList.contains('opened')) {
//             li.classList.remove('opened');
//         }
//     }
// });

navToggle.addEventListener('click', () => {
    nav.classList.toggle('opened');
    body.classList.toggle('overflow-hidden');
});

navItems.forEach(link => link.addEventListener('click', (e) => {
    
    let arrow = e.target.querySelector('img');

    // link.parentElement.classList.toggle('opened');

    if (link.parentElement.classList.contains('opened')) {
        link.parentElement.classList.remove('opened');
        arrow.src = "/images/icon-arrow-down.svg";
    } else {
        link.parentElement.classList.add('opened');
        arrow.src = "/images/icon-arrow-up.svg";
    }
}));