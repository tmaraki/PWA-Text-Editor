/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ (() => {

eval("var butInstall = document.getElementById('buttonInstall'); // Corrected variable name\n\n// Logic for installing the PWA\nvar deferredPrompt;\nwindow.addEventListener('beforeinstallprompt', function (event) {\n  event.preventDefault();\n  deferredPrompt = event;\n  butInstall.style.visibility = 'visible'; // Using correct variable name\n  textHeader.textContent = 'Click the button to install!';\n  butInstall.addEventListener('click', function () {\n    deferredPrompt.prompt();\n    butInstall.setAttribute('disabled', true); // Using correct variable name\n    butInstall.textContent = 'Installed!';\n  });\n});\n\n// TODO: Add a handler for the `appinstalled` event\nwindow.addEventListener('appinstalled', function (event) {\n  textHeader.textContent = 'Successfully installed!';\n  console.log('👍', 'appinstalled', event);\n});\n\n//# sourceURL=webpack://JATE/./src/js/install.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/install.js"]();
/******/ 	
/******/ })()
;