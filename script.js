document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", function() {
            const answer = item.querySelector(".faq-answer");

            if (answer.style.display === "none" || answer.style.display === "") {
                answer.style.display = "block";
            } else {
                answer.style.display = "none";
            }
        });
    });

    const loader = document.querySelector('.loader');
    window.addEventListener('load', () => {
        loader.classList.add('loader--hidden');
        loader.addEventListener('transitionend', function() {
            document.body.removeChild(loader);
        });
    });
});
