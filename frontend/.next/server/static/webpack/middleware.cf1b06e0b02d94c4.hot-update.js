"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.js":
/*!***********************!*\
  !*** ./middleware.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/auth-helpers-nextjs */ \"(middleware)/./node_modules/@supabase/auth-helpers-nextjs/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\n\nasync function middleware(req) {\n    const res = next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].next();\n    const supabase = (0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0__.createMiddlewareClient)({\n        req,\n        res\n    });\n    const { data, error } = await supabase.auth.getSession();\n    if (req.cookies.has(\"supabase/user\") && req.cookies.get(\"supabase/user\").value !== data?.session?.user?.id) {\n        req.cookies.delete(\"supabase/user\");\n    }\n    if (data.session.user) {\n        res.cookies.set(\"supabase/user\", data.session.user.id);\n    }\n    return res;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVFO0FBQzVCO0FBRXBDLGVBQWVFLFdBQVdDLEdBQUc7SUFDbEMsTUFBTUMsTUFBTUgsa0ZBQVlBLENBQUNJLElBQUk7SUFDN0IsTUFBTUMsV0FBV04scUZBQXNCQSxDQUFDO1FBQUVHO1FBQUtDO0lBQUk7SUFDbkQsTUFBTSxFQUFFRyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1GLFNBQVNHLElBQUksQ0FBQ0MsVUFBVTtJQUN0RCxJQUNFUCxJQUFJUSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFDaEJULElBQUlRLE9BQU8sQ0FBQ0UsR0FBRyxDQUFDLGlCQUFpQkMsS0FBSyxLQUFLUCxNQUFNUSxTQUFTQyxNQUFNQyxJQUNoRTtRQUNBZCxJQUFJUSxPQUFPLENBQUNPLE1BQU0sQ0FBQztJQUNyQjtJQUNBLElBQUlYLEtBQUtRLE9BQU8sQ0FBQ0MsSUFBSSxFQUFFO1FBQ3JCWixJQUFJTyxPQUFPLENBQUNRLEdBQUcsQ0FBQyxpQkFBaUJaLEtBQUtRLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDQyxFQUFFO0lBQ3ZEO0lBQ0EsT0FBT2I7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLmpzPzNiY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTWlkZGxld2FyZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2UvYXV0aC1oZWxwZXJzLW5leHRqc1wiO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcSkge1xuICBjb25zdCByZXMgPSBOZXh0UmVzcG9uc2UubmV4dCgpO1xuICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZU1pZGRsZXdhcmVDbGllbnQoeyByZXEsIHJlcyB9KTtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRTZXNzaW9uKCk7XG4gIGlmIChcbiAgICByZXEuY29va2llcy5oYXMoXCJzdXBhYmFzZS91c2VyXCIpICYmXG4gICAgcmVxLmNvb2tpZXMuZ2V0KFwic3VwYWJhc2UvdXNlclwiKS52YWx1ZSAhPT0gZGF0YT8uc2Vzc2lvbj8udXNlcj8uaWRcbiAgKSB7XG4gICAgcmVxLmNvb2tpZXMuZGVsZXRlKFwic3VwYWJhc2UvdXNlclwiKTtcbiAgfVxuICBpZiAoZGF0YS5zZXNzaW9uLnVzZXIpIHtcbiAgICByZXMuY29va2llcy5zZXQoXCJzdXBhYmFzZS91c2VyXCIsIGRhdGEuc2Vzc2lvbi51c2VyLmlkKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZU1pZGRsZXdhcmVDbGllbnQiLCJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxIiwicmVzIiwibmV4dCIsInN1cGFiYXNlIiwiZGF0YSIsImVycm9yIiwiYXV0aCIsImdldFNlc3Npb24iLCJjb29raWVzIiwiaGFzIiwiZ2V0IiwidmFsdWUiLCJzZXNzaW9uIiwidXNlciIsImlkIiwiZGVsZXRlIiwic2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});