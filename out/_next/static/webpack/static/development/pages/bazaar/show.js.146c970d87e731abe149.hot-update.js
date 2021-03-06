webpackHotUpdate("static/development/pages/bazaar/show.js",{

/***/ "./components/bazaar/submenu.js":
/*!**************************************!*\
  !*** ./components/bazaar/submenu.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../firebase */ "./firebase.js");
/* harmony import */ var _bid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bid */ "./components/bazaar/bid.js");
/* harmony import */ var _offerfilter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./offerfilter */ "./components/bazaar/offerfilter.js");
/* harmony import */ var _bidfilter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bidfilter */ "./components/bazaar/bidfilter.js");
/* harmony import */ var _offer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./offer */ "./components/bazaar/offer.js");
/* harmony import */ var _css_bazaar_submenu_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../css/bazaar/submenu.css */ "./css/bazaar/submenu.css");
/* harmony import */ var _css_bazaar_submenu_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_css_bazaar_submenu_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _supporter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./supporter */ "./components/bazaar/supporter.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../loader */ "./components/loader.js");


















var SubMenu =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SubMenu, _Component);

  function SubMenu(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SubMenu);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SubMenu).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "initialwidth", function () {
      return window.innerWidth > 750;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleWindowSizeChange", function () {
      _this.setState({
        width: window.innerWidth > 750
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onContentUpdate", function (querySnapShot) {
      var contents = [];
      querySnapShot.forEach(function (doc) {
        var _doc$data = doc.data(),
            name = _doc$data.name,
            price = _doc$data.price,
            description = _doc$data.description,
            tag = _doc$data.tag;

        contents.push({
          name: name,
          price: price,
          description: description,
          tag: tag
        });
      });

      _this.setState({
        contents: contents
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleItemClick", function (e, _ref) {
      var name = _ref.name;

      _this.setState({
        activeItem: name
      });

      _this.state.activeItem === "bids" ? _this.ref1.onSnapshot(_this.onContentUpdate) : _this.ref2.onSnapshot(_this.onContentUpdate);
    });

    _this.state = {
      activeItem: "offers",
      contents: null,
      width: _this.initialwidth
    };
    _this.ref1 = _firebase__WEBPACK_IMPORTED_MODULE_9__["default"].firestore().collection("bazaars/".concat(_this.props.id, "/offers"));
    _this.ref2 = _firebase__WEBPACK_IMPORTED_MODULE_9__["default"].firestore().collection("bazaars/".concat(_this.props.id, "/bids"));
    _this.contents = null;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SubMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.content = this.ref2.onSnapshot(this.onContentUpdate);
      window.addEventListener("resize", this.handleWindowSizeChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.handleWindowSizeChange);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          activeItem = _this$state.activeItem,
          width = _this$state.width;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          margin: "10px"
        }
      }, this.state.contents === null ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_loader__WEBPACK_IMPORTED_MODULE_16__["default"], null) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          display: "flex",
          "flex-direction": "row"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          width: width ? "60%" : "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Menu"], {
        attached: "top",
        tabular: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Menu"].Item, {
        name: "offers",
        active: activeItem === "offers",
        onClick: this.handleItemClick
      }, "Offers")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Segment"], {
        attached: "bottom",
        id: "segment"
      }, this.state.activeItem === "bids" ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_bid__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: this.props.id
      }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_offer__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: this.props.id
      }))), width ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          width: "40%",
          marginLeft: "10px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_supporter__WEBPACK_IMPORTED_MODULE_15__["default"], null)) : null), this.state.activeItem == "bids" ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_bidfilter__WEBPACK_IMPORTED_MODULE_12__["default"], {
        id: this.props.id
      }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_offerfilter__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: this.props.id
      }));
    }
  }]);

  return SubMenu;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SubMenu);

/***/ })

})
//# sourceMappingURL=show.js.146c970d87e731abe149.hot-update.js.map