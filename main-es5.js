var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var map = {
                "../components/carpetas/carpetas.module": [
                    "./src/app/components/carpetas/carpetas.module.ts",
                    "default~components-carpetas-carpetas-module~components-home-home-module~components-peritos-peritos-m~dbca7eb7",
                    "default~components-carpetas-carpetas-module~components-peritos-peritos-module",
                    "components-carpetas-carpetas-module"
                ],
                "../components/home/home.module": [
                    "./src/app/components/home/home.module.ts",
                    "default~components-carpetas-carpetas-module~components-home-home-module~components-peritos-peritos-m~dbca7eb7",
                    "default~components-home-home-module~components-users-users-module~components-usuarios-usuarios-module",
                    "common",
                    "components-home-home-module"
                ],
                "../components/indicios/indicios.module": [
                    "./src/app/components/indicios/indicios.module.ts",
                    "components-indicios-indicios-module"
                ],
                "../components/peritos/peritos.module": [
                    "./src/app/components/peritos/peritos.module.ts",
                    "default~components-carpetas-carpetas-module~components-home-home-module~components-peritos-peritos-m~dbca7eb7",
                    "default~components-carpetas-carpetas-module~components-peritos-peritos-module",
                    "common",
                    "components-peritos-peritos-module"
                ],
                "../components/users/users.module": [
                    "./src/app/components/users/users.module.ts",
                    "default~components-home-home-module~components-users-users-module~components-usuarios-usuarios-module",
                    "common",
                    "components-users-users-module"
                ],
                "../components/usuarios/usuarios.module": [
                    "./src/app/components/usuarios/usuarios.module.ts",
                    "default~components-carpetas-carpetas-module~components-home-home-module~components-peritos-peritos-m~dbca7eb7",
                    "default~components-home-home-module~components-users-users-module~components-usuarios-usuarios-module",
                    "common",
                    "components-usuarios-usuarios-module"
                ],
                "./components/login/login.module": [
                    "./src/app/components/login/login.module.ts",
                    "components-login-login-module"
                ],
                "./core/core.module": [
                    "./src/app/core/core.module.ts",
                    "core-core-module"
                ]
            };
            function webpackAsyncContext(req) {
                if (!__webpack_require__.o(map, req)) {
                    return Promise.resolve().then(function () {
                        var e = new Error("Cannot find module '" + req + "'");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    });
                }
                var ids = map[req], id = ids[0];
                return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
                    return __webpack_require__(id);
                });
            }
            webpackAsyncContext.keys = function webpackAsyncContextKeys() {
                return Object.keys(map);
            };
            webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            module.exports = webpackAsyncContext;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/admin-lte.conf.ts": 
        /*!***********************************!*\
          !*** ./src/app/admin-lte.conf.ts ***!
          \***********************************/
        /*! exports provided: adminLteConf */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminLteConf", function () { return adminLteConf; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var adminLteConf = {
                sidebarLeftMenu: [
                    {
                        label: 'Menu de Navegacion',
                        separator: true
                    },
                    {
                        label: ' Inicio', route: '/',
                        iconClasses: 'fa fa-home ',
                        pullRights: [
                            {
                                classes: 'label pull-right bg-green'
                            }
                        ]
                    },
                    {
                        label: ' Usuarios',
                        route: '/usuarios',
                        iconClasses: 'fa fa-user-o',
                        pullRights: [
                            {
                                classes: 'label pull-right bg-green'
                            }
                        ]
                    },
                    {
                        label: ' Usuarios App',
                        route: '/usuariosA',
                        iconClasses: 'fa fa-user-o',
                        pullRights: [
                            {
                                classes: 'label pull-right bg-green'
                            }
                        ]
                    },
                    {
                        label: ' Carpetas de investigación',
                        route: '/carpetas',
                        iconClasses: 'fa fa-folder-o',
                        pullRights: [
                            {
                                classes: 'label pull-right bg-green'
                            }
                        ]
                    },
                    {
                        label: ' Indicios',
                        route: '/indicios',
                        iconClasses: 'fa fa-address-book-o',
                        pullRights: [
                            {
                                classes: 'label pull-right bg-green'
                            }
                        ]
                    },
                    {
                        label: ' Indicios',
                        route: '/peritos',
                        iconClasses: 'fa fa-address-book-o',
                        pullRights: [
                            {
                                classes: 'label pull-right bg-green'
                            }
                        ]
                    }
                ]
            };
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
            var routes = [
                {
                    path: '',
                    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                    loadChildren: './core/core.module#CoreModule',
                    data: {
                        title: 'Inicio'
                    }
                },
                {
                    path: 'login',
                    loadChildren: './components/login/login.module#LoginModule',
                    data: {
                        title: 'Iniciar Sesion',
                        customLayout: true
                    },
                },
                {
                    path: '**',
                    redirectTo: ''
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".skin-blue .main-header .navbar {\r\n    background-color:rgb(252, 148, 61);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5za2luLWJsdWUgLm1haW4taGVhZGVyIC5uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjUyLCAxNDgsIDYxKTtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var angular_admin_lte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-admin-lte */ "./node_modules/angular-admin-lte/fesm2015/angular-admin-lte.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_authentification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/authentification.service */ "./src/app/services/authentification.service.ts");
            /* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(layoutService, router, authenticationService) {
                    var _this = this;
                    this.layoutService = layoutService;
                    this.router = router;
                    this.authenticationService = authenticationService;
                    this.authenticationService.currentUser.subscribe(function (x) {
                        _this.currentUser = x;
                    });
                    Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["setTheme"])("bs3");
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.layoutService.isCustomLayout.subscribe(function (value) {
                        _this.customLayout = value;
                    });
                };
                AppComponent.prototype.logout = function () {
                    this.authenticationService.logout();
                    this.router.navigate(['/login']);
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: angular_admin_lte__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _services_authentification_service__WEBPACK_IMPORTED_MODULE_4__["AuthentificationService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./src/app/helpers/index.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var angular_admin_lte__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-admin-lte */ "./node_modules/angular-admin-lte/fesm2015/angular-admin-lte.js");
            /* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/fesm2015/ngx-permissions.js");
            /* harmony import */ var _angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/locales/es-MX */ "./node_modules/@angular/common/locales/es-MX.js");
            /* harmony import */ var _angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
            var config = { url: _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].url_api, options: {} };
            Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["registerLocaleData"])(_angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_12___default.a);
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                        angular_admin_lte__WEBPACK_IMPORTED_MODULE_8__["AlertModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NgZorroAntdModule"],
                        ngx_permissions__WEBPACK_IMPORTED_MODULE_11__["NgxPermissionsModule"].forRoot(),
                        ngx_socket_io__WEBPACK_IMPORTED_MODULE_15__["SocketIoModule"].forRoot(config),
                        ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
                            timeOut: 2000,
                            positionClass: 'toast-bottom-right',
                            preventDuplicates: true,
                        })
                    ],
                    providers: [
                        { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["es_ES"] },
                        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["JwtInterceptor"], multi: true },
                        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["ErrorInterceptor"], multi: true },
                        angular_admin_lte__WEBPACK_IMPORTED_MODULE_8__["LayoutService"]
                    ],
                    exports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                        ngx_permissions__WEBPACK_IMPORTED_MODULE_11__["NgxPermissionsModule"]
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/guards/auth.guard.ts": 
        /*!**************************************!*\
          !*** ./src/app/guards/auth.guard.ts ***!
          \**************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_authentification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentification.service */ "./src/app/services/authentification.service.ts");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(router, authentificationService) {
                    this.router = router;
                    this.authentificationService = authentificationService;
                }
                AuthGuard.prototype.canActivate = function (router, state) {
                    var currentUser = this.authentificationService.currentUserValue;
                    if (currentUser) {
                        return true;
                    }
                    this.router.navigate(['/login'], { queryParams: { returnURL: state.url } });
                    return false;
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services_authentification_service__WEBPACK_IMPORTED_MODULE_3__["AuthentificationService"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/helpers/error.interceptor.ts": 
        /*!**********************************************!*\
          !*** ./src/app/helpers/error.interceptor.ts ***!
          \**********************************************/
        /*! exports provided: ErrorInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () { return ErrorInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services_authentification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentification.service */ "./src/app/services/authentification.service.ts");
            var ErrorInterceptor = /** @class */ (function () {
                function ErrorInterceptor(authenticationService) {
                    this.authenticationService = authenticationService;
                }
                ErrorInterceptor.prototype.intercept = function (request, next) {
                    var _this = this;
                    return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                        console.log(err);
                        if (err.status === 401) {
                            // auto logout if 401 response returned from api
                            _this.authenticationService.logout();
                            location.reload(true);
                        }
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
                    }));
                };
                return ErrorInterceptor;
            }());
            ErrorInterceptor.ctorParameters = function () { return [
                { type: _services_authentification_service__WEBPACK_IMPORTED_MODULE_4__["AuthentificationService"] }
            ]; };
            ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], ErrorInterceptor);
            /***/ 
        }),
        /***/ "./src/app/helpers/index.ts": 
        /*!**********************************!*\
          !*** ./src/app/helpers/index.ts ***!
          \**********************************/
        /*! exports provided: ErrorInterceptor, JwtInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/helpers/error.interceptor.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () { return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"]; });
            /* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/helpers/jwt.interceptor.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"]; });
            /***/ 
        }),
        /***/ "./src/app/helpers/jwt.interceptor.ts": 
        /*!********************************************!*\
          !*** ./src/app/helpers/jwt.interceptor.ts ***!
          \********************************************/
        /*! exports provided: JwtInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () { return JwtInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_authentification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentification.service */ "./src/app/services/authentification.service.ts");
            var JwtInterceptor = /** @class */ (function () {
                function JwtInterceptor(authenticationService) {
                    this.authenticationService = authenticationService;
                }
                JwtInterceptor.prototype.intercept = function (request, next) {
                    var currentUser = this.authenticationService.currentUserValue;
                    if (currentUser && currentUser.token) {
                        request = request.clone({
                            setHeaders: {
                                token: currentUser.token
                            }
                        });
                    }
                    console.log(request);
                    return next.handle(request);
                };
                return JwtInterceptor;
            }());
            JwtInterceptor.ctorParameters = function () { return [
                { type: _services_authentification_service__WEBPACK_IMPORTED_MODULE_2__["AuthentificationService"] }
            ]; };
            JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], JwtInterceptor);
            /***/ 
        }),
        /***/ "./src/app/models/role.ts": 
        /*!********************************!*\
          !*** ./src/app/models/role.ts ***!
          \********************************/
        /*! exports provided: Roles */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roles", function () { return Roles; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Roles = /** @class */ (function () {
                function Roles(id_role, nombre_role) {
                    this.id_role = id_role;
                    this.nombre_role = nombre_role;
                }
                return Roles;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/user.ts": 
        /*!********************************!*\
          !*** ./src/app/models/user.ts ***!
          \********************************/
        /*! exports provided: User */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function () { return User; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var User = /** @class */ (function () {
                function User(id_usuario, nombre_empleado, nombre_usuario, contrasena, id_role, status, cargo, fecha_creacion, fecha_ultima_modificacion, fecha_modificacion_por, nombre_role, creado_por, token) {
                    this.id_usuario = id_usuario;
                    this.nombre_empleado = nombre_empleado;
                    this.nombre_usuario = nombre_usuario;
                    this.contrasena = contrasena;
                    this.id_role = id_role;
                    this.status = status;
                    this.cargo = cargo;
                    this.fecha_creacion = fecha_creacion;
                    this.fecha_ultima_modificacion = fecha_ultima_modificacion;
                    this.fecha_modificacion_por = fecha_modificacion_por;
                    this.nombre_role = nombre_role;
                    this.creado_por = creado_por;
                    this.token = token;
                }
                return User;
            }());
            /***/ 
        }),
        /***/ "./src/app/services/authentification.service.ts": 
        /*!******************************************************!*\
          !*** ./src/app/services/authentification.service.ts ***!
          \******************************************************/
        /*! exports provided: AuthentificationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentificationService", function () { return AuthentificationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services_roles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/roles.service */ "./src/app/services/roles.service.ts");
            /* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/fesm2015/ngx-permissions.js");
            var AuthentificationService = /** @class */ (function () {
                function AuthentificationService(http, permissionsService, roleService) {
                    this.http = http;
                    this.permissionsService = permissionsService;
                    this.roleService = roleService;
                    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
                    this.currentUser = this.currentUserSubject.asObservable();
                }
                Object.defineProperty(AuthentificationService.prototype, "currentUserValue", {
                    get: function () {
                        return this.currentUserSubject.value;
                    },
                    enumerable: true,
                    configurable: true
                });
                AuthentificationService.prototype.login = function (username, password) {
                    var _this = this;
                    var data = {
                        nombre_usuario: username,
                        contrasena: password
                    };
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url_api + "iniciar_sesion", data)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
                        if (user && user.token) {
                            var userLogin = {
                                id_role: user.usuario.id_role,
                                id_usuario: user.usuario.id_usuario,
                                nombre_empleado: user.usuario.nombre_empleado,
                                nombre_usuario: user.usuario.nombre_usuario,
                                token: user.token,
                                cargo: user.usuario.cargo,
                                contrasena: null
                            };
                            localStorage.setItem('currentUser', JSON.stringify(userLogin));
                            _this.currentUserSubject.next(userLogin);
                            _this.roleService.getCheckedKeysPermissions(Number(userLogin.id_role))
                                .then(function (permissions) {
                                console.log("TCL: AuthentificationService -> login -> permissions", permissions);
                                _this.permissionsService.loadPermissions(permissions);
                            });
                        }
                        return user;
                    }));
                };
                AuthentificationService.prototype.logout = function () {
                    localStorage.removeItem('currentUser');
                    this.currentUserSubject.next(null);
                };
                AuthentificationService.prototype.updatePermissions = function () {
                    var _this = this;
                    this.roleService.getCheckedKeysPermissions(Number(this.currentUserValue.id_role))
                        .then(function (permissions) {
                        console.log("TCL: CoreComponent -> permissions", permissions);
                        _this.permissionsService.loadPermissions(permissions);
                    });
                };
                return AuthentificationService;
            }());
            AuthentificationService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsService"] },
                { type: _services_roles_service__WEBPACK_IMPORTED_MODULE_6__["RolesService"] }
            ]; };
            AuthentificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthentificationService);
            /***/ 
        }),
        /***/ "./src/app/services/roles.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/roles.service.ts ***!
          \*******************************************/
        /*! exports provided: RolesService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesService", function () { return RolesService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/role */ "./src/app/models/role.ts");
            /* harmony import */ var _admin_lte_conf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../admin-lte.conf */ "./src/app/admin-lte.conf.ts");
            /* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
            var RolesService = /** @class */ (function () {
                function RolesService(http) {
                    this.http = http;
                }
                RolesService.prototype.getRoles = function () {
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url_api + "roles")
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                        return JSON.parse(JSON.stringify(result.Roles)).map(function (item) {
                            return new _models_role__WEBPACK_IMPORTED_MODULE_6__["Roles"](item.id_role, item.nombre_role);
                        });
                    }));
                };
                RolesService.prototype.getRolesModulos = function (id_role) {
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url_api + "roles/" + id_role + "/modulos")
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                        return result;
                    }));
                };
                RolesService.prototype.getRolesPermisos = function (id_role) {
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url_api + "roles/" + id_role + "/modulos/permisos")
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                        return result;
                    }));
                };
                RolesService.prototype.getTreeRolesAll = function () {
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url_api + "roles/modulos")
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                        return result;
                    }));
                };
                RolesService.prototype.getCheckedKeysPermissions = function (id_role) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var defaultCheckedKeys, modulesRole;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    defaultCheckedKeys = [];
                                    return [4 /*yield*/, this.getRolesPermisos(id_role).toPromise()];
                                case 1:
                                    modulesRole = _a.sent();
                                    if (modulesRole.Roles.length === 0) {
                                        return [2 /*return*/, defaultCheckedKeys];
                                    }
                                    lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"](modulesRole.Roles[0].PermisosNivel1, function (value1, key) {
                                        defaultCheckedKeys.push(value1.nombre_permiso);
                                        if (value1.PermisosNivel2.length > 0) {
                                            lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"](value1.PermisosNivel2, function (value2, key) {
                                                defaultCheckedKeys.push(value2.nombre_permiso);
                                            });
                                            defaultCheckedKeys = defaultCheckedKeys.filter(function (value) { return value1.nombre_permiso !== value; });
                                        }
                                    });
                                    return [2 /*return*/, defaultCheckedKeys];
                            }
                        });
                    });
                };
                RolesService.prototype.getCheckedKeysModules = function (id_role) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var defaultCheckedKeys, modulesRole;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    defaultCheckedKeys = [];
                                    return [4 /*yield*/, this.getRolesModulos(id_role).toPromise()];
                                case 1:
                                    modulesRole = _a.sent();
                                    if (modulesRole.Roles.length === 0) {
                                        return [2 /*return*/, defaultCheckedKeys];
                                    }
                                    lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"](modulesRole.Roles[0].ModulosPermisos, function (valueModulos, key) {
                                        defaultCheckedKeys.push(valueModulos.id_modulo);
                                    });
                                    return [2 /*return*/, defaultCheckedKeys];
                            }
                        });
                    });
                };
                RolesService.prototype.getTreePermissions = function (id_role) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var nodes, Nivel1, Nivel2, modules, permissions;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    nodes = [];
                                    Nivel1 = [];
                                    Nivel2 = [];
                                    return [4 /*yield*/, this.getRolesModulos(id_role).toPromise()];
                                case 1:
                                    modules = _a.sent();
                                    return [4 /*yield*/, this.getTreeRolesAll().toPromise()];
                                case 2:
                                    permissions = _a.sent();
                                    if (modules.Roles.length === 0) {
                                        return [2 /*return*/, nodes];
                                    }
                                    modules = modules.Roles[0].ModulosPermisos;
                                    permissions = permissions.Modulos;
                                    lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"](modules, function (valueModule, key) {
                                        nodes.push({
                                            title: valueModule.nombre_modulo,
                                            key: String(valueModule.nombre_modulo).toLowerCase() + "-" + valueModule.id_modulo
                                        });
                                        lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"](permissions, function (valueModuleP, keyModule) {
                                            if (valueModule.id_modulo === valueModuleP.id_modulo) {
                                                Nivel1 = [];
                                                Nivel2 = [];
                                                lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"](valueModuleP.Permisos_Nivel_1s, function (valueNivel1, keyNivel1) {
                                                    Nivel1.push({
                                                        title: valueNivel1.descripcion,
                                                        key: valueNivel1.nombre_permiso,
                                                        isLeaf: true
                                                    });
                                                    if (valueNivel1.Permisos_Nivel_2s.length > 0) {
                                                        Nivel1[keyNivel1].isLeaf = false;
                                                        lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"](valueNivel1.Permisos_Nivel_2s, function (valueNivel2, keyNivel2) {
                                                            Nivel2.push({
                                                                title: valueNivel2.descripcion,
                                                                key: valueNivel2.nombre_permiso,
                                                                isLeaf: true
                                                            });
                                                        });
                                                        Nivel1[keyNivel1].children = Nivel2;
                                                    }
                                                });
                                            }
                                        });
                                        nodes[key].children = Nivel1;
                                    });
                                    return [2 /*return*/, nodes];
                            }
                        });
                    });
                };
                RolesService.prototype.getTreeModules = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var nodes, modules;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    nodes = [];
                                    return [4 /*yield*/, this.getTreeRolesAll().toPromise()];
                                case 1:
                                    modules = _a.sent();
                                    modules = modules.Modulos;
                                    lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"](modules, function (value, key) {
                                        nodes.push({
                                            title: value.nombre_modulo,
                                            key: value.id_modulo,
                                            isLeaf: true
                                        });
                                    });
                                    return [2 /*return*/, nodes];
                            }
                        });
                    });
                };
                RolesService.prototype.getPermissions = function (id_role) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var permissions, modulesRole;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    permissions = [];
                                    return [4 /*yield*/, this.getRolesPermisos(id_role).toPromise()];
                                case 1:
                                    modulesRole = _a.sent();
                                    if (modulesRole.Roles.length === 0) {
                                        return [2 /*return*/, permissions];
                                    }
                                    lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"](modulesRole.Roles[0].ModulosPermisos, function (valueModulos, key) {
                                        console.log(modulesRole.Roles[0].ModulosPermisos);
                                        lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"](valueModulos.PermisosNivel1, function (value1, key) {
                                            permissions.push(value1.nombre_permiso);
                                            lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"](value1.PermisosNivel2, function (value2, key) {
                                                permissions.push(value2.nombre_permiso);
                                            });
                                        });
                                    });
                                    return [2 /*return*/, permissions];
                            }
                        });
                    });
                };
                RolesService.prototype.addRole = function (role, modulos) {
                    var data = {
                        id_role: role.id_role,
                        nombre_role: role.nombre_role,
                        modulos: modulos
                    };
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url_api + "roles", data)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                        return result;
                    }));
                };
                RolesService.prototype.addModule = function (role, modulos) {
                    return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url_api + "roles/" + role.id_role + "/modulos", { modulos: modulos })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                        return result;
                    }));
                };
                RolesService.prototype.updatePermissions = function (role, permisos) {
                    var data = {
                        nombre_role: role.nombre_role,
                        permisos: permisos
                    };
                    return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url_api + "roles/" + role.id_role + "/modulos/permisos", data)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                        return result;
                    }));
                };
                RolesService.prototype.deleteRole = function (id_role) {
                    return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url_api + "roles/" + id_role)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                        return result;
                    }));
                };
                RolesService.prototype.countRoleUser = function (id_role) {
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url_api + "roles/" + id_role + "/count")
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                        return JSON.parse(JSON.stringify(result.Users)).map(function (item) {
                            return new _models_user__WEBPACK_IMPORTED_MODULE_8__["User"](item.id_usuario, item.nombre_empleado, item.nombre_usuario, item.contrasena, item.id_role);
                        });
                    }));
                };
                RolesService.prototype.setMenuPermissions = function (id_role) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var namesModules, adminConfig, modulesRole;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    namesModules = [];
                                    adminConfig = [];
                                    return [4 /*yield*/, this.getRolesModulos(id_role).toPromise()];
                                case 1:
                                    modulesRole = _a.sent();
                                    if (modulesRole.Roles.length === 0) {
                                        return [2 /*return*/, namesModules];
                                    }
                                    return [4 /*yield*/, lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"](modulesRole.Roles[0].ModulosPermisos, function (valueModulos, key) {
                                            namesModules.push(String(valueModulos.nombre_modulo).toLowerCase().replace('/', ''));
                                        })];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"](namesModules, function (value, index) {
                                            lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"](_admin_lte_conf__WEBPACK_IMPORTED_MODULE_7__["adminLteConf"].sidebarLeftMenu, function (value2) {
                                                if (value === String(value2.route).toLowerCase().replace('/', '')) {
                                                    adminConfig.push(value2);
                                                }
                                            });
                                        })];
                                case 3:
                                    _a.sent();
                                    adminConfig = lodash__WEBPACK_IMPORTED_MODULE_5__["orderBy"](adminConfig, ['nombre_modulo'], ['asc', 'desc']);
                                    adminConfig.unshift(_admin_lte_conf__WEBPACK_IMPORTED_MODULE_7__["adminLteConf"].sidebarLeftMenu[1]);
                                    adminConfig.unshift(_admin_lte_conf__WEBPACK_IMPORTED_MODULE_7__["adminLteConf"].sidebarLeftMenu[0]);
                                    return [2 /*return*/, adminConfig];
                            }
                        });
                    });
                };
                RolesService.prototype.getModulos = function (id_role) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var nameModules, modulesRole;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    nameModules = [];
                                    return [4 /*yield*/, this.getRolesModulos(id_role).toPromise()];
                                case 1:
                                    modulesRole = _a.sent();
                                    if (modulesRole.Roles.length === 0) {
                                        return [2 /*return*/, nameModules];
                                    }
                                    lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"](modulesRole.Roles[0].ModulosPermisos, function (valueModulos, key) {
                                        nameModules.push(String(valueModulos.nombre_modulo).toUpperCase().trim());
                                    });
                                    return [2 /*return*/, nameModules];
                            }
                        });
                    });
                };
                return RolesService;
            }());
            RolesService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            RolesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], RolesService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                // url_api: 'http://192.168.2.16:3000/' //server SIGECC
                // url_api: 'https://back.tlk.com.mx/' //server SIGECC nube
                url_api: 'http://192.168.2.10:3000/'
                // url_api: 'https://api.siggec.tlk.com.mx/'
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\src\SIGGEC_24_ANGULAR\src\main.ts */ "./src/main.ts");
            /***/ 
        }),
        /***/ 1: 
        /*!********************!*\
          !*** ws (ignored) ***!
          \********************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map