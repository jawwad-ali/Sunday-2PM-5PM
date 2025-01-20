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

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clerkMiddleware((auth, request)=>{\n    if (isProtectedRoute(request)) {\n        auth().protect();\n    }\n    return NextResponse.next();\n}));\nconst config = {\n    matcher: [\n        // Skip Next.js internals and all static files, unless found in search params\n        \"/((?!_next|[^?]*\\\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)\",\n        // Always run for API routes\n        \"/(api|trpc)(.*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlFQUFlQSxnQkFBZ0IsQ0FBQ0MsTUFBT0M7SUFDckMsSUFBR0MsaUJBQWlCRCxVQUFTO1FBQ3pCRCxPQUFPRyxPQUFPO0lBQ2xCO0lBQ0EsT0FBT0MsYUFBYUMsSUFBSTtBQUMxQixFQUFFLEVBQUM7QUFFSSxNQUFNQyxTQUFTO0lBQ3RCQyxTQUFTO1FBQ1AsNkVBQTZFO1FBQzdFO1FBQ0EsNEJBQTRCO1FBQzVCO0tBQ0Q7QUFDRCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUudHM/NDIyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGVya01pZGRsZXdhcmUoKGF1dGggLCByZXF1ZXN0KSA9PiB7XHJcbiAgaWYoaXNQcm90ZWN0ZWRSb3V0ZShyZXF1ZXN0KSl7XHJcbiAgICAgIGF1dGgoKS5wcm90ZWN0KCkgXHJcbiAgfVxyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxubWF0Y2hlcjogW1xyXG4gIC8vIFNraXAgTmV4dC5qcyBpbnRlcm5hbHMgYW5kIGFsbCBzdGF0aWMgZmlsZXMsIHVubGVzcyBmb3VuZCBpbiBzZWFyY2ggcGFyYW1zXHJcbiAgJy8oKD8hX25leHR8W14/XSpcXFxcLig/Omh0bWw/fGNzc3xqcyg/IW9uKXxqcGU/Z3x3ZWJwfHBuZ3xnaWZ8c3ZnfHR0Znx3b2ZmMj98aWNvfGNzdnxkb2N4P3x4bHN4P3x6aXB8d2VibWFuaWZlc3QpKS4qKScsXHJcbiAgLy8gQWx3YXlzIHJ1biBmb3IgQVBJIHJvdXRlc1xyXG4gICcvKGFwaXx0cnBjKSguKiknLFxyXG5dLFxyXG59OyJdLCJuYW1lcyI6WyJjbGVya01pZGRsZXdhcmUiLCJhdXRoIiwicmVxdWVzdCIsImlzUHJvdGVjdGVkUm91dGUiLCJwcm90ZWN0IiwiTmV4dFJlc3BvbnNlIiwibmV4dCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});