$(document).ready(function() {
    // Add hover effect to images
    $('img').hover(
        function() {
            $(this).css({
                'transform': 'scale(1.05)',
                'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.2)'
            });
        },
        function() {
            $(this).css({
                'transform': 'scale(1)',
                'box-shadow': 'none'
            });
        }
    );

    // Example of adding interactivity, such as form submission handler
    const contactForm = $('form');
    contactForm.on('submit', function(e) {
        e.preventDefault();
        alert('Form submitted! Thank you for contacting me.');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
