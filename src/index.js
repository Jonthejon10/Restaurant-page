import {homePage, createHomePage} from "./home"
import {menuPage, createMenuPage} from "./menu"
import contactPage from "./contact";


function order() {
    let orderButton = document.querySelector(".orderBtn");
    let homeDiv = document.querySelector(".homeDiv");
    orderButton.addEventListener('click', () => {
        homeBtn.disabled = false;
        contactBtn.disabled = false;
        menuBtn.disabled = true;
        main.removeChild(homeDiv);
        menuBtn.classList.add('buttonBorder');
        homeBtn.classList.remove('buttonBorder');
        createMenuPage();
    });
};

order();

homeBtn.disabled = true;

homeBtn.addEventListener('click', () => {
    menuBtn.classList.remove('buttonBorder');
    homeBtn.classList.add('buttonBorder');
    contactBtn.classList.remove('buttonBorder')
    homeBtn.disabled = true;
    createHomePage();
    order();
});

