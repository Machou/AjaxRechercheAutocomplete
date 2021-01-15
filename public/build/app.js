(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autocomplete */ "./assets/autocomplete.js");
/* harmony import */ var _autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_autocomplete__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.scss in this case)
 // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.





/***/ }),

/***/ "./assets/autocomplete.js":
/*!********************************!*\
  !*** ./assets/autocomplete.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

document.getElementById('searchField').addEventListener('input', function (event) {
  var query = event.target.value;
  fetch('http://localhost:8000/programs/autocomplete?q=' + query).then(function (response) {
    return response.json();
  }).then(function (json) {
    var resultHtml = "";
    json.forEach(function (element) {
      console.log(element);
      resultHtml = resultHtml + "\n                <li><a href=\"/programs/".concat(element.id, "\"/>").concat(element.title, "</a></li>\n            ");
    });
    document.querySelector('#autocomplete').innerHTML = resultHtml;
  })["catch"](function () {
    return alert('error');
  });
});

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hdXRvY29tcGxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicXVlcnkiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdEh0bWwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInRpdGxlIiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Q0FHQTs7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkFBLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixFQUF1Q0MsZ0JBQXZDLENBQXdELE9BQXhELEVBQWlFLFVBQVNDLEtBQVQsRUFBZ0I7QUFDN0UsTUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsS0FBM0I7QUFDQUMsT0FBSyxDQUFDLG1EQUFtREgsS0FBcEQsQ0FBTCxDQUNLSSxJQURMLENBQ1UsVUFBQUMsUUFBUTtBQUFBLFdBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsR0FEbEIsRUFFS0YsSUFGTCxDQUVVLFVBQUFFLElBQUksRUFBSTtBQUNWLFFBQUlDLFVBQVUsR0FBRyxFQUFqQjtBQUNBRCxRQUFJLENBQUNFLE9BQUwsQ0FBYSxVQUFBQyxPQUFPLEVBQUk7QUFDcEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBQ0FGLGdCQUFVLEdBQUdBLFVBQVUsdURBQ0VFLE9BQU8sQ0FBQ0csRUFEVixpQkFDa0JILE9BQU8sQ0FBQ0ksS0FEMUIsNEJBQXZCO0FBR0gsS0FMRDtBQU1BakIsWUFBUSxDQUFDa0IsYUFBVCxDQUF1QixlQUF2QixFQUF3Q0MsU0FBeEMsR0FBb0RSLFVBQXBEO0FBQ0gsR0FYTCxXQVlXO0FBQUEsV0FBTVMsS0FBSyxDQUFDLE9BQUQsQ0FBWDtBQUFBLEdBWlg7QUFhSCxDQWZELEU7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuc2NzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byBpbXBvcnQgaXQuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5cbmltcG9ydCAnLi9hdXRvY29tcGxldGUnXG5cbiIsImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hGaWVsZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBjb25zdCBxdWVyeSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL3Byb2dyYW1zL2F1dG9jb21wbGV0ZT9xPScgKyBxdWVyeSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHRIdG1sID0gXCJcIjtcbiAgICAgICAgICAgIGpzb24uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KVxuICAgICAgICAgICAgICAgIHJlc3VsdEh0bWwgPSByZXN1bHRIdG1sICsgYFxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL3Byb2dyYW1zLyR7ZWxlbWVudC5pZH1cIi8+JHtlbGVtZW50LnRpdGxlfTwvYT48L2xpPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F1dG9jb21wbGV0ZScpLmlubmVySFRNTCA9IHJlc3VsdEh0bWw7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiBhbGVydCgnZXJyb3InKSk7XG59KTtcblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9