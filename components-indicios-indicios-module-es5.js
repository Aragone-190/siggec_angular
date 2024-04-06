(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-indicios-indicios-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/indicios/indicios.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/indicios/indicios.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>indicios works!</p>\r\n");
            /***/ 
        }),
        /***/ "./src/app/components/indicios/indicios-routing.module.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/components/indicios/indicios-routing.module.ts ***!
          \****************************************************************/
        /*! exports provided: IndiciosRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndiciosRoutingModule", function () { return IndiciosRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _indicios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./indicios.component */ "./src/app/components/indicios/indicios.component.ts");
            var routes = [
                {
                    path: '',
                    component: _indicios_component__WEBPACK_IMPORTED_MODULE_3__["IndiciosComponent"]
                }
            ];
            var IndiciosRoutingModule = /** @class */ (function () {
                function IndiciosRoutingModule() {
                }
                return IndiciosRoutingModule;
            }());
            IndiciosRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], IndiciosRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/components/indicios/indicios.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/components/indicios/indicios.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5kaWNpb3MvaW5kaWNpb3MuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/indicios/indicios.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/components/indicios/indicios.component.ts ***!
          \***********************************************************/
        /*! exports provided: IndiciosComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndiciosComponent", function () { return IndiciosComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var IndiciosComponent = /** @class */ (function () {
                function IndiciosComponent() {
                }
                IndiciosComponent.prototype.ngOnInit = function () {
                };
                return IndiciosComponent;
            }());
            IndiciosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-indicios',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./indicios.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/indicios/indicios.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./indicios.component.css */ "./src/app/components/indicios/indicios.component.css")).default]
                })
            ], IndiciosComponent);
            /***/ 
        }),
        /***/ "./src/app/components/indicios/indicios.module.ts": 
        /*!********************************************************!*\
          !*** ./src/app/components/indicios/indicios.module.ts ***!
          \********************************************************/
        /*! exports provided: IndiciosModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndiciosModule", function () { return IndiciosModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _indicios_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./indicios-routing.module */ "./src/app/components/indicios/indicios-routing.module.ts");
            /* harmony import */ var _indicios_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./indicios.component */ "./src/app/components/indicios/indicios.component.ts");
            /* harmony import */ var angular_admin_lte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-admin-lte */ "./node_modules/angular-admin-lte/fesm2015/angular-admin-lte.js");
            /* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
            /* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm2015/ant-design-icons-angular-icons.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var antDesignIcons = _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__;
            var icons = Object.keys(antDesignIcons).map(function (key) { return antDesignIcons[key]; });
            var IndiciosModule = /** @class */ (function () {
                function IndiciosModule() {
                }
                return IndiciosModule;
            }());
            IndiciosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_indicios_component__WEBPACK_IMPORTED_MODULE_4__["IndiciosComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _indicios_routing_module__WEBPACK_IMPORTED_MODULE_3__["IndiciosRoutingModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzSelectModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzModalModule"],
                        angular_admin_lte__WEBPACK_IMPORTED_MODULE_5__["BoxModule"],
                        angular_admin_lte__WEBPACK_IMPORTED_MODULE_5__["BoxSmallModule"]
                    ],
                    schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
                    providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NZ_ICONS"], useValue: icons }]
                })
            ], IndiciosModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=components-indicios-indicios-module-es2015.js.map
//# sourceMappingURL=components-indicios-indicios-module-es5.js.map
//# sourceMappingURL=components-indicios-indicios-module-es5.js.map