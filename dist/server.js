/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/models/Product.ts":
/*!**************************************!*\
  !*** ./src/server/models/Product.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar ProductSchema = new mongoose.Schema({\n    variants: [String],\n    name: String,\n});\nexports.ProductSchema = ProductSchema;\nvar Product = mongoose.model('Product', ProductSchema);\nexports.Product = Product;\nexports.default = Product;\n\n\n//# sourceURL=webpack:///./src/server/models/Product.ts?");

/***/ }),

/***/ "./src/server/models/Site.ts":
/*!***********************************!*\
  !*** ./src/server/models/Site.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar Product_1 = __webpack_require__(/*! ./Product */ \"./src/server/models/Product.ts\");\nvar SiteSchema = new mongoose.Schema({\n    name: String,\n    url: String,\n    internal: Number,\n    products: [Product_1.ProductSchema],\n});\nvar Site = mongoose.model('Site', SiteSchema);\nexports.default = Site;\n\n\n//# sourceURL=webpack:///./src/server/models/Site.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar GetSites_1 = __webpack_require__(/*! ./sites/GetSites */ \"./src/server/routes/sites/GetSites.ts\");\nvar AddSite_1 = __webpack_require__(/*! ./sites/AddSite */ \"./src/server/routes/sites/AddSite.ts\");\nvar DeleteSite_1 = __webpack_require__(/*! ./sites/DeleteSite */ \"./src/server/routes/sites/DeleteSite.ts\");\nvar GetProducts_1 = __webpack_require__(/*! ./sites/GetProducts */ \"./src/server/routes/sites/GetProducts.ts\");\nexports.default = [new GetSites_1.default(), new AddSite_1.default(), new DeleteSite_1.default(), new GetProducts_1.default()];\n\n\n//# sourceURL=webpack:///./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/routes/sites/AddSite.ts":
/*!********************************************!*\
  !*** ./src/server/routes/sites/AddSite.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar util_1 = __webpack_require__(/*! ../util */ \"./src/server/routes/util/index.ts\");\nvar node_fetch_1 = __webpack_require__(/*! node-fetch */ \"node-fetch\");\nvar cheerio = __webpack_require__(/*! cheerio */ \"cheerio\");\nvar Site_1 = __webpack_require__(/*! ../../models/Site */ \"./src/server/models/Site.ts\");\nvar AddSite = /** @class */ (function (_super) {\n    __extends(AddSite, _super);\n    function AddSite() {\n        return _super.call(this, util_1.RouteTypes.POST, '/api/addSite') || this;\n    }\n    AddSite.prototype.handle = function (req, res) {\n        return __awaiter(this, void 0, void 0, function () {\n            var site, _a, url, interval, nameFetch, body, $, name, site_1, _1;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0: return [4 /*yield*/, Site_1.default.findOne({ url: req.body.url })];\n                    case 1:\n                        site = _b.sent();\n                        if (site)\n                            return [2 /*return*/, res.status(200).json({ error: true, message: 'Site already exists', site: site })];\n                        _b.label = 2;\n                    case 2:\n                        _b.trys.push([2, 6, , 7]);\n                        _a = req.body, url = _a.url, interval = _a.interval;\n                        return [4 /*yield*/, node_fetch_1.default(url, {\n                                headers: {\n                                    'user-agent': 'Discordbot/2.0',\n                                },\n                            })];\n                    case 3:\n                        nameFetch = _b.sent();\n                        return [4 /*yield*/, nameFetch.text()];\n                    case 4:\n                        body = _b.sent();\n                        $ = cheerio.load(body);\n                        name = $('title')\n                            .text()\n                            .trim();\n                        return [4 /*yield*/, Site_1.default.create({ url: url, interval: interval, name: name, products: [] })];\n                    case 5:\n                        site_1 = _b.sent();\n                        res.status(201).json({ error: false, message: 'Created', site: site_1 });\n                        return [3 /*break*/, 7];\n                    case 6:\n                        _1 = _b.sent();\n                        console.warn(_1);\n                        res.status(400).json({ error: true, message: 'Something went wrong', status: 400 });\n                        return [3 /*break*/, 7];\n                    case 7: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    return AddSite;\n}(util_1.Route));\nexports.default = AddSite;\n\n\n//# sourceURL=webpack:///./src/server/routes/sites/AddSite.ts?");

