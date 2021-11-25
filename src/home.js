const content = document.querySelector("#content");
const main = document.createElement('main');
main.setAttribute("id", "main");

function clearPage() {
    menuBtn.disabled = false;
    contactBtn.disabled = false;

    const menuDiv = document.querySelector(".menuDiv")
    const contactDiv = document.querySelector(".contactDiv");
    if (menuDiv) {
        main.removeChild(menuDiv);
    } else if (contactDiv) {
        main.removeChild(contactDiv);
    }
};

function createHeaderDiv() {
    const header = document.createElement('header');
    header.classList.add('header');

    let title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Traveler's Tavern";
    header.appendChild(title);

    let navBar = document.createElement('div');
    header.appendChild(navBar);

    let home = document.createElement('button');
    home.classList.add("button");
    home.setAttribute("id","homeBtn");
    home.textContent = "Home";
    navBar.appendChild(home);

    let menu = document.createElement('button');
    menu.classList.add("button");
    menu.setAttribute("id","menuBtn");
    menu.textContent = "Menu";
    navBar.appendChild(menu);
    
    let contact = document.createElement('button');
    contact.classList.add("button");
    contact.setAttribute("id","contactBtn");
    contact.textContent = "Contact";
    navBar.appendChild(contact);
    
    content.appendChild(header);
};

function createHomeDiv() {
    const content = document.querySelector("#content");

    const description = document.createElement('div');
    description.classList.add('homeDiv');
    const image = document.createElement('img');
    image.src = "images/img.jpg"
    description.appendChild(image);

    let para = document.createElement('p');
    para.textContent = 'Our restaurant offers a unique dining experience with impressive dishes and decorations, transporting you to the medieval times.';
    para.classList.add('para');
    description.appendChild(para);
    content.appendChild(description);

    const orderButton = document.createElement('button');
    orderButton.textContent = "Order now !";
    orderButton.classList.add('orderBtn');
    description.appendChild(orderButton);

    main.appendChild(description);
}

function createFooter() {
    const footer = document.createElement('footer');
    content.appendChild(footer);
    footer.classList.add('footer');
    let para = document.createElement('p')
    para.textContent = '© Jonthejon10, 2021'
    footer.appendChild(para)
    let git_btn = document.createElement('button')

    git_btn.addEventListener('click', () => {
	    window.open('https://github.com/Jonthejon10')
    })
    
    git_btn.classList.add('github-button')
    footer.appendChild(git_btn)
}


function createHomePage() {

    if(!(document.querySelector('.footer').classList.contains('positionFooter'))) {
        document.querySelector('.footer').classList.toggle('positionFooter');
    }
    clearPage();
    createHomeDiv();
}

const homePage = (() => {
    
    createHeaderDiv();
    content.appendChild(main);
    createHomeDiv();
    const homeBtn = document.querySelector('#homeBtn')
    homeBtn.classList.add('buttonBorder');
    createFooter();
})();

export {
    homePage,
    createHomePage
}