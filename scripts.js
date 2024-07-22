document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all sections
            sections.forEach(section => section.classList.remove('active'));

            // Add 'active' class to the clicked section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.classList.add('active');
        });
    });
});
