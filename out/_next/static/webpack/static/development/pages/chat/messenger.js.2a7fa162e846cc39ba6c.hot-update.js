webpackHotUpdate("static/development/pages/chat/messenger.js",{

/***/ "./components/chat/bidingcard.js":
/*!***************************************!*\
  !*** ./components/chat/bidingcard.js ***!
  \***************************************/
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











var BidCard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(BidCard, _Component);

  function BidCard() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BidCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BidCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      image: "",
      message: _this.props.message
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BidCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _firebase__WEBPACK_IMPORTED_MODULE_9__["default"].storage().ref(this.props.message.url).getDownloadURL().then(function (url) {
        _this2.setState({
          image: url
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        style: {
          margin: "10px",
          float: "right"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Card"].Content, {
        style: {
          display: "flex",
          justifyContent: "center"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, "Biding")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Card"].Content, null, this.state.image === "" ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Placeholder"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Placeholder"].Image, {
        rectangular: true
      })) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        src: this.state.image
      }), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Card"].Header, {
        style: {
          marginTop: "10px"
        }
      }, this.state.message.productname), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Card"].Meta, {
        style: {
          display: "inline"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strike", null, "$", this.state.message.actualprice)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        style: {
          display: "inline",
          marginLeft: "10px"
        }
      }, "$", this.state.message.price)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Card"].Content, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, " Status : ", this.state.message.status)));
    }
  }]);

  return BidCard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BidCard);

/***/ }),

/***/ "./pages/chat/bidingcard.js":
false,

/***/ "./pages/chat/messenger.js":
/*!*********************************!*\
  !*** ./pages/chat/messenger.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_chat_bidingcard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/chat/bidingcard */ "./components/chat/bidingcard.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../firebase */ "./firebase.js");














