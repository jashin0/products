document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting immediately

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // Simulate form submission
        alert('Thank you for your message, ' + name + '! We will get back to you soon.');
        form.reset(); // Reset form fields after submission
    });

    // Add animations on page load
    $(window).on('load', function() {
        $('.grid-item').each(function(index) {
            $(this).delay(index * 200).animate({
                opacity: 1,
                top: 0
            }, 500);
        });
    });
});
