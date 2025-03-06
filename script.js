document.querySelectorAll(".show-more-btn").forEach(button => {
    button.addEventListener("click", () => {
        const details = button.previousElementSibling;
        details.classList.toggle("visible");

        if (details.classList.contains("visible")) {
            button.textContent = "Show Less";
        } else {
            button.textContent = "Show More";
        }
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


