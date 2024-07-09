document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            scrollToElement(targetElement);
        });
    });

    function scrollToElement(element) {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: element.offsetTop
        });
    }
});
