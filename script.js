document.querySelectorAll('.show-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.previousElementSibling; // Select details paragraph
        const projectCard = button.closest('.project'); // Select full project card
        
        details.classList.toggle('hidden');
        projectCard.classList.toggle('expanded'); // Expand card

        // Smooth Show/Hide Effect
        if (!details.classList.contains('hidden')) {
            details.style.display = 'block';
            setTimeout(() => details.style.opacity = '1', 10);
        } else {
            details.style.opacity = '0';
            setTimeout(() => details.style.display = 'none', 300);
        }

        button.textContent = details.classList.contains('hidden') ? 'Show More' : 'Show Less';
    });
});



document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute("href").substring(1); // Get section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust offset for header
                    behavior: "smooth" // Smooth scrolling effect
                });
            }
        });
    });
});


