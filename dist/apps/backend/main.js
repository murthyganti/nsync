(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_andrews_playlist_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
var _assets_andrews_playlist_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(8, 1);



let AppService = class AppService {
    constructor() {
        this.songsPlayed = _assets_andrews_playlist_json__WEBPACK_IMPORTED_MODULE_2__;
    }
    getSongsPlayed() {
        return this.songsPlayed;
    }
};
AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AppService);



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);




let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_2__[/* AppController */ "a"]],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_3__[/* AppService */ "a"]],
    })
], AppModule);



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nsync_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
var _a, _b;




let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return {
            songPlays: this.appService.getSongsPlayed()
        };
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_a = typeof _nsync_data__WEBPACK_IMPORTED_MODULE_2__["SongsResponse"] !== "undefined" && _nsync_data__WEBPACK_IMPORTED_MODULE_2__["SongsResponse"]) === "function" ? _a : Object)
], AppController.prototype, "getData", null);
AppController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof _app_service__WEBPACK_IMPORTED_MODULE_3__[/* AppService */ "a"] !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_3__[/* AppService */ "a"]) === "function" ? _b : Object])
], AppController);



/***/ }),
/* 8 */
/***/ (function(module) {

module.exports = JSON.parse("[{\"endTime\":\"2020-01-24 22:19\",\"artistName\":\"Justin Timberlake\",\"trackName\":\"My Love (feat. T.I.)\",\"msPlayed\":1530},{\"endTime\":\"2020-01-24 22:19\",\"artistName\":\"The Band\",\"trackName\":\"Such a Night (feat. Dr. John) - Concert Version\",\"msPlayed\":1560},{\"endTime\":\"2020-01-24 22:19\",\"artistName\":\"The Limiñanas\",\"trackName\":\"Cold Was the Ground\",\"msPlayed\":2070},{\"endTime\":\"2020-01-24 22:19\",\"artistName\":\"Sheryl Crow\",\"trackName\":\"A Change Would Do You Good\",\"msPlayed\":3480},{\"endTime\":\"2020-01-24 22:24\",\"artistName\":\"Wolfmother\",\"trackName\":\"White Unicorn\",\"msPlayed\":304133},{\"endTime\":\"2020-01-24 22:29\",\"artistName\":\"Warren G\",\"trackName\":\"Regulate\",\"msPlayed\":248866},{\"endTime\":\"2020-01-24 22:33\",\"artistName\":\"54-40\",\"trackName\":\"Love You All\",\"msPlayed\":269333},{\"endTime\":\"2020-01-24 22:36\",\"artistName\":\"Spice Girls\",\"trackName\":\"Spice Up Your Life\",\"msPlayed\":173666},{\"endTime\":\"2020-01-24 22:40\",\"artistName\":\"Ozzy Osbourne\",\"trackName\":\"Crazy Train\",\"msPlayed\":220420},{\"endTime\":\"2020-01-24 22:43\",\"artistName\":\"Frank Sinatra\",\"trackName\":\"It All Depends On You - 1998 Digital Remaster\",\"msPlayed\":2550},{\"endTime\":\"2020-01-24 22:43\",\"artistName\":\"Manu Chao\",\"trackName\":\"Me Gustas Tu\",\"msPlayed\":85600},{\"endTime\":\"2020-01-24 22:45\",\"artistName\":\"Electric Light Orchestra\",\"trackName\":\"Don't Bring Me Down\",\"msPlayed\":120160},{\"endTime\":\"2020-01-24 22:48\",\"artistName\":\"Spice Girls\",\"trackName\":\"Wannabe\",\"msPlayed\":14072},{\"endTime\":\"2020-01-24 22:48\",\"artistName\":\"LBL\",\"trackName\":\"trip on a trailer\",\"msPlayed\":2510},{\"endTime\":\"2020-01-24 22:48\",\"artistName\":\"Spice Girls\",\"trackName\":\"Who Do You Think You Are\",\"msPlayed\":188577},{\"endTime\":\"2020-01-24 22:51\",\"artistName\":\"Dusty Springfield\",\"trackName\":\"Spooky (Single Version)\",\"msPlayed\":164933},{\"endTime\":\"2020-01-24 22:52\",\"artistName\":\"ABBA\",\"trackName\":\"SOS\",\"msPlayed\":38676},{\"endTime\":\"2020-01-24 22:57\",\"artistName\":\"Seal\",\"trackName\":\"Kiss from a Rose\",\"msPlayed\":288426},{\"endTime\":\"2020-01-24 23:05\",\"artistName\":\"Seals and Crofts\",\"trackName\":\"Summer Breeze\",\"msPlayed\":26045},{\"endTime\":\"2020-01-24 23:07\",\"artistName\":\"Deerhunter\",\"trackName\":\"Revival\",\"msPlayed\":133666},{\"endTime\":\"2020-01-24 23:22\",\"artistName\":\"The Vines\",\"trackName\":\"Ride\",\"msPlayed\":151178},{\"endTime\":\"2020-01-24 23:53\",\"artistName\":\"The Vines\",\"trackName\":\"Ride\",\"msPlayed\":129832},{\"endTime\":\"2020-01-24 23:57\",\"artistName\":\"Broken Bells\",\"trackName\":\"After the Disco\",\"msPlayed\":219293},{\"endTime\":\"2020-01-24 23:59\",\"artistName\":\"Crumb\",\"trackName\":\"Recently Played\",\"msPlayed\":120454},{\"endTime\":\"2020-01-25 00:04\",\"artistName\":\"Butthole Surfers\",\"trackName\":\"Pepper\",\"msPlayed\":297266},{\"endTime\":\"2020-01-25 00:09\",\"artistName\":\"The Payolas\",\"trackName\":\"Eyes Of A Stranger\",\"msPlayed\":298040},{\"endTime\":\"2020-01-25 00:14\",\"artistName\":\"Led Zeppelin\",\"trackName\":\"What Is and What Should Never Be - 1990 Remaster\",\"msPlayed\":283973},{\"endTime\":\"2020-01-25 00:17\",\"artistName\":\"Ace of Base\",\"trackName\":\"All That She Wants\",\"msPlayed\":211213},{\"endTime\":\"2020-01-25 00:23\",\"artistName\":\"The B-52's\",\"trackName\":\"Love Shack\",\"msPlayed\":321573},{\"endTime\":\"2020-01-25 00:26\",\"artistName\":\"Henry Mancini\",\"trackName\":\"Pink Panther Theme\",\"msPlayed\":161600},{\"endTime\":\"2020-01-25 00:26\",\"artistName\":\"Steve Miller Band\",\"trackName\":\"Fly Like An Eagle\",\"msPlayed\":4383},{\"endTime\":\"2020-01-25 00:27\",\"artistName\":\"James Taylor\",\"trackName\":\"Fire and Rain\",\"msPlayed\":98390}]");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */




function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_2__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_3__[/* AppModule */ "a"]);
        const globalPrefix = "songs";
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        yield app.listen(port, () => {
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].log("Listening at http://localhost:" + port + "/" + globalPrefix);
        });
    });
}
bootstrap();


/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map