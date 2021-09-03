const menuBtn = document.querySelector("#menuBtn");
const main = document.querySelector("#main");

function clearPage() {
    contactBtn.classList.remove('buttonBorder');
    homeBtn.classList.remove('buttonBorder');
    menuBtn.classList.add('buttonBorder');
    menuBtn.disabled = true;            // clearing previous page
    homeBtn.disabled = false;
    contactBtn.disabled = false;
    const homeDiv = document.querySelector(".homeDiv");
    const contactDiv = document.querySelector(".contactDiv")
    if (homeDiv) {
        main.removeChild(homeDiv);
    } else if (contactDiv) {
        main.removeChild(contactDiv);
    }
};

function createMenuPage() {
    document.querySelector('.footer').classList.toggle('positionFooter')
    let menuDiv = document.createElement('div');
    menuDiv.classList.add('menuDiv');
    main.appendChild(menuDiv);

    let menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');
    let menu1Title = document.createElement('h1');
    menu1Title.textContent = "Beef & Red Wine Stew";
    menuItem.appendChild(menu1Title);
    let menuItem1Img = document.createElement('img');
    menuItem1Img.src = "images/menuItem1.png"
    let menu1Description = document.createElement('p');
    menu1Description.textContent = "Almond milk, stewing beef, breadcrumbs, red wine, pepper.";
    menuItem.appendChild(menuItem1Img);
    menuItem.appendChild(menu1Description);                 // first menu item

    let menuItem2 = document.createElement('div');
    menuItem2.classList.add('menuItem');
    let menu2Title = document.createElement('h1');
    menu2Title.textContent = "Steak and Kidney Pie";
    menuItem2.appendChild(menu2Title);
    let menuItem2Img = document.createElement('img');
    menuItem2Img.src = "images/menuItem2.png"
    let menu2Description = document.createElement('p');
    menu2Description.textContent = "Lamb kidney, stew beef, pepper, beef stock, ale, onion, milk.";
    menuItem2.appendChild(menuItem2Img);
    menuItem2.appendChild(menu2Description);                    // second menu item

    let menuItem3 = document.createElement('div');
    menuItem3.classList.add('menuItem');
    let menu3Title = document.createElement('h1');
    menu3Title.textContent = "Strawberry pie";
    menuItem3.appendChild(menu3Title);
    let menuItem3Img = document.createElement('img');
    menuItem3Img.src = "images/menuItem3.png";
    let menu3Description = document.createElement('p');
    menu3Description.textContent = "Strawberries, honey, lemon curd, lemon juice.";
    menuItem3.appendChild(menuItem3Img);
    menuItem3.appendChild(menu3Description);                    // third menu item

    let menuItem4 = document.createElement('div');
    menuItem4.classList.add('menuItem');
    let menu4Title = document.createElement('h1');
    menu4Title.textContent = "The Old Bear’s Spiced Wine ";
    menuItem4.appendChild(menu4Title);
    let menuItem4Img = document.createElement('img');
    menuItem4Img.src = "images/menuItem4.png";
    let menu4Description = document.createElement('p');
    menu4Description.textContent = "Red wine, honey, cinnamon, ginger, cherries, raisins, almonds.";
    menuItem4.appendChild(menuItem4Img);
    menuItem4.appendChild(menu4Description);                // last menu item

    menuDiv.appendChild(menuItem);
    menuDiv.appendChild(menuItem2);
    menuDiv.appendChild(menuItem3);
    menuDiv.appendChild(menuItem4);
}
const menuPage = (() => {
    menuBtn.addEventListener("click", () => {
        clearPage();
        createMenuPage();
    });


})();


export {
    createMenuPage,
    menuPage
};