/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction clearPage() {\n    contactBtn.classList.add('buttonBorder');\n    homeBtn.classList.remove('buttonBorder');\n    menuBtn.classList.remove('buttonBorder');\n    homeBtn.disabled = false;               // clearing previous page\n    menuBtn.disabled = false;\n    const homeDiv = document.querySelector(\".homeDiv\");\n    const menuDiv = document.querySelector(\".menuDiv\")\n    if (homeDiv) {\n        main.removeChild(homeDiv);\n    } else if (menuDiv) {\n        main.removeChild(menuDiv);\n    }\n};\n\nconst contactPage = (() => {\n    const contactBtn = document.querySelector(\"#contactBtn\");\n    contactBtn.addEventListener(\"click\", () => {\n        clearPage();\n        \n        if(!(document.querySelector('.footer').classList.contains('positionFooter'))) {\n            document.querySelector('.footer').classList.toggle('positionFooter');\n        }\n\n        contactBtn.disabled = true;\n\n        const contactDiv = document.createElement('div');\n        contactDiv.classList.add(\"contactDiv\");\n\n        let addressDiv = document.createElement('div');\n        addressDiv.classList.add('addressDiv');\n        contactDiv.appendChild(addressDiv);\n        let addressText = document.createElement('p');                      // address card\n        addressText.textContent = \"123 Vancouver Street, LA, California\"\n        let addressIcon = document.createElement('img');\n        addressIcon.src = 'images/location.png';\n        addressDiv.appendChild(addressIcon);\n        addressDiv.appendChild(addressText);\n\n        let findUs = document.createElement('h1');\n        findUs.textContent = \"Find us on: \";\n        contactDiv.appendChild(findUs);\n\n        let iconsDiv = document.createElement('div');\n        contactDiv.appendChild(iconsDiv);\n        iconsDiv.classList.add(\"iconsDiv\");\n\n        let fbButton = document.createElement('button');\n        fbButton.classList.add('fbButton');\n        iconsDiv.appendChild(fbButton);\n\n        let igButton = document.createElement('button');            // social media buttons\n        igButton.classList.add('igButton')\n        iconsDiv.appendChild(igButton);\n\n        let twButton = document.createElement('button');\n        twButton.classList.add('twButton');\n        iconsDiv.appendChild(twButton);\n\n        let reachUs = document.createElement('h1');\n        reachUs.textContent = \"Or reach out at: \"\n        contactDiv.appendChild(reachUs);    \n\n        let phoneDiv = document.createElement('div');\n        phoneDiv.classList.add('phoneDiv');\n        contactDiv.appendChild(phoneDiv);\n\n        let phoneImg = document.createElement('img');\n        phoneImg.src = \"images/phone.png\";\n        let phoneNr = document.createElement('p');          // phone card\n        phoneNr.textContent = \"+ 420 12 34 420\";\n        phoneDiv.appendChild(phoneImg);\n        phoneDiv.appendChild(phoneNr);\n\n        let emailDiv = document.createElement('div');\n        emailDiv.classList.add('emailDiv');\n        contactDiv.appendChild(emailDiv);        \n        let emailImg = document.createElement('img');\n        emailImg.src = 'images/mail.png';                           // email card\n        let email = document.createElement('p');\n        email.textContent = \"travelerstavern@gmail.com\"\n        emailDiv.appendChild(emailImg);\n        emailDiv.appendChild(email);\n        main.appendChild(contactDiv);\n    });\n})();\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage),\n/* harmony export */   \"createHomePage\": () => (/* binding */ createHomePage)\n/* harmony export */ });\nconst content = document.querySelector(\"#content\");\nconst main = document.createElement('main');\nmain.setAttribute(\"id\", \"main\");\n\nfunction clearPage() {\n    menuBtn.disabled = false;\n    contactBtn.disabled = false;\n\n    const menuDiv = document.querySelector(\".menuDiv\")\n    const contactDiv = document.querySelector(\".contactDiv\");\n    if (menuDiv) {\n        main.removeChild(menuDiv);\n    } else if (contactDiv) {\n        main.removeChild(contactDiv);\n    }\n};\n\nfunction createHeaderDiv() {\n    const header = document.createElement('header');\n    header.classList.add('header');\n\n    let title = document.createElement(\"h1\");\n    title.classList.add(\"title\");\n    title.textContent = \"Traveler's Tavern\";\n    header.appendChild(title);\n\n    let navBar = document.createElement('div');\n    header.appendChild(navBar);\n\n    let home = document.createElement('button');\n    home.classList.add(\"button\");\n    home.setAttribute(\"id\",\"homeBtn\");\n    home.textContent = \"Home\";\n    navBar.appendChild(home);\n\n    let menu = document.createElement('button');\n    menu.classList.add(\"button\");\n    menu.setAttribute(\"id\",\"menuBtn\");\n    menu.textContent = \"Menu\";\n    navBar.appendChild(menu);\n    \n    let contact = document.createElement('button');\n    contact.classList.add(\"button\");\n    contact.setAttribute(\"id\",\"contactBtn\");\n    contact.textContent = \"Contact\";\n    navBar.appendChild(contact);\n    \n    content.appendChild(header);\n};\n\nfunction createHomeDiv() {\n    const content = document.querySelector(\"#content\");\n\n    const description = document.createElement('div');\n    description.classList.add('homeDiv');\n    const image = document.createElement('img');\n    image.src = \"images/img.jpg\"\n    description.appendChild(image);\n\n    let para = document.createElement('p');\n    para.textContent = 'Our restaurant offers a unique dining experience with impressive dishes and decorations, transporting you to the medieval times.';\n    para.classList.add('para');\n    description.appendChild(para);\n    content.appendChild(description);\n\n    const orderButton = document.createElement('button');\n    orderButton.textContent = \"Order now !\";\n    orderButton.classList.add('orderBtn');\n    description.appendChild(orderButton);\n\n    main.appendChild(description);\n}\n\nfunction createFooter() {\n    const footer = document.createElement('footer');\n    content.appendChild(footer);\n    footer.classList.add('footer');\n    let para = document.createElement('p')\n    para.textContent = '© Jonthejon10, 2021'\n    footer.appendChild(para)\n    let git_btn = document.createElement('button')\n\n    git_btn.addEventListener('click', () => {\n\t    window.open('https://github.com/Jonthejon10')\n    })\n    \n    git_btn.classList.add('github-button')\n    footer.appendChild(git_btn)\n}\n\n\nfunction createHomePage() {\n\n    if(!(document.querySelector('.footer').classList.contains('positionFooter'))) {\n        document.querySelector('.footer').classList.toggle('positionFooter');\n    }\n    clearPage();\n    createHomeDiv();\n}\n\nconst homePage = (() => {\n    \n    createHeaderDiv();\n    content.appendChild(main);\n    createHomeDiv();\n    const homeBtn = document.querySelector('#homeBtn')\n    homeBtn.classList.add('buttonBorder');\n    createFooter();\n})();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nfunction order() {\n    let orderButton = document.querySelector(\".orderBtn\");\n    let homeDiv = document.querySelector(\".homeDiv\");\n    orderButton.addEventListener('click', () => {\n        homeBtn.disabled = false;\n        contactBtn.disabled = false;\n        menuBtn.disabled = true;\n        main.removeChild(homeDiv);\n        menuBtn.classList.add('buttonBorder');\n        homeBtn.classList.remove('buttonBorder');\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenuPage)();\n    });\n};\n\norder();\n\nhomeBtn.disabled = true;\n\nhomeBtn.addEventListener('click', () => {\n    menuBtn.classList.remove('buttonBorder');\n    homeBtn.classList.add('buttonBorder');\n    contactBtn.classList.remove('buttonBorder')\n    homeBtn.disabled = true;\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();\n    order();\n});\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenuPage\": () => (/* binding */ createMenuPage),\n/* harmony export */   \"menuPage\": () => (/* binding */ menuPage)\n/* harmony export */ });\nconst menuBtn = document.querySelector(\"#menuBtn\");\nconst main = document.querySelector(\"#main\");\n\nfunction clearPage() {\n    contactBtn.classList.remove('buttonBorder');\n    homeBtn.classList.remove('buttonBorder');\n    menuBtn.classList.add('buttonBorder');\n    menuBtn.disabled = true;            // clearing previous page\n    homeBtn.disabled = false;\n    contactBtn.disabled = false;\n    const homeDiv = document.querySelector(\".homeDiv\");\n    const contactDiv = document.querySelector(\".contactDiv\")\n    if (homeDiv) {\n        main.removeChild(homeDiv);\n    } else if (contactDiv) {\n        main.removeChild(contactDiv);\n    }\n};\n\nfunction createMenuPage() {\n    document.querySelector('.footer').classList.toggle('positionFooter')\n    let menuDiv = document.createElement('div');\n    menuDiv.classList.add('menuDiv');\n    main.appendChild(menuDiv);\n\n    let menuItem = document.createElement('div');\n    menuItem.classList.add('menuItem');\n    let menu1Title = document.createElement('h1');\n    menu1Title.textContent = \"Beef & Red Wine Stew\";\n    menuItem.appendChild(menu1Title);\n    let menuItem1Img = document.createElement('img');\n    menuItem1Img.src = \"images/menuItem1.png\"\n    let menu1Description = document.createElement('p');\n    menu1Description.textContent = \"Almond milk, stewing beef, breadcrumbs, red wine, pepper.\";\n    menuItem.appendChild(menuItem1Img);\n    menuItem.appendChild(menu1Description);                 // first menu item\n\n    let menuItem2 = document.createElement('div');\n    menuItem2.classList.add('menuItem');\n    let menu2Title = document.createElement('h1');\n    menu2Title.textContent = \"Steak and Kidney Pie\";\n    menuItem2.appendChild(menu2Title);\n    let menuItem2Img = document.createElement('img');\n    menuItem2Img.src = \"images/menuItem2.png\"\n    let menu2Description = document.createElement('p');\n    menu2Description.textContent = \"Lamb kidney, stew beef, pepper, beef stock, ale, onion, milk.\";\n    menuItem2.appendChild(menuItem2Img);\n    menuItem2.appendChild(menu2Description);                    // second menu item\n\n    let menuItem3 = document.createElement('div');\n    menuItem3.classList.add('menuItem');\n    let menu3Title = document.createElement('h1');\n    menu3Title.textContent = \"Strawberry pie\";\n    menuItem3.appendChild(menu3Title);\n    let menuItem3Img = document.createElement('img');\n    menuItem3Img.src = \"images/menuItem3.png\";\n    let menu3Description = document.createElement('p');\n    menu3Description.textContent = \"Strawberries, honey, lemon curd, lemon juice.\";\n    menuItem3.appendChild(menuItem3Img);\n    menuItem3.appendChild(menu3Description);                    // third menu item\n\n    let menuItem4 = document.createElement('div');\n    menuItem4.classList.add('menuItem');\n    let menu4Title = document.createElement('h1');\n    menu4Title.textContent = \"The Old Bear’s Spiced Wine \";\n    menuItem4.appendChild(menu4Title);\n    let menuItem4Img = document.createElement('img');\n    menuItem4Img.src = \"images/menuItem4.png\";\n    let menu4Description = document.createElement('p');\n    menu4Description.textContent = \"Red wine, honey, cinnamon, ginger, cherries, raisins, almonds.\";\n    menuItem4.appendChild(menuItem4Img);\n    menuItem4.appendChild(menu4Description);                // last menu item\n\n    menuDiv.appendChild(menuItem);\n    menuDiv.appendChild(menuItem2);\n    menuDiv.appendChild(menuItem3);\n    menuDiv.appendChild(menuItem4);\n}\nconst menuPage = (() => {\n    menuBtn.addEventListener(\"click\", () => {\n        clearPage();\n        createMenuPage();\n    });\n\n\n})();\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;