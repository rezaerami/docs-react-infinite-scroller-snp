(this["webpackJsonpreact-infinite-scroller-snp-docs"] = this["webpackJsonpreact-infinite-scroller-snp-docs"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/resources/styles/styles.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/resources/styles/styles.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html, body {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n.container {\r\n    width: 720px;\r\n    max-width: 100%;\r\n    margin: 0 auto;\r\n}\r\n.container > section {\r\n    margin-top: 50px;\r\n}\r\n.container h2 {\r\n    font-size: 18px;\r\n    font-weight: normal;\r\n}\r\n.container a {\r\n    color: #4970ae;\r\n    text-decoration: none;\r\n}\r\n\r\n.counter {\r\n    font-size: 20px;\r\n    text-align: center;\r\n}\r\n.content {\r\n    width: 600px;\r\n    max-width: 100%;\r\n    margin: 50px auto 0;\r\n}\r\n.article {\r\n    border-bottom: solid 2px #ededed;\r\n    padding-bottom: 20px;\r\n    margin-bottom: 30px;\r\n}\r\n.article h3 {\r\n    margin-top: 0;\r\n}\r\n.article p {\r\n    margin-top: 10px;\r\n    margin-bottom: 0;\r\n    line-height: 1.8;\r\n}\r\n.header {\r\n    background-color: #ededed;\r\n    text-align: center;\r\n    padding: 20px\r\n}\r\n.header a {\r\n    text-decoration: none;\r\n}\r\n.header a >img {\r\n    width: 300px;\r\n    max-width: 100%;\r\n}\r\n.navigation {\r\n    background-color: #7b80ae;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.navigation a {\r\n    text-decoration: none;\r\n    color: #fafafa;\r\n    padding: 10px;\r\n    margin: 0 10px;\r\n    font-size: 18px;\r\n}\r\n.navigation a.active {\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n.doc-links {\r\n    text-align: center;\r\n    margin-top: 30px;\r\n    border-bottom: solid 2px #ededed;\r\n    padding-bottom: 10px\r\n}\r\n.doc-links a {\r\n    padding: 10px;\r\n    margin: 0 5px;\r\n    color: #4970ae;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n}\r\n\r\n.separator {\r\n    border-bottom: solid 2px #ededed;\r\n    margin: 20px 0;\r\n}", ""]);


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/Layout */ "./src/component/Layout/index.js");
/* harmony import */ var _component_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/Home */ "./src/component/Home/index.js");
/* harmony import */ var _component_Docs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/Docs */ "./src/component/Docs/index.js");
/* harmony import */ var _component_InfiniteScroller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/InfiniteScroller */ "./src/component/InfiniteScroller/index.js");
/* harmony import */ var _resources_styles_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources/styles/styles.css */ "./src/resources/styles/styles.css");
/* harmony import */ var _resources_styles_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_resources_styles_styles_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Roach\\Desktop\\react-infinite-scroller-docs\\src\\App.js";








const App = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["HashRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "/examples/element",
  exact: true,
  component: _component_InfiniteScroller__WEBPACK_IMPORTED_MODULE_5__["ElementInfiniteScroller"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "/examples/window",
  exact: true,
  component: _component_InfiniteScroller__WEBPACK_IMPORTED_MODULE_5__["WindowInfiniteScroller"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "/docs",
  exact: true,
  component: _component_Docs__WEBPACK_IMPORTED_MODULE_4__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "/",
  exact: true,
  component: _component_Home__WEBPACK_IMPORTED_MODULE_3__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}))));

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/component/Docs/index.js":
/*!*************************************!*\
  !*** ./src/component/Docs/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/index.js");
/* harmony import */ var react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/styles/prism */ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "C:\\Users\\Roach\\Desktop\\react-infinite-scroller-docs\\src\\component\\Docs\\index.js";





