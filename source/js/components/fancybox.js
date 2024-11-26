import { Fancybox } from "@fancyapps/ui";

document.addEventListener("DOMContentLoaded", function(e) {
    const items = document.querySelectorAll('[data-fancybox]');
   
    if(items.length > 0){
        Fancybox.bind('[data-fancybox]', {});
    }
})

if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
    const errorImage = document.querySelector('.error-section__image');
    if (errorImage) {
      errorImage.classList.add('safari-fallback');
    }
  }
  