/***/ }),

/***/ "./src/server/routes/sites/DeleteSite.ts":
/*!***********************************************!*\
  !*** ./src/server/routes/sites/DeleteSite.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar util_1 = __webpack_require__(/*! ../util */ \"./src/server/routes/util/index.ts\");\nvar Site_1 = __webpack_require__(/*! ../../models/Site */ \"./src/server/models/Site.ts\");\nvar DeleteSite = /** @class */ (function (_super) {\n    __extends(DeleteSite, _super);\n    function DeleteSite() {\n        return _super.call(this, util_1.RouteTypes.POST, '/api/deleteSite') || this;\n    }\n    DeleteSite.prototype.handle = function (req, res) {\n        return __awaiter(this, void 0, void 0, function () {\n            var site, result;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, Site_1.default.findOne({ _id: req.body._id })];\n                    case 1:\n                        site = _a.sent();\n                        if (!site)\n                            return [2 /*return*/, res.status(404).json({ error: true, message: 'Site not found' })];\n                        return [4 /*yield*/, Site_1.default.deleteOne({ _id: req.body._id })];\n                    case 2:\n                        result = _a.sent();\n                        if (result.ok && result.deletedCount === 1)\n                            return [2 /*return*/, res.status(200).json({ error: false, message: 'Successfully deleted' })];\n                        res.status(500).json({ error: true, message: 'Something went wrong. Try it again?' });\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    return DeleteSite;\n}(util_1.Route));\nexports.default = DeleteSite;\n\n\n//# sourceURL=webpack:///./src/server/routes/sites/DeleteSite.ts?");

/***/ }),

/***/ "./src/server/routes/sites/GetProducts.ts":
/*!************************************************!*\
  !*** ./src/server/routes/sites/GetProducts.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar util_1 = __webpack_require__(/*! ../util */ \"./src/server/routes/util/index.ts\");\nvar Site_1 = __webpack_require__(/*! ../../models/Site */ \"./src/server/models/Site.ts\");\nvar GetProducts = /** @class */ (function (_super) {\n    __extends(GetProducts, _super);\n    function GetProducts() {\n        return _super.call(this, util_1.RouteTypes.GET, '/api/getProducts') || this;\n    }\n    GetProducts.prototype.handle = function (req, res) {\n        return __awaiter(this, void 0, void 0, function () {\n            var sites, data;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, Site_1.default.find()];\n                    case 1:\n                        sites = _a.sent();\n                        if (sites.length === 0)\n                            return [2 /*return*/, res.status(404).json({ error: true, message: 'No sites found' })];\n                        data = {\n                            error: false,\n                            message: 'Successfully found all products',\n                            products: sites\n                                .map(function (site) {\n                                return __spreadArrays(site.products.map(function (product) {\n                                    // @ts-ignore\n                                    // @ts-ignore\n                                    var name = product.name, variants = product.variants;\n                                    // @ts-ignore\n                                    return { siteID: site._id, name: name, variants: variants };\n                                })).flat(Infinity);\n                            })\n                                // @ts-ignore\n                                .flat(Infinity),\n                        };\n                        res.json(data);\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    return GetProducts;\n}(util_1.Route));\nexports.default = GetProducts;\n\n\n//# sourceURL=webpack:///./src/server/routes/sites/GetProducts.ts?");

/***/ }),

