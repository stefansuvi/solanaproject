/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/layout/NavBar.tsx":
/*!******************************************!*\
  !*** ./src/components/layout/NavBar.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sonner */ \"sonner\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"@solana/wallet-adapter-react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sonner__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__]);\n([sonner__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst WalletMultiButtonDynamic = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\")).then((mod)=>mod.WalletMultiButton), {\n    loadableGenerated: {\n        modules: [\n            \"..\\\\components\\\\layout\\\\NavBar.tsx -> \" + \"@solana/wallet-adapter-react-ui\"\n        ]\n    },\n    ssr: false\n});\nconst Navbar = ()=>{\n    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet)();\n    const [scrollingDown, setScrollingDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (wallet.connected && wallet.publicKey) {\n            sonner__WEBPACK_IMPORTED_MODULE_4__.toast.success(`Connected to ${wallet.publicKey.toBase58()}`);\n        } else if (!wallet.connecting && !wallet.connected) {\n            sonner__WEBPACK_IMPORTED_MODULE_4__.toast.info(\"Disconnected from wallet\");\n        }\n        const handleScroll = ()=>{\n            if (window.scrollY > 0) {\n                setScrollingDown(true);\n            } else {\n                setScrollingDown(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, [\n        wallet.connected,\n        wallet.connecting,\n        wallet.publicKey\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: `bg-background/80 fixed top-5 left-1/2 transform -translate-x-1/2 w-[80%] border border-border rounded-full shadow-xl z-50 transition-transform duration-300 ease-in-out ${scrollingDown ? \"translate-y-[-100%] opacity-0\" : \"translate-y-0 opacity-100\"}`,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto flex justify-between items-center px-6 py-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/sol.png\",\n                        alt: \"logo\",\n                        className: \"h-8 w-8\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stefa\\\\solana-project\\\\src\\\\components\\\\layout\\\\NavBar.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stefa\\\\solana-project\\\\src\\\\components\\\\layout\\\\NavBar.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center space-x-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WalletMultiButtonDynamic, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stefa\\\\solana-project\\\\src\\\\components\\\\layout\\\\NavBar.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stefa\\\\solana-project\\\\src\\\\components\\\\layout\\\\NavBar.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\stefa\\\\solana-project\\\\src\\\\components\\\\layout\\\\NavBar.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\stefa\\\\solana-project\\\\src\\\\components\\\\layout\\\\NavBar.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTmF2QmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFFdEI7QUFDTTtBQUNKO0FBQzBCO0FBRXpELE1BQU1PLDJCQUEyQkgsbURBQU9BLENBQ3RDLElBQ0UsOEpBQXlDLENBQUNJLElBQUksQ0FDNUMsQ0FBQ0MsTUFBUUEsSUFBSUMsaUJBQWlCOzs7Ozs7SUFFaENDLEtBQUs7O0FBR1QsTUFBTUMsU0FBUztJQUNiLE1BQU1DLFNBQVNQLHVFQUFTQTtJQUN4QixNQUFNLENBQUNRLGVBQWVDLGlCQUFpQixHQUFHYiwrQ0FBUUEsQ0FBQztJQUVuREQsZ0RBQVNBLENBQUM7UUFDUixJQUFJWSxPQUFPRyxTQUFTLElBQUlILE9BQU9JLFNBQVMsRUFBRTtZQUN4Q1oseUNBQUtBLENBQUNhLE9BQU8sQ0FBQyxDQUFDLGFBQWEsRUFBRUwsT0FBT0ksU0FBUyxDQUFDRSxRQUFRLEdBQUcsQ0FBQztRQUM3RCxPQUFPLElBQUksQ0FBQ04sT0FBT08sVUFBVSxJQUFJLENBQUNQLE9BQU9HLFNBQVMsRUFBRTtZQUNsRFgseUNBQUtBLENBQUNnQixJQUFJLENBQUM7UUFDYjtRQUVBLE1BQU1DLGVBQWU7WUFDbkIsSUFBSUMsT0FBT0MsT0FBTyxHQUFHLEdBQUc7Z0JBQ3RCVCxpQkFBaUI7WUFDbkIsT0FBTztnQkFDTEEsaUJBQWlCO1lBQ25CO1FBQ0Y7UUFFQVEsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7UUFDbEMsT0FBTztZQUNMQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVSjtRQUN2QztJQUNGLEdBQUc7UUFBQ1QsT0FBT0csU0FBUztRQUFFSCxPQUFPTyxVQUFVO1FBQUVQLE9BQU9JLFNBQVM7S0FBQztJQUUxRCxxQkFDRSw4REFBQ1U7UUFDQ0MsV0FBVyxDQUFDLHdLQUF3SyxFQUNsTGQsZ0JBQ0ksa0NBQ0EsNEJBQ0wsQ0FBQztrQkFFRiw0RUFBQ2U7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUN6QixrREFBSUE7b0JBQUMyQixNQUFLO29CQUFJQyxRQUFROzhCQUNyQiw0RUFBQ0M7d0JBQUlDLEtBQUk7d0JBQVdDLEtBQUk7d0JBQU9OLFdBQVU7Ozs7Ozs7Ozs7OzhCQUczQyw4REFBQ0M7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1g7QUFFQSxpRUFBZUssTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9jb21wb25lbnRzL2xheW91dC9OYXZCYXIudHN4PzJhMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJzb25uZXJcIjtcclxuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3RcIjtcclxuXHJcbmNvbnN0IFdhbGxldE11bHRpQnV0dG9uRHluYW1pYyA9IGR5bmFtaWMoXHJcbiAgKCkgPT5cclxuICAgIGltcG9ydChcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWlcIikudGhlbihcclxuICAgICAgKG1vZCkgPT4gbW9kLldhbGxldE11bHRpQnV0dG9uXHJcbiAgICApLFxyXG4gIHsgc3NyOiBmYWxzZSB9XHJcbik7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgd2FsbGV0ID0gdXNlV2FsbGV0KCk7XHJcbiAgY29uc3QgW3Njcm9sbGluZ0Rvd24sIHNldFNjcm9sbGluZ0Rvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHdhbGxldC5jb25uZWN0ZWQgJiYgd2FsbGV0LnB1YmxpY0tleSkge1xyXG4gICAgICB0b2FzdC5zdWNjZXNzKGBDb25uZWN0ZWQgdG8gJHt3YWxsZXQucHVibGljS2V5LnRvQmFzZTU4KCl9YCk7XHJcbiAgICB9IGVsc2UgaWYgKCF3YWxsZXQuY29ubmVjdGluZyAmJiAhd2FsbGV0LmNvbm5lY3RlZCkge1xyXG4gICAgICB0b2FzdC5pbmZvKFwiRGlzY29ubmVjdGVkIGZyb20gd2FsbGV0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMCkge1xyXG4gICAgICAgIHNldFNjcm9sbGluZ0Rvd24odHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0U2Nyb2xsaW5nRG93bihmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFt3YWxsZXQuY29ubmVjdGVkLCB3YWxsZXQuY29ubmVjdGluZywgd2FsbGV0LnB1YmxpY0tleV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdlxyXG4gICAgICBjbGFzc05hbWU9e2BiZy1iYWNrZ3JvdW5kLzgwIGZpeGVkIHRvcC01IGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIHctWzgwJV0gYm9yZGVyIGJvcmRlci1ib3JkZXIgcm91bmRlZC1mdWxsIHNoYWRvdy14bCB6LTUwIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCAke1xyXG4gICAgICAgIHNjcm9sbGluZ0Rvd25cclxuICAgICAgICAgID8gXCJ0cmFuc2xhdGUteS1bLTEwMCVdIG9wYWNpdHktMFwiXHJcbiAgICAgICAgICA6IFwidHJhbnNsYXRlLXktMCBvcGFjaXR5LTEwMFwiXHJcbiAgICAgIH1gfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBweC02IHB5LTJcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvc29sLnBuZ1wiIGFsdD1cImxvZ29cIiBjbGFzc05hbWU9XCJoLTggdy04XCIgLz5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XHJcbiAgICAgICAgICA8V2FsbGV0TXVsdGlCdXR0b25EeW5hbWljIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiZHluYW1pYyIsInRvYXN0IiwidXNlV2FsbGV0IiwiV2FsbGV0TXVsdGlCdXR0b25EeW5hbWljIiwidGhlbiIsIm1vZCIsIldhbGxldE11bHRpQnV0dG9uIiwic3NyIiwiTmF2YmFyIiwid2FsbGV0Iiwic2Nyb2xsaW5nRG93biIsInNldFNjcm9sbGluZ0Rvd24iLCJjb25uZWN0ZWQiLCJwdWJsaWNLZXkiLCJzdWNjZXNzIiwidG9CYXNlNTgiLCJjb25uZWN0aW5nIiwiaW5mbyIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImhyZWYiLCJwYXNzSHJlZiIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/layout/NavBar.tsx\n");

/***/ }),

