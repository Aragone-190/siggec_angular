(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-home-home-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n\r\n    <div class=\"row\">\r\n\r\n        <ng-container *ngIf=\"this.currentUserSubject.value.nombre_usuario == 'admin'; else isToFolderTotalPerito\">\r\n            <div class=\"col-md-4 col-xs-12\">\r\n\r\n                <ng-container *ngIf=\"this.countAnimatedIsCeroTotalCarpetas == true; else isForTrueCountTotalCarpetas\">\r\n                    <mk-box-small header=\"0\" backgroundColor=\"#28365A\" headerColor=\"#FFFFFF\" iconStyleClass=\"fa fa-folder-o\">\r\n                        <mk-box-small-content style=\"color: white;\">Carpetas de investigacion</mk-box-small-content>\r\n                        <mk-box-small-footer>\r\n                            <a routerLink=\"/carpetas\" headerColor=\"#FFFFFF\">Mas informacion <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n                        </mk-box-small-footer>\r\n                    </mk-box-small>\r\n                </ng-container>\r\n\r\n                <ng-template #isForTrueCountTotalCarpetas>\r\n                    <mk-box-small header=\"{{ animacionContadores.totalCarpetas | number : '1.0-0' }}\" backgroundColor=\"#28365A\" headerColor=\"#FFFFFF\" iconStyleClass=\"fa fa-folder-o\">\r\n                        <mk-box-small-content style=\"color: white;\">Carpetas de investigacion</mk-box-small-content>\r\n                        <mk-box-small-footer>\r\n                            <a routerLink=\"/carpetas\" headerColor=\"#FFFFFF\">Mas informacion <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n                        </mk-box-small-footer>\r\n                    </mk-box-small>\r\n                </ng-template>\r\n\r\n            </div>\r\n        </ng-container>\r\n\r\n\r\n        <ng-template #isToFolderTotalPerito>\r\n            <div class=\"col-md-4 col-xs-12\">\r\n                <ng-container *ngIf=\"this.countAnimatedIsCeroTotalCarpetasPeritos == true; else isForTrueCountTotalCarpetasPeritos\">\r\n                    <mk-box-small header=\"0\" backgroundColor=\"#28365A\" headerColor=\"#FFFFFF\" iconStyleClass=\"fa fa-folder-o\">\r\n                        <mk-box-small-content style=\"color: white;\">Carpetas de investigacion</mk-box-small-content>\r\n                        <mk-box-small-footer>\r\n                            <a routerLink=\"/peritos\" headerColor=\"#FFFFFF\">Mas informacion <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n                        </mk-box-small-footer>\r\n                    </mk-box-small>\r\n                </ng-container>\r\n\r\n                <ng-template #isForTrueCountTotalCarpetasPeritos>\r\n                    <mk-box-small header=\"{{ animacionContadores.totalCarpetasPeritos | number : '1.0-0' }}\" backgroundColor=\"#28365A\" headerColor=\"#FFFFFF\" iconStyleClass=\"fa fa-folder-o\">\r\n                        <mk-box-small-content style=\"color: white;\">Carpetas de investigacion</mk-box-small-content>\r\n                        <mk-box-small-footer>\r\n                            <a routerLink=\"/peritos\" headerColor=\"#FFFFFF\">Mas informacion <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n                        </mk-box-small-footer>\r\n                    </mk-box-small>\r\n                </ng-template>\r\n\r\n            </div>\r\n        </ng-template>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        \r\n\r\n        <ng-container *ngIf=\"this.currentUserSubject.value.nombre_usuario == 'admin'; else isToPerito\">\r\n            <div class=\"col-md-4 col-xs-12\">\r\n\r\n                <ng-container *ngIf=\"this.countAnimatedIsCeroTotalIndicios == true; else isForTrueCountTotalIindicios\">     \r\n                    <mk-box-small header=\"0\" backgroundColor=\"#BE9655\" headerColor=\"#FFFFFF\" iconStyleClass=\"fa fa-file-text\">\r\n                        <mk-box-small-content style=\"color: white;\">Indicios</mk-box-small-content>\r\n                        <mk-box-small-footer>\r\n                            <a routerLink=\"/peritos\" headerColor=\"#FFFFFF\">Mas informacion <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n                        </mk-box-small-footer>\r\n                    </mk-box-small>\r\n                </ng-container>\r\n\r\n                <ng-template #isForTrueCountTotalIindicios>\r\n                    <mk-box-small header=\"{{ animacionContadores.totalIndicios | number : '1.0-0' }}\" backgroundColor=\"#BE9655\" headerColor=\"#FFFFFF\" iconStyleClass=\"fa fa-file-text\">\r\n                        <mk-box-small-content style=\"color: white;\">Indicios</mk-box-small-content>\r\n                        <mk-box-small-footer>\r\n                            <a routerLink=\"/peritos\" headerColor=\"#FFFFFF\">Mas informacion <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n                        </mk-box-small-footer>\r\n                    </mk-box-small>\r\n                </ng-template>\r\n\r\n            </div>\r\n        </ng-container>\r\n        <ng-template #isToPerito>\r\n            <div class=\"col-md-4 col-xs-12\">\r\n\r\n                <ng-container *ngIf=\"this.countAnimatedIsCeroTotalIndiciosPerito == true; else isForTrueCountTotalIindiciosPerito\"> \r\n                    <mk-box-small header=\"0\" backgroundColor=\"#BE9655\" headerColor=\"#FFFFFF\" iconStyleClass=\"fa fa-file-text\">\r\n                        <mk-box-small-content style=\"color: white;\">Indicios</mk-box-small-content>\r\n                        <mk-box-small-footer>\r\n                            <a routerLink=\"/peritos\" headerColor=\"#FFFFFF\">Mas informacion <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n                        </mk-box-small-footer>\r\n                    </mk-box-small>\r\n                </ng-container>\r\n\r\n                <ng-template #isForTrueCountTotalIindiciosPerito>\r\n                    <mk-box-small header=\"{{ animacionContadores.totalIndicioPerito | number : '1.0-0' }}\" backgroundColor=\"#BE9655\" headerColor=\"#FFFFFF\" iconStyleClass=\"fa fa-file-text\">\r\n                        <mk-box-small-content style=\"color: white;\">Indicios</mk-box-small-content>\r\n                        <mk-box-small-footer>\r\n                            <a routerLink=\"/peritos\" headerColor=\"#FFFFFF\">Mas informacion <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n                        </mk-box-small-footer>\r\n                    </mk-box-small>\r\n                </ng-template>\r\n\r\n            </div>\r\n        </ng-template>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <ng-container *ngIf=\"this.currentUserSubject.value.id_role == 1; else isForDiferenteToAdmin\">\r\n            <div class=\"col-md-4 col-xs-12\">\r\n                <mk-box-small header=\"{{ animacionContadores.totalUsuarios | number : '1.0-0' }}\" backgroundColor=\"#285C4D\" headerColor=\"#FFFFFF\" iconStyleClass=\"fa fa-user-o\">\r\n                    <mk-box-small-content style=\"color: white;\">Usuarios registrados</mk-box-small-content>\r\n                    <mk-box-small-footer>\r\n                        <a routerLink=\"/usuarios\" headerColor=\"#FFFFFF\">Mas informacion <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n                    </mk-box-small-footer>\r\n                </mk-box-small>\r\n            </div>\r\n        </ng-container>\r\n        <ng-template #isForDiferenteToAdmin>\r\n        </ng-template>\r\n    </div>\r\n\r\n    \r\n    <div class=\"row\">\r\n        <ng-container *ngIf=\"this.currentUserSubject.value.id_role == 1; else isForDiferenteToAdminSecondValidate\">\r\n            <div class=\"col-md-4 col-xs-12\">\r\n                <mk-box-small header=\"{{ animacionContadores.totalUsuariosA | number : '1.0-0' }}\" backgroundColor=\"#9F2241\" headerColor=\"#FFFFFF\" iconStyleClass=\"fa fa-user-o\">\r\n                    <mk-box-small-content style=\"color: white;\">Usuarios app registrados</mk-box-small-content>\r\n                    <mk-box-small-footer>\r\n                        <a routerLink=\"/usuariosA\" headerColor=\"#FFFFFF\">Mas informacion <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n                    </mk-box-small-footer>\r\n                </mk-box-small>\r\n            </div>\r\n        </ng-container>\r\n        <ng-template #isForDiferenteToAdminSecondValidate>\r\n        </ng-template>\r\n    </div>\r\n</section>\r\n");
            /***/ 
        }),
        /***/ "./src/app/components/home/home-routing.module.ts": 
        /*!********************************************************!*\
          !*** ./src/app/components/home/home-routing.module.ts ***!
          \********************************************************/
        /*! exports provided: HomeRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () { return HomeRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/components/home/home.component.ts");
            var routes = [
                {
                    path: '',
                    component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
                }
            ];
            var HomeRoutingModule = /** @class */ (function () {
                function HomeRoutingModule() {
                }
                return HomeRoutingModule;
            }());
            HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], HomeRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/components/home/home.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/home/home.component.ts ***!
          \***************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var src_app_models_logs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/logs */ "./src/app/models/logs.ts");
            /* harmony import */ var src_app_services_carpeta_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/carpeta.service */ "./src/app/services/carpeta.service.ts");
            /* harmony import */ var src_app_services_home_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/home.service */ "./src/app/services/home.service.ts");
            /* harmony import */ var src_app_services_indicio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/indicio.service */ "./src/app/services/indicio.service.ts");
            /* harmony import */ var src_app_services_peritos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/peritos.service */ "./src/app/services/peritos.service.ts");
            /* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
            /* harmony import */ var src_app_services_vehiculo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/vehiculo.service */ "./src/app/services/vehiculo.service.ts");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(services, peritosService, carpetasService, userService, usuariosService, indiciosService, datepipe, http, homeServices) {
                    var _this = this;
                    this.services = services;
                    this.peritosService = peritosService;
                    this.carpetasService = carpetasService;
                    this.userService = userService;
                    this.usuariosService = usuariosService;
                    this.indiciosService = indiciosService;
                    this.datepipe = datepipe;
                    this.http = http;
                    this.homeServices = homeServices;
                    this.animacionContadores = {
                        'totalCarpetas': 0,
                        'totalCarpetasPeritos': 0,
                        'totalIndicios': 0,
                        'totalIndicioPerito': 0,
                        'totalUsuarios': 0,
                        'totalUsuariosA': 0
                    };
                    this.now = new Date();
                    this.countAnimatedIsCeroTotalCarpetas = false;
                    this.countAnimatedIsCeroTotalCarpetasPeritos = false;
                    this.countAnimatedIsCeroTotalIndicios = false;
                    this.countAnimatedIsCeroTotalIndiciosPerito = false;
                    this.data = [];
                    this.browserName = '';
                    this.browserVersion = '';
                    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
                    this.currentUser = this.currentUserSubject.asObservable();
                    this.carpetasService.getTotal().subscribe(function (request) {
                        _this.countAnimation('totalCarpetas', request);
                        if (request == 0) {
                            _this.countAnimatedIsCeroTotalCarpetas = true;
                        }
                    }, function (error) {
                        console.log(error);
                    });
                    this.userService.getCountUsers().subscribe(function (request) {
                        _this.countAnimation('totalUsuarios', request);
                    }, function (error) {
                        console.log(error);
                    });
                    this.usuariosService.getCountUserApp().subscribe(function (request) {
                        _this.countAnimation('totalUsuariosA', request);
                    }, function (error) {
                        console.log(error);
                    });
                    this.indiciosService.getIndiciosTotal().subscribe(function (request) {
                        _this.countAnimation('totalIndicios', request);
                        if (request == 0) {
                            _this.countAnimatedIsCeroTotalIndicios = true;
                        }
                    }, function (error) {
                        console.log(error);
                    });
                    this.indiciosService.getIndiciosTotalPerito(this.currentUserSubject.value.nombre_usuario).subscribe(function (request) {
                        _this.countAnimation('totalIndicioPerito', request);
                        if (request == 0) {
                            _this.countAnimatedIsCeroTotalIndiciosPerito = true;
                        }
                    }, function (error) {
                        console.log(error);
                    });
                    //peritos 
                    this.peritosService.getTotalFolderxPerito(this.currentUserSubject.value.nombre_usuario).subscribe(function (request) {
                        _this.countAnimation('totalCarpetasPeritos', request.length);
                        if (request == 0) {
                            _this.countAnimatedIsCeroTotalCarpetasPeritos = true;
                        }
                    }, function (error) {
                        console.log(error);
                    });
                    /////////////////////////////////////////////////////////////
                    // this.services.getRegistrosVehiculo().subscribe(request => {
                    //   console.log('services request ---> ', request);
                    //   let data = new Vehiculo(
                    //     null,
                    //     'C3',
                    //     'MAZDA',
                    //     'dedea',
                    //     'fefefe',
                    //     'fefefe',
                    //     'AMARILLO',
                    //     '2',
                    //     '24F3-DEW-32',
                    //     'fwefwfw',
                    //     'egghreh',
                    //     'E2',
                    //     'FSFFewrf',
                    //     'hrhrtrb',
                    //     'trrnmrmtrn',
                    //     'gerreerb',
                    //     'btterb',
                    //     'dqcqevweve',
                    //     'fwefwefe',
                    //     'ntyjyjtyktytewfadfd',
                    //     'egrherhn543g3g',
                    //     'ge5gegw4g4h5',
                    //     'h5herhg5t4w',
                    //     'svrwv',
                    //     'gererg242t32',
                    //     '2r23rf2v234f',
                    //     'false',
                    //     'brberberberbre',
                    //     'berbreber',
                    //     'brebrebrebre',
                    //     'berbrebrbre',
                    //     'tegheoi4nt43nit43n',
                    //     '23.432454',
                    //     '-100.321421',
                    //     '4t3t4334g43',
                    //     'g354uhbbiuot43',
                    //     'g34jkojogb4g3',
                    //   );
                    //   console.log('prueba de insert', data);
                    //   this.services.addVehiculo(data).subscribe(result => {
                    //     console.log(result);
                    //   }, err => {
                    //     console.log(err);
                    //   }); 
                    // },
                    // error => {
                    //   console.log(error);
                    // }); 
                    ///////////////////////////////////////////////////
                }
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // this.countAnimation('totalIndicios', 1);
                    // this.countAnimation('totalUsuarios', 1);
                    // this.countAnimation('totalUsuariosA', 1);
                    this.dateLogin = this.datepipe.transform(this.now, 'dd/MM/yyyy hh:mm:ss', 'es');
                    this.getIPAddress();
                    this.browserName = this.detectBrowserName();
                    this.browserVersion = this.detectBrowserVersion();
                    setTimeout(function () {
                        _this.Logs();
                    }, 4000);
                };
                HomeComponent.prototype.getIPAddress = function () {
                    var _this = this;
                    this.http.get('https://jsonip.com').subscribe(function (data) {
                        _this.ipAddressPrivate = data['ip'];
                    });
                    this.http.get('https://api.ipify.org?format=json').subscribe(function (data) {
                        _this.ipAddressPublic = data['ip'];
                    });
                };
                HomeComponent.prototype.detectBrowserName = function () {
                    var agent = window.navigator.userAgent.toLowerCase();
                    switch (true) {
                        case agent.indexOf('edge') > -1:
                            return 'edge';
                        case agent.indexOf('opr') > -1 && !!window.opr:
                            return 'opera';
                        case agent.indexOf('chrome') > -1 && !!window.chrome:
                            return 'chrome';
                        case agent.indexOf('trident') > -1:
                            return 'ie';
                        case agent.indexOf('firefox') > -1:
                            return 'firefox';
                        case agent.indexOf('safari') > -1:
                            return 'safari';
                        default:
                            return 'other';
                    }
                };
                HomeComponent.prototype.detectBrowserVersion = function () {
                    var userAgent = navigator.userAgent, tem, matchTest = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                    if (/trident/i.test(matchTest[1])) {
                        tem = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
                        return 'IE ' + (tem[1] || '');
                    }
                    if (matchTest[1] === 'Chrome') {
                        tem = userAgent.match(/\b(OPR|Edge)\/(\d+)/);
                        if (tem != null)
                            return tem.slice(1).join(' ').replace('OPR', 'Opera');
                    }
                    matchTest = matchTest[2] ? [matchTest[1], matchTest[2]] : [navigator.appName, navigator.appVersion, '-?'];
                    if ((tem = userAgent.match(/version\/(\d+)/i)) != null)
                        matchTest.splice(1, 1, tem[1]);
                    return matchTest.join(' ');
                };
                HomeComponent.prototype.Logs = function () {
                    var navegadorUsed = this.browserName + ', ' + this.browserVersion;
                    var descripcion = 'Inicio de ' + this.currentUserSubject.value.nombre_usuario;
                    if (this.ipAddressPrivate == undefined) {
                        this.ipAddressPrivate = '';
                    }
                    if (this.ipAddressPublic == undefined) {
                        this.ipAddressPublic = '';
                    }
                    var metaData = new src_app_models_logs__WEBPACK_IMPORTED_MODULE_5__["AdmLogs"]('usuarios', 'Inicio de sesion', this.currentUserSubject.value.id_usuario, 'Consulta', descripcion, this.currentUserSubject.value.nombre_empleado, this.currentUserSubject.value.nombre_usuario, this.ipAddressPublic, this.ipAddressPrivate, navegadorUsed, this.dateLogin);
                    this.homeServices.addLogLogin(metaData).subscribe(function (result) {
                    }, function (err) {
                        console.log(err);
                    });
                };
                HomeComponent.prototype.countAnimation = function (tipo, total) {
                    var _this = this;
                    setTimeout(function () {
                        var countStop = setInterval(function () {
                            if (total - _this.animacionContadores[tipo] > 100000) {
                                _this.animacionContadores[tipo] += 100000;
                            }
                            else if (total - _this.animacionContadores[tipo] > 50000) {
                                _this.animacionContadores[tipo] += 50000;
                            }
                            else if (total - _this.animacionContadores[tipo] > 10000) {
                                _this.animacionContadores[tipo] += 10000;
                            }
                            else if (total - _this.animacionContadores[tipo] > 1000) {
                                _this.animacionContadores[tipo] += 1000;
                            }
                            else if (total - _this.animacionContadores[tipo] > 100) {
                                _this.animacionContadores[tipo] += 100;
                            }
                            else {
                                _this.animacionContadores[tipo]++;
                            }
                            if (_this.animacionContadores[tipo] == total) {
                                clearInterval(countStop);
                            }
                        }, 20);
                    }, 2000);
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: src_app_services_vehiculo_service__WEBPACK_IMPORTED_MODULE_12__["vehiculoService"] },
                { type: src_app_services_peritos_service__WEBPACK_IMPORTED_MODULE_9__["peritosService"] },
                { type: src_app_services_carpeta_service__WEBPACK_IMPORTED_MODULE_6__["carpetaService"] },
                { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
                { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_11__["UsersService"] },
                { type: src_app_services_indicio_service__WEBPACK_IMPORTED_MODULE_8__["indicioService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: src_app_services_home_service__WEBPACK_IMPORTED_MODULE_7__["HomeService"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/home.module.ts": 
        /*!************************************************!*\
          !*** ./src/app/components/home/home.module.ts ***!
          \************************************************/
        /*! exports provided: HomeModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function () { return HomeModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/components/home/home-routing.module.ts");
            /* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var angular_admin_lte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-admin-lte */ "./node_modules/angular-admin-lte/fesm2015/angular-admin-lte.js");
            /* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
            /* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm2015/ant-design-icons-angular-icons.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var antDesignIcons = _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__;
            var icons = Object.keys(antDesignIcons).map(function (key) { return antDesignIcons[key]; });
            var HomeModule = /** @class */ (function () {
                function HomeModule() {
                }
                return HomeModule;
            }());
            HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzSelectModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzModalModule"],
                        angular_admin_lte__WEBPACK_IMPORTED_MODULE_5__["BoxModule"],
                        angular_admin_lte__WEBPACK_IMPORTED_MODULE_5__["BoxSmallModule"]
                    ],
                    schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
                    providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NZ_ICONS"], useValue: icons }]
                })
            ], HomeModule);
            /***/ 
        }),
        /***/ "./src/app/models/carpeta.ts": 
        /*!***********************************!*\
          !*** ./src/app/models/carpeta.ts ***!
          \***********************************/
        /*! exports provided: Carpeta */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carpeta", function () { return Carpeta; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Carpeta = /** @class */ (function () {
                function Carpeta(nuc, isOpen, horaIntervencion, horaCreacion, fechaIntervencion, lugar, institucion, inicio, folio, entregado) {
                    this.nuc = nuc;
                    this.isOpen = isOpen;
                    this.horaIntervencion = horaIntervencion;
                    this.horaCreacion = horaCreacion;
                    this.fechaIntervencion = fechaIntervencion;
                    this.lugar = lugar;
                    this.institucion = institucion;
                    this.inicio = inicio;
                    this.folio = folio;
                    this.entregado = entregado;
                }
                return Carpeta;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/indicio.ts": 
        /*!***********************************!*\
          !*** ./src/app/models/indicio.ts ***!
          \***********************************/
        /*! exports provided: Indicio */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Indicio", function () { return Indicio; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Indicio = /** @class */ (function () {
                function Indicio(id_indicio, identificacion, descripcion, fecha, hora, documentacion, recoleccion, embalaje, latitud, longitud, lugar, foto1, naturaleza, nombreUsuario, usuario, smart_tag, foto2, nuc, escrito, fotografico, croquis, otro, especifique, entregado, estado) {
                    this.id_indicio = id_indicio;
                    this.identificacion = identificacion;
                    this.descripcion = descripcion;
                    this.fecha = fecha;
                    this.hora = hora;
                    this.documentacion = documentacion;
                    this.recoleccion = recoleccion;
                    this.embalaje = embalaje;
                    this.latitud = latitud;
                    this.longitud = longitud;
                    this.lugar = lugar;
                    this.foto1 = foto1;
                    this.naturaleza = naturaleza;
                    this.nombreUsuario = nombreUsuario;
                    this.usuario = usuario;
                    this.smart_tag = smart_tag;
                    this.foto2 = foto2;
                    this.nuc = nuc;
                    this.escrito = escrito;
                    this.fotografico = fotografico;
                    this.croquis = croquis;
                    this.otro = otro;
                    this.especifique = especifique;
                    this.entregado = entregado;
                    this.estado = estado;
                }
                return Indicio;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/vehiculo.ts": 
        /*!************************************!*\
          !*** ./src/app/models/vehiculo.ts ***!
          \************************************/
        /*! exports provided: Vehiculo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vehiculo", function () { return Vehiculo; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Vehiculo = /** @class */ (function () {
                function Vehiculo(id_vehiculo, identificacion, marca, tipo, linea, modelo, color, noPuertas, placas, noIdentificacion, otroDato, orientacionFrente, observacionesE, observacionesI, ninguno, idIndicio, tipoIndicio, descripcionIndicio, ubicacionIndicio, horaIndicio, observacionGeneral, traslado, horaTraslado, lugarTraslado, responsableTraslado, noAplica, fechaProcesamiento, inicioProcesamiento, finalProcesamiento, nombre, cargo, firma, latitud, longitud, fechaCreacion, nuc, folio, entregado) {
                    this.id_vehiculo = id_vehiculo;
                    this.identificacion = identificacion;
                    this.marca = marca;
                    this.tipo = tipo;
                    this.linea = linea;
                    this.modelo = modelo;
                    this.color = color;
                    this.noPuertas = noPuertas;
                    this.placas = placas;
                    this.noIdentificacion = noIdentificacion;
                    this.otroDato = otroDato;
                    this.orientacionFrente = orientacionFrente;
                    this.observacionesE = observacionesE;
                    this.observacionesI = observacionesI;
                    this.ninguno = ninguno;
                    this.idIndicio = idIndicio;
                    this.tipoIndicio = tipoIndicio;
                    this.descripcionIndicio = descripcionIndicio;
                    this.ubicacionIndicio = ubicacionIndicio;
                    this.horaIndicio = horaIndicio;
                    this.observacionGeneral = observacionGeneral;
                    this.traslado = traslado;
                    this.horaTraslado = horaTraslado;
                    this.lugarTraslado = lugarTraslado;
                    this.responsableTraslado = responsableTraslado;
                    this.noAplica = noAplica;
                    this.fechaProcesamiento = fechaProcesamiento;
                    this.inicioProcesamiento = inicioProcesamiento;
                    this.finalProcesamiento = finalProcesamiento;
                    this.nombre = nombre;
                    this.cargo = cargo;
                    this.firma = firma;
                    this.latitud = latitud;
                    this.longitud = longitud;
                    this.fechaCreacion = fechaCreacion;
                    this.nuc = nuc;
                    this.folio = folio;
                    this.entregado = entregado;
                }
                return Vehiculo;
            }());
            /***/ 
        }),
        /***/ "./src/app/services/carpeta.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/services/carpeta.service.ts ***!
          \*********************************************/
        /*! exports provided: carpetaService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carpetaService", function () { return carpetaService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _models_carpeta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/carpeta */ "./src/app/models/carpeta.ts");
            moment__WEBPACK_IMPORTED_MODULE_5__["locale"]('en');
            var carpetaService = /** @class */ (function () {
                function carpetaService(http) {
                    this.http = http;
                }
                carpetaService.prototype.getTotal = function () {
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url_api + "getCarpetasTotal").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                        return result.Total;
                    }));
                };
                carpetaService.prototype.getCarpetas = function () {
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url_api + "getCarpetas?page=0&size=100").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                        return JSON.parse(JSON.stringify(result.registers)).map(function (item) {
                            return new _models_carpeta__WEBPACK_IMPORTED_MODULE_6__["Carpeta"](item.nuc, item.isOpen, item.horaIntervencion, item.horaCreacion, item.fechaIntervencion, item.lugar, item.institucion, item.inicio, item.folio, item.entregado);
                        });
                    }));
                };
                carpetaService.prototype.getFolderxNUC = function (nuc) {
                    var data = {
                        nuc: nuc,
                    };
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url_api + "getFolderXPerito", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                        return JSON.parse(JSON.stringify(result.Resultado)).map(function (item) {
                            return new _models_carpeta__WEBPACK_IMPORTED_MODULE_6__["Carpeta"](item.nuc, item.isOpen, item.horaIntervencion, item.horaCreacion, item.fechaIntervencion, item.lugar, item.institucion, item.inicio, item.folio, item.entregado);
                        });
                    }));
                };
                carpetaService.prototype.updateFolder = function (folder) {
                    var data = {
                        horaIntervencion: folder.horaIntervencion,
                        fechaIntervencion: folder.fechaIntervencion,
                        lugar: folder.lugar,
                        institucion: folder.institucion,
                        inicio: folder.inicio,
                        folio: folder.folio,
                    };
                    console.log(data);
                    return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url_api + "updateFolder/" + folder.nuc, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                        if (result.OK) {
                            return result;
                        }
                    }));
                };
                return carpetaService;
            }());
            carpetaService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            carpetaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
                    providedIn: 'root'
                })
            ], carpetaService);
            /***/ 
        }),
        /***/ "./src/app/services/indicio.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/services/indicio.service.ts ***!
          \*********************************************/
        /*! exports provided: indicioService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indicioService", function () { return indicioService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _models_indicio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/indicio */ "./src/app/models/indicio.ts");
            moment__WEBPACK_IMPORTED_MODULE_4__["locale"]('en');
            var indicioService = /** @class */ (function () {
                function indicioService(http) {
                    this.http = http;
                }
                indicioService.prototype.getIndiciosTotal = function () {
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url_api + "getIndiciosTotal").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
                        return result.Total;
                    }));
                };
                indicioService.prototype.getIndiciosTotalPerito = function (user) {
                    var data = {
                        usuario: user
                    };
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url_api + "getTotalIndiciosPerito", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
                        return result.Total;
                    }));
                };
                indicioService.prototype.getIndicios = function () {
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url_api + "getIndicios?page=0&size=100").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
                        return JSON.parse(JSON.stringify(result.UsuariosAPP)).map(function (item) {
                            return new _models_indicio__WEBPACK_IMPORTED_MODULE_6__["Indicio"](item.id_indicio, item.identificacion, item.descripcion, item.fecha, item.hora, item.documentacion, item.recoleccion, item.embalaje, item.latitud, item.longitud, item.lugar, item.foto1, item.naturaleza, item.nombreUsuario, item.usuario, item.smart_tag, item.foto2, item.nuc, item.escrito, item.fotografico, item.croquis, item.otro, item.especifique, item.entregado, item.estado);
                        });
                    }));
                };
                indicioService.prototype.getIndiciosXNUC = function (indicio) {
                    var data = {
                        nuc: indicio,
                    };
                    console.log(data);
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url_api + "getIndiciosxNUC/", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
                        return JSON.parse(JSON.stringify(result.Indicios)).map(function (item) {
                            return new _models_indicio__WEBPACK_IMPORTED_MODULE_6__["Indicio"](item.id_indicio, item.identificacion, item.descripcion, item.fecha, item.hora, item.documentacion, item.recoleccion, item.embalaje, item.latitud, item.longitud, item.lugar, item.foto1, item.naturaleza, item.nombreUsuario, item.usuario, item.smart_tag, item.foto2, item.nuc, item.escrito, item.fotografico, item.croquis, item.otro, item.especifique, item.entregado, item.estado);
                        });
                    }));
                };
                indicioService.prototype.getIndiciosXNaturalezaAndNUC = function (nuc, naturaleza) {
                    var data = {
                        nuc: nuc,
                        naturaleza: naturaleza,
                    };
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url_api + "getIndiciosXNaturalezaAndNUC/", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
                        return JSON.parse(JSON.stringify(result.IndiciosNN)).map(function (item) {
                            return new _models_indicio__WEBPACK_IMPORTED_MODULE_6__["Indicio"](item.id_indicio, item.identificacion, item.descripcion, item.fecha, item.hora, item.documentacion, item.recoleccion, item.embalaje, item.latitud, item.longitud, item.lugar, item.foto1, item.naturaleza, item.nombreUsuario, item.usuario, item.smart_tag, item.foto2, item.nuc, item.escrito, item.fotografico, item.croquis, item.otro, item.especifique, item.entregado, item.estado);
                        });
                    }));
                };
                indicioService.prototype.updateIndicio = function (indicio) {
                    var data = {
                        descripcion: indicio.descripcion,
                        lugar: indicio.lugar,
                    };
                    return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url_api + "updateIndicio/" + indicio.id_indicio, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
                        if (result.OK) {
                            return result;
                        }
                    }));
                };
                indicioService.prototype.deleteIndicio = function (id_indicio) {
                    return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url_api + "deleteIndicio/" + id_indicio).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
                        return result;
                    }));
                };
                return indicioService;
            }());
            indicioService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            indicioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
                    providedIn: 'root'
                })
            ], indicioService);
            /***/ 
        }),
        /***/ "./src/app/services/vehiculo.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/services/vehiculo.service.ts ***!
          \**********************************************/
        /*! exports provided: vehiculoService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vehiculoService", function () { return vehiculoService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _models_vehiculo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/vehiculo */ "./src/app/models/vehiculo.ts");
            moment__WEBPACK_IMPORTED_MODULE_5__["locale"]('en');
            var vehiculoService = /** @class */ (function () {
                function vehiculoService(http) {
                    this.http = http;
                }
                vehiculoService.prototype.getRegistrosVehiculo = function () {
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url_api + "getRegistrosVehiculo?page=0&size=100").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                        return JSON.parse(JSON.stringify(result.registers)).map(function (item) {
                            return new _models_vehiculo__WEBPACK_IMPORTED_MODULE_6__["Vehiculo"](item.id_vehiculo, item.identificacion, item.marca, item.tipo, item.linea, item.modelo, item.color, item.noPuertas, item.placas, item.noIdentificacion, item.otroDato, item.orientacionFrente, item.observacionesE, item.observacionesI, item.ninguno, item.idIndicio, item.tipoIndicio, item.descripcionIndicio, item.ubicacionIndicio, item.horaIndicio, item.observacionGeneral, item.traslado, item.horaTraslado, item.lugarTraslado, item.responsableTraslado, item.noAplica, item.fechaProcesamiento, item.inicioProcesamiento, item.finalProcesamiento, item.nombre, item.cargo, item.firma, item.latitud, item.longitud, item.fechaCreacion, item.nuc, item.folio, item.entregado);
                        });
                    }));
                };
                vehiculoService.prototype.addVehiculo = function (datos) {
                    var data = {
                        id_vehiculo: datos.id_vehiculo,
                        identificacion: datos.identificacion,
                        marca: datos.marca,
                        tipo: datos.tipo,
                        linea: datos.linea,
                        modelo: datos.modelo,
                        color: datos.color,
                        noPuertas: datos.noPuertas,
                        placas: datos.placas,
                        noIdentificacion: datos.noIdentificacion,
                        otroDato: datos.otroDato,
                        orientacionFrente: datos.orientacionFrente,
                        observacionesE: datos.observacionesE,
                        observacionesI: datos.observacionesI,
                        ninguno: datos.ninguno,
                        idIndicio: datos.idIndicio,
                        tipoIndicio: datos.tipoIndicio,
                        descripcionIndicio: datos.descripcionIndicio,
                        ubicacionIndicio: datos.ubicacionIndicio,
                        horaIndicio: datos.horaIndicio,
                        observacionGeneral: datos.observacionGeneral,
                        traslado: datos.traslado,
                        horaTraslado: datos.horaTraslado,
                        lugarTraslado: datos.lugarTraslado,
                        responsableTraslado: datos.responsableTraslado,
                        noAplica: datos.noAplica,
                        fechaProcesamiento: datos.fechaProcesamiento,
                        inicioProcesamiento: datos.inicioProcesamiento,
                        finalProcesamiento: datos.finalProcesamiento,
                        nombre: datos.nombre,
                        cargo: datos.cargo,
                        firma: datos.firma,
                        latitud: datos.latitud,
                        longitud: datos.longitud,
                        fechaCreacion: datos.fechaCreacion,
                        nuc: datos.nuc,
                        folio: datos.folio,
                        entregado: datos.entregado
                    };
                    console.log(data);
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url_api + "addNewVehiculo", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                        return result.Vehiculo;
                    }));
                };
                return vehiculoService;
            }());
            vehiculoService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            vehiculoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
                    providedIn: 'root'
                })
            ], vehiculoService);
            /***/ 
        })
    }]);
//# sourceMappingURL=components-home-home-module-es2015.js.map
//# sourceMappingURL=components-home-home-module-es5.js.map
//# sourceMappingURL=components-home-home-module-es5.js.map