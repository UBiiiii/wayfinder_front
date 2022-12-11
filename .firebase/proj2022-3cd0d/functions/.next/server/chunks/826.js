"use strict";
exports.id = 826;
exports.ids = [826];
exports.modules = {

/***/ 826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CF": () => (/* binding */ setRooms),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fL": () => (/* binding */ setNodes),
/* harmony export */   "qb": () => (/* binding */ setBles)
/* harmony export */ });
/* unused harmony export roomsSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const roomsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "rooms",
    initialState: {
        datas: [],
        nodes: [],
        bles: [],
        loading: null
    },
    reducers: {
        setRooms: (state, action)=>{
            state.datas = action.payload;
        },
        setNodes: (state, action)=>{
            state.nodes = action.payload;
        },
        setBles: (state, action)=>{
            state.bles = action.payload;
        }
    },
    extraReducers: (builder)=>{
    // builder.addCase(setUser.pending, (state) => {
    //   state.loading = true;
    // });
    // builder.addCase(setUser.fulfilled, (state, action) => {
    //   state.user = action.payload;
    //   state.loading = false;
    // });
    // builder.addCase(login.pending, (state) => {
    //   state.loading = true;
    // });
    // builder.addCase(login.fulfilled, (state) => {
    //   state.loading = false;
    // });
    // builder.addCase(logout.fulfilled, (state) => {
    //   state.user = null;
    // });
    }
});
const { // updateUserTeam,
// updateCurrentTeam,
// addUserProject,
// updateUserProject,
// deleteUserProject,
setRooms , setNodes , setBles ,  } = roomsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (roomsSlice.reducer);


/***/ })

};
;