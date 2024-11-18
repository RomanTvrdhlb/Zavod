import vars from '../_vars.js';
import {elementHeight, removeCustomClass, addCustomClass} from '../functions/customFunctions.js';

const {header} = vars;


document.addEventListener("DOMContentLoaded", function () {
    elementHeight(header, 'header-height');
});