/***/ "./src/server/routes/sites/GetSites.ts":
/*!*********************************************!*\
  !*** ./src/server/routes/sites/GetSites.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar util_1 = __webpack_require__(/*! ../util */ \"./src/server/routes/util/index.ts\");\nvar Site_1 = __webpack_require__(/*! ../../models/Site */ \"./src/server/models/Site.ts\");\nvar GetSites = /** @class */ (function (_super) {\n    __extends(GetSites, _super);\n    function GetSites() {\n        return _super.call(this, util_1.RouteTypes.GET, '/api/getSites') || this;\n    }\n    GetSites.prototype.handle = function (req, res) {\n        return __awaiter(this, void 0, void 0, function () {\n            var sites;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, Site_1.default.find()];\n                    case 1:\n                        sites = _a.sent();\n                        if (sites.length === 0)\n                            return [2 /*return*/, res.status(200).json({ error: true, message: 'No sites', sites: sites })];\n                        res.json({ error: false, sites: sites });\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    return GetSites;\n}(util_1.Route));\nexports.default = GetSites;\n\n\n//# sourceURL=webpack:///./src/server/routes/sites/GetSites.ts?");

/***/ }),

/***/ "./src/server/routes/util/Route.ts":
/*!*****************************************!*\
  !*** ./src/server/routes/util/Route.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Route = /** @class */ (function () {\n    function Route(method, path) {\n        if (method === void 0) { method = 'get'; }\n        this.method = method;\n        this.path = path;\n        this.internalHandle = this.internalHandle.bind(this);\n        this.handle = this.handle.bind(this);\n    }\n    /**\n     *\n     * @param req The request object\n     * @param res The reponse object\n     */\n    Route.prototype.internalHandle = function (req, res) {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                this.handle(req, res);\n                return [2 /*return*/];\n            });\n        });\n    };\n    /**\n     * Handler\n     * @param req The request object\n     * @param res The response object\n     */\n    Route.prototype.handle = function (req, res) {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                res.json({ error: true, message: 'This route was not overwritten!' });\n                return [2 /*return*/];\n            });\n        });\n    };\n    return Route;\n}());\nexports.default = Route;\n\n\n//# sourceURL=webpack:///./src/server/routes/util/Route.ts?");

/***/ }),

/***/ "./src/server/routes/util/RouteTypes.ts":
/*!**********************************************!*\
  !*** ./src/server/routes/util/RouteTypes.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = {\n    GET: 'get',\n    POST: 'post',\n};\n\n\n//# sourceURL=webpack:///./src/server/routes/util/RouteTypes.ts?");

/***/ }),

/***/ "./src/server/routes/util/index.ts":
/*!*****************************************!*\
  !*** ./src/server/routes/util/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar RouteTypes_1 = __webpack_require__(/*! ./RouteTypes */ \"./src/server/routes/util/RouteTypes.ts\");\nexports.RouteTypes = RouteTypes_1.default;\nvar Route_1 = __webpack_require__(/*! ./Route */ \"./src/server/routes/util/Route.ts\");\nexports.Route = Route_1.default;\n\n\n//# sourceURL=webpack:///./src/server/routes/util/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar helmet = __webpack_require__(/*! helmet */ \"helmet\");\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\nvar app = express();\napp.use(helmet());\napp.use(bodyParser.urlencoded({ extended: true }));\napp.use(bodyParser.json());\nmongoose.connect('mongodb://localhost:27017/shopify-monitor', {\n    useUnifiedTopology: true,\n    useNewUrlParser: true,\n});\nfor (var _i = 0, routes_2 = routes_1.default; _i < routes_2.length; _i++) {\n    var route = routes_2[_i];\n    app[route.method](route.path, route.internalHandle);\n}\napp.use(express.static('public'));\napp.listen(process.env.PORT || 3000, function () { return console.log(\"Server listening on port: \" + (process.env.port || 3000)); });\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cheerio\");\n\n//# sourceURL=webpack:///external_%22cheerio%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");\n\n//# sourceURL=webpack:///external_%22node-fetch%22?");

/***/ })

/******/ });