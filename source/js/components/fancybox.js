import { Fancybox } from "@fancyapps/ui";

document.addEventListener("DOMContentLoaded", function(e) {
    const items = document.querySelectorAll('[data-fancybox]');
   
    if(items.length > 0){
        Fancybox.bind('[data-fancybox]', {});
    }
})