/***/ "./src/components/ui/sonner.tsx":
/*!**************************************!*\
  !*** ./src/components/ui/sonner.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Toaster: () => (/* binding */ Toaster)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sonner */ \"sonner\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sonner__WEBPACK_IMPORTED_MODULE_1__]);\nsonner__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Toaster = ({ ...props })=>{\n    const { theme = \"system\" } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(sonner__WEBPACK_IMPORTED_MODULE_1__.Toaster, {\n        theme: theme,\n        className: \"toaster group\",\n        toastOptions: {\n            classNames: {\n                toast: \"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg\",\n                description: \"group-[.toast]:text-muted-foreground\",\n                actionButton: \"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground\",\n                cancelButton: \"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground\"\n            }\n        },\n        ...props\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\stefa\\\\solana-project\\\\src\\\\components\\\\ui\\\\sonner.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91aS9zb25uZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDSjtBQUl2QyxNQUFNQSxVQUFVLENBQUMsRUFBRSxHQUFHRyxPQUFxQjtJQUN6QyxNQUFNLEVBQUVDLFFBQVEsUUFBUSxFQUFFLEdBQUdGLHFEQUFRQTtJQUVyQyxxQkFDRSw4REFBQ0QsMkNBQU1BO1FBQ0xHLE9BQU9BO1FBQ1BDLFdBQVU7UUFDVkMsY0FBYztZQUNaQyxZQUFZO2dCQUNWQyxPQUNFO2dCQUNGQyxhQUFhO2dCQUNiQyxjQUNFO2dCQUNGQyxjQUNFO1lBQ0o7UUFDRjtRQUNDLEdBQUdSLEtBQUs7Ozs7OztBQUdmO0FBRW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2NvbXBvbmVudHMvdWkvc29ubmVyLnRzeD8zMWY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRvYXN0ZXIgYXMgU29ubmVyIH0gZnJvbSBcInNvbm5lclwiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcblxudHlwZSBUb2FzdGVyUHJvcHMgPSBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgU29ubmVyPjtcblxuY29uc3QgVG9hc3RlciA9ICh7IC4uLnByb3BzIH06IFRvYXN0ZXJQcm9wcykgPT4ge1xuICBjb25zdCB7IHRoZW1lID0gXCJzeXN0ZW1cIiB9ID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxTb25uZXJcbiAgICAgIHRoZW1lPXt0aGVtZSBhcyBUb2FzdGVyUHJvcHNbXCJ0aGVtZVwiXX1cbiAgICAgIGNsYXNzTmFtZT1cInRvYXN0ZXIgZ3JvdXBcIlxuICAgICAgdG9hc3RPcHRpb25zPXt7XG4gICAgICAgIGNsYXNzTmFtZXM6IHtcbiAgICAgICAgICB0b2FzdDpcbiAgICAgICAgICAgIFwiZ3JvdXAgdG9hc3QgZ3JvdXAtWy50b2FzdGVyXTpiZy1iYWNrZ3JvdW5kIGdyb3VwLVsudG9hc3Rlcl06dGV4dC1mb3JlZ3JvdW5kIGdyb3VwLVsudG9hc3Rlcl06Ym9yZGVyLWJvcmRlciBncm91cC1bLnRvYXN0ZXJdOnNoYWRvdy1sZ1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImdyb3VwLVsudG9hc3RdOnRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiLFxuICAgICAgICAgIGFjdGlvbkJ1dHRvbjpcbiAgICAgICAgICAgIFwiZ3JvdXAtWy50b2FzdF06YmctcHJpbWFyeSBncm91cC1bLnRvYXN0XTp0ZXh0LXByaW1hcnktZm9yZWdyb3VuZFwiLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbjpcbiAgICAgICAgICAgIFwiZ3JvdXAtWy50b2FzdF06YmctbXV0ZWQgZ3JvdXAtWy50b2FzdF06dGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIsXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgeyBUb2FzdGVyIH07XG4iXSwibmFtZXMiOlsiVG9hc3RlciIsIlNvbm5lciIsInVzZVRoZW1lIiwicHJvcHMiLCJ0aGVtZSIsImNsYXNzTmFtZSIsInRvYXN0T3B0aW9ucyIsImNsYXNzTmFtZXMiLCJ0b2FzdCIsImRlc2NyaXB0aW9uIiwiYWN0aW9uQnV0dG9uIiwiY2FuY2VsQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ui/sonner.tsx\n");

