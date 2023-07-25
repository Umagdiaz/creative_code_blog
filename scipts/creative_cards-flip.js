document.querySelectorAll(".cards").forEach(function(card) {
    const flipIcon = card.querySelector(".card__icon-flip");

    flipIcon.addEventListener("click", function() {
        card.classList.toggle("card_flip");
    });
});