const Docs = () => {
  const handleScroll = id => window.scrollTo(0, document.getElementById(id).offsetTop);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "doc-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/docs",
    onClick: () => handleScroll('useElementScroller'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "useElementScroller"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/docs",
    onClick: () => handleScroll('useWindowScroller'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "useWindowScroller")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "useElementScroller",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "useElementScroller"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "useElementScroller makes a component call a function each time that it reaches to the end.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "API"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "ref (reference) : "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "reference to the element")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "fn (function) : "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "function to call, when scroll of the element reaches to the bottom")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "threshold [number] : "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "threshold to call given function before reaching to the end, default is 100"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["Prism"], {
    language: "javascript",
    style: react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_2__["dark"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, `useElementScroll(ref, fn, threshold);`)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Usage"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Step 1: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Component")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Have a component that contains your scrollable element, element should has a ref"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["Prism"], {
    language: "javascript",
    style: react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_2__["dark"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, `import React, {useRef} from 'react';
const foo = () => {
    const elementRef = useRef;
    const handleScroll = () => console.log("load more");
    return (
        <div ref={elementRef}>
            // content goes here
        </div>
    )
}
export default Foo`)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "Step 2: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "Import useElementScroll hook")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["Prism"], {
    language: "javascript",
    style: react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_2__["dark"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, `import {useElementScroll} from 'react-infinite-scroller-snp';`)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "Step 3: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "Call useElementScroll")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "Call useElementScroll hook with element ref"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["Prism"], {
    language: "javascript",
    style: react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_2__["dark"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, `import React, {useRef} from 'react';
import {useElementScroll} from 'react-infinite-scroller-snp';

const foo = () => {
    const elementRef = useRef;
    useElementScroll(elementRef, handleScroll, 100);
    
    const handleScroll = () => console.log("load more");
    return (
        <div ref={elementRef}>
            // content goes here
        </div>
    )
}
export default Foo`)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, "Demo: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/examples/element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, "click here to see the demo"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "separator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "useWindowScroller",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, "useWindowScroller"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, "useWindowScroller makes the window call a function each time that it reaches to the end.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, "API"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, "fn (function) : "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "function to call, when scroll of the window reaches to the bottom")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, "threshold [number] : "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, "threshold to call given function before reaching to the end, default is 100"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["Prism"], {
    language: "javascript",
    style: react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_2__["dark"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, `useWindowScroll(fn, threshold);`)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, "Usage"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, "Step 1: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, "Component")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, "Have a component that contains your element"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["Prism"], {
    language: "javascript",
    style: react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_2__["dark"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, `import React from 'react';
  const foo = () => {
      const handleScroll = () => console.log("load more");
      return (
          <div>
              // content goes here
          </div>
      )
  }
  export default Foo`)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, "Step 2: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, "Import useWindowScroll hook")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["Prism"], {
    language: "javascript",
    style: react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_2__["dark"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, `import {useWindowScroll} from 'react-infinite-scroller-snp';`)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, "Step 3: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, "Call useWindowScroll")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, "Call useWindowScroll hook"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["Prism"], {
    language: "javascript",
    style: react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_2__["dark"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, `import React from 'react';
import {useWindowScroll} from 'react-infinite-scroller-snp';

const foo = () => {
    useWindowScroll(handleScroll, 100);
    
    const handleScroll = () => console.log("load more");
    return (
        <div>
            // content goes here
        </div>
    )
}
export default Foo`)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, "Demo: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/examples/window",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }, "click here to see the demo"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Docs);

/***/ }),

/***/ "./src/component/Home/index.js":
/*!*************************************!*\
  !*** ./src/component/Home/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/index.js");
/* harmony import */ var react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/styles/prism */ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/index.js");
var _jsxFileName = "C:\\Users\\Roach\\Desktop\\react-infinite-scroller-docs\\src\\component\\Home\\index.js";




const Home = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "Step 1: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Install it")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "Install react-infinite-scroller-snp using npm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["Prism"], {
  language: "javascript",
  style: react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_2__["dark"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "npm install --save react-infinite-scroller-snp")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "Step 2: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "Import it")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, "Import it into your component"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["Prism"], {
  language: "javascript",
  style: react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_2__["dark"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, `import {useElementScroll, useWindowScroll} from 'react-infinite-scroller-snp';`)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, "Step 3: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, "Use it")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, "Make window or an element call a function each time that it reaches to the end of the page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["Prism"], {
  language: "javascript",
  style: react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_2__["dark"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, `useElementScroll(elementRef, fn, threshold);
useWindowScroll(fn, threshold);`)));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/component/InfiniteScroller/ElementInfiniteScroller.js":
/*!*******************************************************************!*\
  !*** ./src/component/InfiniteScroller/ElementInfiniteScroller.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Roach_Desktop_react_infinite_scroller_docs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_infinite_scroller_snp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-infinite-scroller-snp */ "./node_modules/react-infinite-scroller-snp/index.js");
/* harmony import */ var _Partials_Article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Partials/Article */ "./src/component/InfiniteScroller/Partials/Article.js");
/* harmony import */ var _Partials_Counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Partials/Counter */ "./src/component/InfiniteScroller/Partials/Counter.js");

var _jsxFileName = "C:\\Users\\Roach\\Desktop\\react-infinite-scroller-docs\\src\\component\\InfiniteScroller\\ElementInfiniteScroller.js";





const ElementInfiniteScroller = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(10),
        _useState2 = Object(C_Users_Roach_Desktop_react_infinite_scroller_docs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        itemsCount = _useState2[0],
        setItemsCount = _useState2[1];

  const itemsListRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react_infinite_scroller_snp__WEBPACK_IMPORTED_MODULE_2__["useElementScroll"])(itemsListRef, () => {
    setTimeout(() => setItemsCount(itemsCount + 1), 500);
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "content",
    ref: itemsListRef,
    style: {
      height: '400px',
      overflowY: 'auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, [...Array(itemsCount).keys()].map(key => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Partials_Article__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: key,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Partials_Counter__WEBPACK_IMPORTED_MODULE_4__["default"], {
    count: itemsCount,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ElementInfiniteScroller);

/***/ }),