/***/ }),

/***/ "./src/components/ui/theme-provider.tsx":
/*!**********************************************!*\
  !*** ./src/components/ui/theme-provider.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ ThemeProvider auto */ \n\n\nfunction ThemeProvider({ children, ...props }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        ...props,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\stefa\\\\solana-project\\\\src\\\\components\\\\ui\\\\theme-provider.tsx\",\n        lineNumber: 8,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91aS90aGVtZS1wcm92aWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFK0I7QUFDbUM7QUFHM0QsU0FBU0MsY0FBYyxFQUFFRSxRQUFRLEVBQUUsR0FBR0MsT0FBMkI7SUFDdEUscUJBQU8sOERBQUNGLHNEQUFrQkE7UUFBRSxHQUFHRSxLQUFLO2tCQUFHRDs7Ozs7O0FBQ3pDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2NvbXBvbmVudHMvdWkvdGhlbWUtcHJvdmlkZXIudHN4Pzc0NWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciBhcyBOZXh0VGhlbWVzUHJvdmlkZXIgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcclxuaW1wb3J0IHsgdHlwZSBUaGVtZVByb3ZpZGVyUHJvcHMgfSBmcm9tIFwibmV4dC10aGVtZXMvZGlzdC90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfTogVGhlbWVQcm92aWRlclByb3BzKSB7XHJcbiAgcmV0dXJuIDxOZXh0VGhlbWVzUHJvdmlkZXIgey4uLnByb3BzfT57Y2hpbGRyZW59PC9OZXh0VGhlbWVzUHJvdmlkZXI+O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRoZW1lUHJvdmlkZXIiLCJOZXh0VGhlbWVzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ui/theme-provider.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"@solana/wallet-adapter-react\");\n/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-wallets */ \"@solana/wallet-adapter-wallets\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layout_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/layout/NavBar */ \"./src/components/layout/NavBar.tsx\");\n/* harmony import */ var _components_ui_theme_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/theme-provider */ \"./src/components/ui/theme-provider.tsx\");\n/* harmony import */ var _components_ui_sonner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/sonner */ \"./src/components/ui/sonner.tsx\");\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"@solana/wallet-adapter-base\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @solana/web3.js */ \"@solana/web3.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_10__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__, _components_layout_NavBar__WEBPACK_IMPORTED_MODULE_5__, _components_ui_sonner__WEBPACK_IMPORTED_MODULE_7__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_8__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_9__]);\n([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__, _components_layout_NavBar__WEBPACK_IMPORTED_MODULE_5__, _components_ui_sonner__WEBPACK_IMPORTED_MODULE_7__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_8__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n__webpack_require__(/*! @solana/wallet-adapter-react-ui/styles.css */ \"./node_modules/@solana/wallet-adapter-react-ui/styles.css\");\nconst App = ({ Component, pageProps })=>{\n    const network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_8__.WalletAdapterNetwork.Mainnet;\n    const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>(0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_10__.clusterApiUrl)(network), [\n        network\n    ]);\n    const wallets = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>[\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__.PhantomWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__.SolflareWalletAdapter({\n                network\n            }),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__.TorusWalletAdapter()\n        ], [\n        network\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.ConnectionProvider, {\n        endpoint: endpoint,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.WalletProvider, {\n            wallets: wallets,\n            autoConnect: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_9__.WalletModalProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_theme_provider__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {\n                    attribute: \"class\",\n                    defaultTheme: \"system\",\n                    enableSystem: true,\n                    disableTransitionOnChange: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_NavBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\stefa\\\\solana-project\\\\src\\\\pages\\\\_app.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\stefa\\\\solana-project\\\\src\\\\pages\\\\_app.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sonner__WEBPACK_IMPORTED_MODULE_7__.Toaster, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\stefa\\\\solana-project\\\\src\\\\pages\\\\_app.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\stefa\\\\solana-project\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stefa\\\\solana-project\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\stefa\\\\solana-project\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\stefa\\\\solana-project\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFLUTtBQUtFO0FBQ0Q7QUFJUztBQUNlO0FBQ2Q7QUFDa0I7QUFDRztBQUN0QjtBQUVoRGEsbUJBQU9BLENBQUMsNkdBQTRDO0FBRXBELE1BQU1DLE1BQW9CLENBQUMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDakQsTUFBTUMsVUFBVVAsNkVBQW9CQSxDQUFDUSxPQUFPO0lBRTVDLE1BQU1DLFdBQVdiLDhDQUFPQSxDQUFDLElBQU1NLCtEQUFhQSxDQUFDSyxVQUFVO1FBQUNBO0tBQVE7SUFFaEUsTUFBTUcsVUFBVWQsOENBQU9BLENBQ3JCLElBQU07WUFDSixJQUFJSixnRkFBb0JBO1lBQ3hCLElBQUlDLGlGQUFxQkEsQ0FBQztnQkFBRWM7WUFBUTtZQUNwQyxJQUFJYiw4RUFBa0JBO1NBQ3ZCLEVBQ0Q7UUFBQ2E7S0FBUTtJQUdYLHFCQUNFLDhEQUFDakIsNEVBQWtCQTtRQUFDbUIsVUFBVUE7a0JBQzVCLDRFQUFDbEIsd0VBQWNBO1lBQUNtQixTQUFTQTtZQUFTQyxXQUFXO3NCQUMzQyw0RUFBQ1YsZ0ZBQW1CQTswQkFDbEIsNEVBQUNILHdFQUFhQTtvQkFDWmMsV0FBVTtvQkFDVkMsY0FBYTtvQkFDYkMsWUFBWTtvQkFDWkMseUJBQXlCOztzQ0FFekIsOERBQUNsQixpRUFBTUE7Ozs7O3NDQUNQLDhEQUFDUTs0QkFBVyxHQUFHQyxTQUFTOzs7Ozs7c0NBQ3hCLDhEQUFDUCwwREFBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBCO0FBRUEsaUVBQWVLLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuXG5pbXBvcnQge1xuICBDb25uZWN0aW9uUHJvdmlkZXIsXG4gIFdhbGxldFByb3ZpZGVyLFxufSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdFwiO1xuaW1wb3J0IHtcbiAgUGhhbnRvbVdhbGxldEFkYXB0ZXIsXG4gIFNvbGZsYXJlV2FsbGV0QWRhcHRlcixcbiAgVG9ydXNXYWxsZXRBZGFwdGVyLFxufSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci13YWxsZXRzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCJAL2NvbXBvbmVudHMvbGF5b3V0L05hdkJhclwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGhlbWUtcHJvdmlkZXJcIjtcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3Nvbm5lclwiO1xuaW1wb3J0IHsgV2FsbGV0QWRhcHRlck5ldHdvcmsgfSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1iYXNlXCI7XG5pbXBvcnQgeyBXYWxsZXRNb2RhbFByb3ZpZGVyIH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWlcIjtcbmltcG9ydCB7IGNsdXN0ZXJBcGlVcmwgfSBmcm9tIFwiQHNvbGFuYS93ZWIzLmpzXCI7XG5cbnJlcXVpcmUoXCJAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpL3N0eWxlcy5jc3NcIik7XG5cbmNvbnN0IEFwcDogRkM8QXBwUHJvcHM+ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICBjb25zdCBuZXR3b3JrID0gV2FsbGV0QWRhcHRlck5ldHdvcmsuTWFpbm5ldDtcblxuICBjb25zdCBlbmRwb2ludCA9IHVzZU1lbW8oKCkgPT4gY2x1c3RlckFwaVVybChuZXR3b3JrKSwgW25ldHdvcmtdKTtcblxuICBjb25zdCB3YWxsZXRzID0gdXNlTWVtbyhcbiAgICAoKSA9PiBbXG4gICAgICBuZXcgUGhhbnRvbVdhbGxldEFkYXB0ZXIoKSxcbiAgICAgIG5ldyBTb2xmbGFyZVdhbGxldEFkYXB0ZXIoeyBuZXR3b3JrIH0pLFxuICAgICAgbmV3IFRvcnVzV2FsbGV0QWRhcHRlcigpLFxuICAgIF0sXG4gICAgW25ldHdvcmtdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29ubmVjdGlvblByb3ZpZGVyIGVuZHBvaW50PXtlbmRwb2ludH0+XG4gICAgICA8V2FsbGV0UHJvdmlkZXIgd2FsbGV0cz17d2FsbGV0c30gYXV0b0Nvbm5lY3Q+XG4gICAgICAgIDxXYWxsZXRNb2RhbFByb3ZpZGVyPlxuICAgICAgICAgIDxUaGVtZVByb3ZpZGVyXG4gICAgICAgICAgICBhdHRyaWJ1dGU9XCJjbGFzc1wiXG4gICAgICAgICAgICBkZWZhdWx0VGhlbWU9XCJzeXN0ZW1cIlxuICAgICAgICAgICAgZW5hYmxlU3lzdGVtXG4gICAgICAgICAgICBkaXNhYmxlVHJhbnNpdGlvbk9uQ2hhbmdlXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPFRvYXN0ZXIgLz5cbiAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgIDwvV2FsbGV0TW9kYWxQcm92aWRlcj5cbiAgICAgIDwvV2FsbGV0UHJvdmlkZXI+XG4gICAgPC9Db25uZWN0aW9uUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiQ29ubmVjdGlvblByb3ZpZGVyIiwiV2FsbGV0UHJvdmlkZXIiLCJQaGFudG9tV2FsbGV0QWRhcHRlciIsIlNvbGZsYXJlV2FsbGV0QWRhcHRlciIsIlRvcnVzV2FsbGV0QWRhcHRlciIsIlJlYWN0IiwidXNlTWVtbyIsIk5hdmJhciIsIlRoZW1lUHJvdmlkZXIiLCJUb2FzdGVyIiwiV2FsbGV0QWRhcHRlck5ldHdvcmsiLCJXYWxsZXRNb2RhbFByb3ZpZGVyIiwiY2x1c3RlckFwaVVybCIsInJlcXVpcmUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJuZXR3b3JrIiwiTWFpbm5ldCIsImVuZHBvaW50Iiwid2FsbGV0cyIsImF1dG9Db25uZWN0IiwiYXR0cmlidXRlIiwiZGVmYXVsdFRoZW1lIiwiZW5hYmxlU3lzdGVtIiwiZGlzYWJsZVRyYW5zaXRpb25PbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@solana/web3.js":
/*!**********************************!*\
  !*** external "@solana/web3.js" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@solana/wallet-adapter-base":
/*!**********************************************!*\
  !*** external "@solana/wallet-adapter-base" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-base");;

/***/ }),

/***/ "@solana/wallet-adapter-react":
/*!***********************************************!*\
  !*** external "@solana/wallet-adapter-react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ "@solana/wallet-adapter-react-ui":
/*!**************************************************!*\
  !*** external "@solana/wallet-adapter-react-ui" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ }),

/***/ "@solana/wallet-adapter-wallets":
/*!*************************************************!*\
  !*** external "@solana/wallet-adapter-wallets" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-wallets");;

/***/ }),

/***/ "sonner":
/*!*************************!*\
  !*** external "sonner" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = import("sonner");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@solana"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();