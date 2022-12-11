"use strict";
exports.id = 665;
exports.ids = [665];
exports.modules = {

/***/ 665:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I8": () => (/* binding */ auth),
/* harmony export */   "db": () => (/* binding */ db),
/* harmony export */   "fZ": () => (/* reexport module object */ firebase_auth__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "lQ": () => (/* reexport module object */ firebase_database__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "rX": () => (/* reexport module object */ firebase_storage__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   "tO": () => (/* binding */ storage)
/* harmony export */ });
/* unused harmony export app */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(745);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(208);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_database__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_database__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const firebaseConfig = {
    apiKey: "AIzaSyDGIQoNHBmyjdiS3YLU_kFoGgyXzVcoM3k",
    authDomain: "proj2022-3cd0d.firebaseapp.com",
    databaseURL: "https://proj2022-3cd0d-default-rtdb.firebaseio.com",
    projectId: "proj2022-3cd0d",
    storageBucket: "proj2022-3cd0d.appspot.com",
    messagingSenderId: "752819259660",
    appId: "1:752819259660:web:ddf40d3d1e980ba343e129",
    measurementId: "G-W209NZMGC6"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const auth = firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth(app);
const db = firebase_database__WEBPACK_IMPORTED_MODULE_2__.getDatabase(app);
const storage = firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage(app);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;