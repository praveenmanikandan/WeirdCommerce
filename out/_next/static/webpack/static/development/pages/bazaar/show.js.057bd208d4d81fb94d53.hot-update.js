webpackHotUpdate("static/development/pages/bazaar/show.js",{

/***/ "./components/bazaar/offerfilter.js":
/*!******************************************!*\
  !*** ./components/bazaar/offerfilter.js ***!
  \******************************************/
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
/* harmony import */ var _offercard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./offercard */ "./components/bazaar/offercard.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../firebase */ "./firebase.js");












var OfferFileter =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(OfferFileter, _Component);

  function OfferFileter(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OfferFileter);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(OfferFileter).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onOfferUpdate", function (querySnapshot) {
      var offers = [];
      querySnapshot.forEach(function (doc) {
        var _doc$data = doc.data(),
            name = _doc$data.name,
            url = _doc$data.url,
            price = _doc$data.price,
            tag = _doc$data.tag,
            description = _doc$data.description,
            store = _doc$data.store,
            userid = _doc$data.userid,
            shopname = _doc$data.shopname;

        var id = doc.id;
        offers.push({
          id: id,
          name: name,
          url: url,
          price: price,
          // DocumentSnapshot
          tag: tag,
          store: store,
          userid: userid,
          description: description,
          shopname: shopname
        });
      });

      _this.setState({
        offers: offers
      });
    });

    _this.state = {
      offers: []
    };
    _this.offers = null;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(OfferFileter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _firebase__WEBPACK_IMPORTED_MODULE_10__["default"].firestore().collection("bazaars/".concat(this.props.id, "/offers")).onSnapshot(this.onOfferUpdate);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          paddingTop: "10px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "#DCDCDC"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Item"].Group, {
        divided: true,
        style: {
          marginRight: "20px"
        }
      }, this.state.offers.map(function (offer) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_offercard__WEBPACK_IMPORTED_MODULE_8__["default"], {
          key: offer.id,
          name: offer.name,
          price: offer.price,
          tag: offer.tag,
          description: offer.description,
          store: offer.store,
          userid: offer.userid,
          shopname: offer.shopname,
          url: offer.url
        });
      }))));
    }
  }]);

  return OfferFileter;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (OfferFileter);

/***/ })

})
//# sourceMappingURL=show.js.057bd208d4d81fb94d53.hot-update.js.map