/***/ "./src/component/InfiniteScroller/Partials/Article.js":
/*!************************************************************!*\
  !*** ./src/component/InfiniteScroller/Partials/Article.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Roach\\Desktop\\react-infinite-scroller-docs\\src\\component\\InfiniteScroller\\Partials\\Article.js";


const Article = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
  className: "article",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, "Lorem Ipsum is simply dummy text"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"));

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ }),

/***/ "./src/component/InfiniteScroller/Partials/Counter.js":
/*!************************************************************!*\
  !*** ./src/component/InfiniteScroller/Partials/Counter.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Roach\\Desktop\\react-infinite-scroller-docs\\src\\component\\InfiniteScroller\\Partials\\Counter.js";



const Counter = ({
  count
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
  className: "counter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "total items: ", count), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "scroll down to add more"));

Counter.propTypes = {
  count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (Counter);

/***/ }),

/***/ "./src/component/InfiniteScroller/WindowInfiniteScroller.js":
/*!******************************************************************!*\
  !*** ./src/component/InfiniteScroller/WindowInfiniteScroller.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Roach_Desktop_react_infinite_scroller_docs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_infinite_scroller_snp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-infinite-scroller-snp */ "./node_modules/react-infinite-scroller-snp/index.js");
/* harmony import */ var _Partials_Article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Partials/Article */ "./src/component/InfiniteScroller/Partials/Article.js");
/* harmony import */ var _Partials_Counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Partials/Counter */ "./src/component/InfiniteScroller/Partials/Counter.js");

var _jsxFileName = "C:\\Users\\Roach\\Desktop\\react-infinite-scroller-docs\\src\\component\\InfiniteScroller\\WindowInfiniteScroller.js";





const WindowInfiniteScroller = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(10),
        _useState2 = Object(C_Users_Roach_Desktop_react_infinite_scroller_docs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        itemsCount = _useState2[0],
        setItemsCount = _useState2[1];

  Object(react_infinite_scroller_snp__WEBPACK_IMPORTED_MODULE_2__["useWindowScroll"])(() => {
    setTimeout(() => setItemsCount(itemsCount + 1), 500);
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, [...Array(itemsCount).keys()].map(key => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Partials_Article__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: key,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Partials_Counter__WEBPACK_IMPORTED_MODULE_4__["default"], {
    count: itemsCount,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (WindowInfiniteScroller);

/***/ }),

/***/ "./src/component/InfiniteScroller/index.js":
/*!*************************************************!*\
  !*** ./src/component/InfiniteScroller/index.js ***!
  \*************************************************/
/*! exports provided: ElementInfiniteScroller, WindowInfiniteScroller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ElementInfiniteScroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementInfiniteScroller */ "./src/component/InfiniteScroller/ElementInfiniteScroller.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementInfiniteScroller", function() { return _ElementInfiniteScroller__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _WindowInfiniteScroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WindowInfiniteScroller */ "./src/component/InfiniteScroller/WindowInfiniteScroller.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowInfiniteScroller", function() { return _WindowInfiniteScroller__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/component/Layout/index.js":
/*!***************************************!*\
  !*** ./src/component/Layout/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _resources_images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../resources/images/logo.png */ "./src/resources/images/logo.png");
/* harmony import */ var _resources_images_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_resources_images_logo_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Roach\\Desktop\\react-infinite-scroller-docs\\src\\component\\Layout\\index.js";





const Layout = ({
  children
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
  className: "header",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://github.com/rezaerami/react-infinite-scroller-snp/",
  title: "react-infinite-scroll",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: _resources_images_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  alt: "react-infinite-scroll",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
  className: "navigation",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
  exact: true,
  to: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
  exact: true,
  to: "/docs",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, "Docs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  target: "_blank",
  href: "https://github.com/rezaerami/react-infinite-scroller-snp/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "Github")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, children));

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "C:\\Users\\Roach\\Desktop\\react-infinite-scroller-docs\\src\\index.js";



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}), document.getElementById('root'));

/***/ }),

/***/ "./src/resources/images/logo.png":
/*!***************************************!*\
  !*** ./src/resources/images/logo.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "assets/logo.png";

/***/ }),

/***/ "./src/resources/styles/styles.css":
/*!*****************************************!*\
  !*** ./src/resources/styles/styles.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/resources/styles/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/resources/styles/styles.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/resources/styles/styles.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Roach\Desktop\react-infinite-scroller-docs\node_modules\webpack\hot\dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! C:\Users\Roach\Desktop\react-infinite-scroller-docs\node_modules\react-dev-utils\webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! C:\Users\Roach\Desktop\react-infinite-scroller-docs\src\index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map