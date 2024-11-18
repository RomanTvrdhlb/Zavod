import vars from "../_vars.js";
import { addCustomClass, removeCustomClass } from "../functions/customFunctions";

const { search } = vars;

document.addEventListener("DOMContentLoaded", () => {

    search && search.forEach((container) => {
        const searchBtn = container.querySelector(".search-form__btn");
        const searchWrapper = container.querySelector(".search-wrapper");

        if (searchBtn && searchWrapper) {
            searchBtn.addEventListener("click", (e) => {
                e.preventDefault();
                addCustomClass(searchWrapper, 'active');
            });
        }
    });

    document.addEventListener("click", (e) => {
        search && search.forEach((container) => {
            const searchWrapper = container.querySelector(".search-wrapper");
            const searchBtn = container.querySelector(".search-form__btn");

            if (searchWrapper && !searchWrapper.contains(e.target) && !searchBtn.contains(e.target)) {
                removeCustomClass(searchWrapper, 'active');
            }
        });
    });
});