var Messenger =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Messenger, _Component);

  function Messenger(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Messenger);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Messenger).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "scrollToBottom", function () {
      _this.messagesEnd.scrollIntoView({
        behavior: "smooth"
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onMessageUpdate", function (querySnapshot) {
      try {
        var _querySnapshot$data = querySnapshot.data(),
            messages = _querySnapshot$data.messages,
            customername = _querySnapshot$data.customername,
            storename = _querySnapshot$data.storename;

        _this.setState({
          messages: messages,
          storename: storename,
          customername: customername
        });
      } catch (err) {
        console.log(err);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleProductSelect", function (e, _ref) {
      var value = _ref.value;

      var _this$state$products$ = _this.state.products.find(function (product) {
        return product.value == value;
      }),
          text = _this$state$products$.text,
          price = _this$state$products$.price,
          tag = _this$state$products$.tag,
          productid = _this$state$products$.productid,
          url = _this$state$products$.url;

      _this.setState({
        product: text,
        actualprice: price,
        price: "",
        quantity: 1,
        tag: tag,
        productid: productid,
        url: url
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleClose", function () {
      _this.setState({
        modal: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleOnChange", function (e) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, e.target.name, e.target.value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSend", function () {
      _this.setState({
        loading: true
      });

      var user = localStorage.getItem("userid");
      _firebase__WEBPACK_IMPORTED_MODULE_12__["default"].firestore().collection("users/".concat(user, "/chat")).doc(_this.props.id).get().then(function (doc) {
        var _doc$data = doc.data(),
            messages = _doc$data.messages;

        if (messages === undefined) {
          messages = [];
          messages.push({
            from: "me",
            message: _this.state.message
          });
        } else {
          messages.push({
            from: "me",
            message: _this.state.message
          });
        }

        _firebase__WEBPACK_IMPORTED_MODULE_12__["default"].firestore().collection("users/".concat(user, "/chat")).doc(_this.props.id).set({
          messages: messages
        }, {
          merge: true
        });
      }).then(function () {
        _this.setState({
          loading: false,
          message: ""
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleBid", function () {
      _this.setState({
        modal: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "submitBid", function () {
      _this.setState({
        loading: true
      });

      var user = localStorage.getItem("userid");
      _firebase__WEBPACK_IMPORTED_MODULE_12__["default"].firestore().collection("users").doc(user).get().then(function (doc) {
        var _doc$data2 = doc.data(),
            address = _doc$data2.address;

        _firebase__WEBPACK_IMPORTED_MODULE_12__["default"].firestore().collection("users/".concat(user, "/chat")).doc(_this.props.id).get().then(function (doc) {
          var _doc$data3 = doc.data(),
              messages = _doc$data3.messages;

          if (messages === undefined) {
            messages = [];
            messages.push({
              from: "me",
              message: "bid",
              price: _this.state.price,
              actualprice: _this.state.actualprice,
              total: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(_this.state.price) * _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(_this.state.quantity),
              quantity: _this.state.quantity,
              productname: _this.state.product,
              url: _this.state.url,
              productid: _this.state.productid,
              tag: _this.state.tag,
              address: address,
              customername: _this.state.customername
            });
          } else {
            messages.push({
              from: "me",
              message: "bid",
              price: _this.state.price,
              productname: _this.state.product,
              actualprice: _this.state.actualprice,
              total: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(_this.state.price) * _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(_this.state.quantity),
              quantity: _this.state.quantity,
              url: _this.state.url,
              status: "Pending",
              productid: _this.state.productid,
              tag: _this.state.tag,
              address: address,
              customername: _this.state.customername
            });
          }

          _firebase__WEBPACK_IMPORTED_MODULE_12__["default"].firestore().collection("users/".concat(user, "/chat")).doc(_this.props.id).set({
            messages: messages
          }, {
            merge: true
          });
        }).then(function () {
          _this.setState({
            loading: false,
            message: "",
            modal: false
          });
        });
      });
    });

    _this.state = {
      messages: [],
      loading: false,
      customername: "",
      message: "",
      modal: false,
      product: "",
      storename: "",
      products: [],
      price: "",
      actualprice: "",
      quantity: 0,
      productid: 0,
      tag: "",
      url: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Messenger, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToBottom();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var userid = localStorage.getItem("userid");
      _firebase__WEBPACK_IMPORTED_MODULE_12__["default"].firestore().collection("users/".concat(userid, "/chat")).doc(this.props.id).onSnapshot(this.onMessageUpdate);
      _firebase__WEBPACK_IMPORTED_MODULE_12__["default"].firestore().collection("stores").doc(this.props.id).get().then(function (doc) {
        var _doc$data4 = doc.data(),
            products = _doc$data4.products;

        var temp = [],
            key = 0;
        products.forEach(function (product) {
          temp.push({
            key: key,
            value: product.productname,
            text: product.productname,
            price: product.price,
            url: product.url,
            tag: product.tag,
            productid: product.productid
          });
          key++;
        });

        _this2.setState({
          products: temp
        });
      });
      this.scrollToBottom();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "MyDivElement",
        style: {
          height: "79vh",
          overflowY: "auto",
          marginLeft: "10px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Divider"], {
        horizontal: true,
        style: {
          margin: "10px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Header"], {
        as: "h3"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
        name: "chat"
      }), this.state.storename)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["List"], null, this.state.messages === undefined ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Label"], null, "Now you can chat and bid to ", this.state.storename) : this.state.messages.map(function (message, index) {
        if (message.from === "me") {
          if (message.message === "bid") {
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_chat_bidingcard__WEBPACK_IMPORTED_MODULE_10__["default"], {
              message: message,
              style: {
                float: "right"
              }
            }));
          } else {
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["List"].Item, {
              key: index
            }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
              style: {
                padding: "10px",
                color: "white",
                backgroundColor: "#5CB3FF",
                float: "right",
                margin: "5px",
                borderRadius: "10px"
              }
            }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", null, message.message)));
          }
        } else {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["List"].Item, {
            key: index
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            style: {
              padding: "10px",
              color: "white",
              backgroundColor: "#8D38C9",
              float: "left",
              margin: "5px",
              borderRadius: "10px"
            }
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", null, message.message)));
        }
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          float: "left",
          clear: "both"
        },
        ref: function ref(el) {
          _this3.messagesEnd = el;
        }
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["TextArea"], {
        name: "message",
        placeholder: "Enter your message",
        value: this.state.message,
        onChange: this.handleOnChange,
        style: {
          width: "90%",
          marginLeft: "5px",
          height: "10vh"
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        color: "green",
        style: {
          display: "inline",
          height: "30px",
          width: "70px",
          marginLeft: "5px"
        },
        loading: this.state.loading,
        onClick: this.handleSend
      }, "Send"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        color: "violet",
        style: {
          width: "70px",
          marginLeft: "5px",
          height: "30px",
          marginTop: "5px"
        },
        onClick: this.handleBid
      }, "Bid"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Modal"], {
        open: this.state.modal,
        onClose: this.handleClose
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Modal"].Header, null, "Bid"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Modal"].Content, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Field, {
        name: "product",
        control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Dropdown"],
        label: "Product name",
        value: this.state.product,
        onChange: this.handleProductSelect,
        placeholder: "Please select product",
        clearable: true,
        selection: true,
        search: true,
        options: this.state.products,
        required: true
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Field, {
        name: "actualprice",
        control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Input"],
        label: "Actual Price",
        value: this.state.actualprice,
        onChange: this.handleOnChange,
        placeholder: "Please select product to view price",
        disabled: true
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Field, {
        name: "price",
        control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Input"],
        label: "Price",
        value: this.state.price,
        onChange: this.handleOnChange,
        placeholder: "Enter the price to bid",
        required: true
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Field, {
        name: "quantity",
        control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Input"],
        label: "Quantity",
        value: this.state.quantity,
        onChange: this.handleOnChange,
        placeholder: "Enter the quantity",
        required: true
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Modal"].Actions, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        style: {
          float: "left"
        }
      }, "Biding price: $", this.state.price), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        onClick: this.submitBid,
        color: "green",
        loading: this.state.loading
      }, "Submit Bid"))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(props) {
      var id = props.query.id;
      return {
        id: id
      };
    }
  }]);

  return Messenger;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Messenger);

/***/ })

})
//# sourceMappingURL=messenger.js.2a7fa162e846cc39ba6c.hot-update.js.map