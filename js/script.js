/*========================= toggle icon navbar =========================*/
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
};


/*========================= scroll sections active link =========================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*========================= sticky navbar =========================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*========================= remove toggle icon and navbar when click navbar link (scroll) =========================*/
    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
};

/*========================= scroll reveal =========================*/
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*========================= typed js =========================*/
const typed = new Typed('.multiple-text', {
    strings: ['Fullstack Developer', 'Mobile Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*========================= get email message =========================*/

document.getElementById("contactForm").addEventListener("submit", function(event) {
    let messageValue = document.getElementById("message").value.trim();
    document.getElementById("message_hidden").value = messageValue;
});

/*========================= show popup when mail submited =========================*/

document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    const response = await fetch(this.action, {
        method: this.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        const popup = document.getElementById("successPopup");
        popup.classList.add("visible");

        setTimeout(() => {
            popup.classList.remove("visible");
        }, 3000);

        this.reset();
    }
});

document.getElementById("closePopup").addEventListener("click", function() {
    const popup = document.getElementById("successPopup");
    popup.classList.remove("visible");
});