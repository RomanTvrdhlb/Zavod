import { removeClassInArray, addCustomClass } from "../functions/customFunctions";

document.addEventListener("DOMContentLoaded", function () {
    const infoCards = document.querySelectorAll('.info-card');

    infoCards && infoCards.forEach(function(card){
        const btns = card.querySelectorAll('.info-card__text');

        btns.forEach(function(btn){
            btn.addEventListener('click', function(e){
                e.preventDefault();
                removeClassInArray(btns, 'active');
                addCustomClass(btn, 'active');
            })
        })
    })


    const bestsellersSection = document.querySelector('.bestsellers-section');
    if (!bestsellersSection) return;
  
    const bestsellersBox = bestsellersSection.querySelector('.bestsellers-section__box');
  
    const cards = bestsellersSection.querySelectorAll('.bestsellers-card');
    if (!cards.length) return;
  
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        const bgColor = card.getAttribute('data-bg');
        if (bgColor) {
          bestsellersBox.classList.add('active', bgColor);
        }
      });
  
      card.addEventListener('mouseleave', () => {
        bestsellersBox.classList.remove('active', 'blue', 'olive', 'brown');
      });
    });
});

  