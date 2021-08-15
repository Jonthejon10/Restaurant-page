function clearPage() {
    contactBtn.classList.add('buttonBorder');
    homeBtn.classList.remove('buttonBorder');
    menuBtn.classList.remove('buttonBorder');
    homeBtn.disabled = false;               // clearing previous page
    menuBtn.disabled = false;
    const homeDiv = document.querySelector(".homeDiv");
    const menuDiv = document.querySelector(".menuDiv")
    if (homeDiv) {
        main.removeChild(homeDiv);
    } else if (menuDiv) {
        main.removeChild(menuDiv);
    }
};

const contactPage = (() => {
    const contactBtn = document.querySelector("#contactBtn");
    contactBtn.addEventListener("click", () => {
        clearPage();

        contactBtn.disabled = true;

        const contactDiv = document.createElement('div');
        contactDiv.classList.add("contactDiv");

        let addressDiv = document.createElement('div');
        addressDiv.classList.add('addressDiv');
        contactDiv.appendChild(addressDiv);
        let addressText = document.createElement('p');                      // address card
        addressText.textContent = "123 Vancouver Street, LA, California"
        let addressIcon = document.createElement('img');
        addressIcon.src = 'images/location.png';
        addressDiv.appendChild(addressIcon);
        addressDiv.appendChild(addressText);

        let findUs = document.createElement('h1');
        findUs.textContent = "Find us on: ";
        contactDiv.appendChild(findUs);

        let iconsDiv = document.createElement('div');
        contactDiv.appendChild(iconsDiv);
        iconsDiv.classList.add("iconsDiv");

        let fbButton = document.createElement('button');
        fbButton.classList.add('fbButton');
        iconsDiv.appendChild(fbButton);

        let igButton = document.createElement('button');            // social media buttons
        igButton.classList.add('igButton')
        iconsDiv.appendChild(igButton);

        let twButton = document.createElement('button');
        twButton.classList.add('twButton');
        iconsDiv.appendChild(twButton);

        let reachUs = document.createElement('h1');
        reachUs.textContent = "Or reach out at: "
        contactDiv.appendChild(reachUs);    

        let phoneDiv = document.createElement('div');
        phoneDiv.classList.add('phoneDiv');
        contactDiv.appendChild(phoneDiv);

        let phoneImg = document.createElement('img');
        phoneImg.src = "images/phone.png";
        let phoneNr = document.createElement('p');          // phone card
        phoneNr.textContent = "+ 420 12 34 420";
        phoneDiv.appendChild(phoneImg);
        phoneDiv.appendChild(phoneNr);

        let emailDiv = document.createElement('div');
        emailDiv.classList.add('emailDiv');
        contactDiv.appendChild(emailDiv);        
        let emailImg = document.createElement('img');
        emailImg.src = 'images/mail.png';                           // email card
        let email = document.createElement('p');
        email.textContent = "travelerstavern@gmail.com"
        emailDiv.appendChild(emailImg);
        emailDiv.appendChild(email);
        main.appendChild(contactDiv);
    });
})();


export default contactPage;