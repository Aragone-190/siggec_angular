(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-users-users-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/users.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/users.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ng-template ngxPermissionsOnly=\"canAddUsersA\">\r\n    <mk-box [isRemovable]=\"false\" [isCollapsed]=\"false\">\r\n        <div class=\"container pull-left\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">    \r\n                    <button nz-button nzType=\"primary\" (click)=\"showModalAgregarUsuario()\">Agregar usuario</button>                         \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </mk-box>\r\n</ng-template> \r\n\r\n<div style=\"background: white\">\r\n  <nz-table #tableUsers [nzData]=\"users\" nzBordered=\"true\" [nzLoading]=\"isLoading\" nzSize=\"small\" nzShowPagination=\"true\">\r\n      <thead>\r\n            <tr>      \r\n                <th>Nombre</th>\r\n                <th>Usuario</th>\r\n                <th>Rol</th>\r\n                <ng-template [ngxPermissionsOnly]=\"['canViewUsersA' ,'canEditUsersA', 'canDeleteUsersA']\">\r\n                    <th>Acciones</th>\r\n                </ng-template>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let data of tableUsers.data\">\r\n                <td>{{ data.nombre_empleado }}</td>\r\n                <td>{{ data.nombre_usuario }}</td>\r\n                <td>{{ data.nombre_role }}</td>\r\n                <ng-template [ngxPermissionsOnly]=\"['canViewUsersA' ,'canEditUsersA', 'canDeleteUsersA']\">\r\n                    <td class=\"text-center\">\r\n                        <ng-template ngxPermissionsOnly=\"canViewUsersA\">\r\n          \r\n                        </ng-template> \r\n                        <ng-template ngxPermissionsOnly=\"canEditUsersA\">\r\n                            <button style=\"margin-right: 10px\" nzTitle=\"Editar\" nzPlacement=\"topCenter\" nz-tooltip class=\"btn btn-success\" (click)=\"showModalEditarUsuario(data)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>                    \r\n                        </ng-template> \r\n                        <ng-template ngxPermissionsOnly=\"canDeleteUsersA\">\r\n                            <button style=\"margin-right: 10px\" class=\"btn btn-danger\" nzTitle=\"Eliminar\" nzPlacement=\"topCenter\" nz-tooltip (click)=\"showDeleteConfirm(data)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\r\n                        </ng-template>  \r\n                    </td>\r\n                </ng-template>\r\n            </tr>\r\n        </tbody>\r\n    </nz-table>\r\n</div>\r\n\r\n<!--                                             Agregar Usuario                                                                   -->\r\n \r\n<nz-modal [(nzVisible)]=\"isVisibleAgregarUsuario\" [nzWidth]=\"800\" [nzTitle]=\"modalTitleAgregarUsuario\" [nzContent]=\"modalContentAgregarUsuario\" [nzFooter]=\"modalFooterAgregarUsuario\" (nzOnCancel)=\"handleCancelAgregarUsuario()\">\r\n    <ng-template #modalTitleAgregarUsuario>Nuevo usuario</ng-template>\r\n\r\n    <ng-template #modalContentAgregarUsuario>\r\n        <form [formGroup]=\"userAgregarForm\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-md-3\">\r\n                        <label for=\"\">Nombre</label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"nombre_empleado\">  \r\n                                <div *ngIf=\"submittedAgregarUsuario && fau.nombre_empleado.errors\" class=\"invalid-feedback d-block\">\r\n                                    <div *ngIf=\"fau.nombre_empleado.errors.required\" class=\"text-danger\">Campo requerido</div>\r\n                                </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">  \r\n                        <label for=\"\">Usuario</label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"nombre_usuario\">  \r\n                                <div *ngIf=\"submittedAgregarUsuario && fau.nombre_usuario.errors\" class=\"invalid-feedback d-block\">\r\n                                    <div *ngIf=\"fau.nombre_usuario.errors.required\" class=\"text-danger\">Campo requerido</div>\r\n                                </div>             \r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <label for=\"\">Contraseña</label>\r\n                        <nz-input-group [nzSuffix]=\"suffixTemplate\">\r\n                        <input\r\n                            [type]=\"passwordVisible ? 'text' : 'password'\"\r\n                            nz-input\r\n                            placeholder=\"**********\"\r\n                            [(ngModel)]=\"password\" formControlName=\"contrasena\"\r\n                        />             \r\n                        </nz-input-group>\r\n                        <ng-template #suffixTemplate>\r\n                        <i nz-icon [nzType]=\"passwordVisible ? 'eye-invisible' : 'eye'\" (click)=\"passwordVisible = !passwordVisible\"></i>\r\n                        </ng-template>\r\n                            <div *ngIf=\"submittedAgregarUsuario && fau.contrasena.errors\" class=\"invalid-feedback d-block\">\r\n                                <div *ngIf=\"fau.contrasena.errors.required\" class=\"text-danger\">Campo requerido</div>\r\n                            </div>\r\n                    </div>  \r\n                    <div class=\"col-md-3\">  \r\n                        <label for=\"\">Cargo</label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"cargo\">  \r\n                                <div *ngIf=\"submittedAgregarUsuario && fau.cargo.errors\" class=\"invalid-feedback d-block\">\r\n                                    <div *ngIf=\"fau.cargo.errors.required\" class=\"text-danger\">Campo requerido</div>\r\n                                </div>             \r\n                    </div>  \r\n                    <div class=\"col-sm-3\">\r\n                        <label>Rol</label>\r\n                        <div class=\"input-group\">\r\n                            <nz-select style=\"width: 140px;\" formControlName=\"rol\" nzShowSearch nzAllowClear nzPlaceHolder=\"Seleccionar..\">\r\n                                <!-- <nz-option nzLabel=\"Administrador\" nzValue=\"2\"></nz-option> -->\r\n                                <nz-option *ngFor=\"let role of roles;\" nzLabel=\"{{ role.nombre_role }}\" nzValue=\"{{ role.id_role }}\"></nz-option>\r\n                            </nz-select>\r\n                        </div>\r\n                        <div *ngIf=\"submittedAgregarUsuario && fau.rol.errors\" class=\"invalid-feedback d-block\">\r\n                            <div *ngIf=\"fau.rol.errors.required\" class=\"text-danger\">Campo requerido</div>\r\n                        </div>\r\n                    </div> \r\n                </div>\r\n            </div>\r\n        </form>\r\n    </ng-template>\r\n\r\n    <ng-template #modalFooterAgregarUsuario>\r\n        <button nz-button nzType=\"default\" (click)=\"handleCancelAgregarUsuario()\">Cerrar</button>\r\n        <button nz-button nzType=\"primary\" (click)=\"onSubmitAgregarUsuario()\" [nzLoading]=\"isConfirmLoadingAgregarUsuario\">Guardar cambios</button>\r\n    </ng-template>\r\n</nz-modal>\r\n\r\n\r\n<!--                                             Editar Usuario                                                                   -->\r\n \r\n<nz-modal [(nzVisible)]=\"isVisibleEditarUsuario\" [nzWidth]=\"800\" [nzTitle]=\"modalTitleEditarUsuario\" [nzContent]=\"modalContentEditarUsuario\" [nzFooter]=\"modalFooterEditarUsuario\" (nzOnCancel)=\"handleCancelEditarUsuario()\">\r\n  <ng-template #modalTitleEditarUsuario>Editar usuario</ng-template>\r\n\r\n  <ng-template #modalContentEditarUsuario>\r\n      <form [formGroup]=\"userEditarForm\">\r\n          <div class=\"row\">\r\n              <div class=\"form-group\">\r\n                <div class=\"col-md-3\">\r\n                    <label for=\"\">Nombre</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"nombre_empleado\">\r\n                        <div *ngIf=\"submittedEditarUsuario && feu.nombre_empleado.errors\" class=\"invalid-feedback d-block\">\r\n                            <div *ngIf=\"feu.nombre_empleado.errors.required\" class=\"text-danger\">Campo requerido</div>\r\n                        </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <label for=\"\">Usuario</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"nombre_usuario\">  \r\n                        <div *ngIf=\"submittedEditarUsuario && feu.nombre_usuario.errors\" class=\"invalid-feedback d-block\">\r\n                            <div *ngIf=\"feu.nombre_usuario.errors.required\" class=\"text-danger\">Campo requerido</div>\r\n                        </div>             \r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <label for=\"\">Cargo</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"cargo\">  \r\n                        <div *ngIf=\"submittedEditarUsuario && feu.cargo.errors\" class=\"invalid-feedback d-block\">\r\n                            <div *ngIf=\"feu.cargo.errors.required\" class=\"text-danger\">Campo requerido</div>\r\n                        </div>             \r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <label for=\"\">Contraseña</label>\r\n                    <nz-input-group [nzSuffix]=\"suffixTemplate\">\r\n                    <input\r\n                        [type]=\"passwordVisible ? 'text' : 'password'\"\r\n                        nz-input\r\n                        placeholder=\"**********\"\r\n                        [(ngModel)]=\"password\" formControlName=\"contrasena\"\r\n                    />\r\n                    </nz-input-group>\r\n                    <ng-template #suffixTemplate>\r\n                    <i nz-icon [nzType]=\"passwordVisible ? 'eye-invisible' : 'eye'\" (click)=\"passwordVisible = !passwordVisible\"></i>\r\n                    </ng-template>\r\n                </div>    \r\n                <div class=\"col-sm-3\">\r\n                    <label>Rol</label>\r\n                    <div class=\"input-group\">\r\n                        <nz-select style=\"width: 140px;\" formControlName=\"rol\" nzShowSearch nzAllowClear nzPlaceHolder=\"Seleccionar..\">\r\n                            <!--<nz-option nzLabel=\"Administrador\" nzValue=\"2\"></nz-option> -->\r\n                            <nz-option *ngFor=\"let role of roles;\" nzLabel=\"{{ role.nombre_role }}\" nzValue=\"{{ role.id_role }}\"></nz-option>\r\n                        </nz-select>\r\n                    </div>\r\n                        <div *ngIf=\"submittedAgregarUsuario && fau.rol.errors\" class=\"invalid-feedback d-block\">\r\n                            <div *ngIf=\"fau.rol.errors.required\" class=\"text-danger\">Campo requerido</div>\r\n                        </div>\r\n                </div> \r\n              </div>\r\n          </div>\r\n      </form>\r\n  </ng-template>\r\n\r\n  <ng-template #modalFooterEditarUsuario>\r\n      <button nz-button nzType=\"default\" (click)=\"handleCancelEditarUsuario()\">Cerrar</button>\r\n      <button nz-button nzType=\"primary\" (click)=\"onSubmitEditarUsuario()\" [nzLoading]=\"isConfirmLoadingEditarUsuario\">Guardar cambios</button>\r\n  </ng-template>\r\n</nz-modal>");
            /***/ 
        }),
        /***/ "./src/app/components/users/users-routing.module.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/components/users/users-routing.module.ts ***!
          \**********************************************************/
        /*! exports provided: UsersRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function () { return UsersRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.component */ "./src/app/components/users/users.component.ts");
            var routes = [
                {
                    path: '',
                    component: _users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"]
                }
            ];
            var UsersRoutingModule = /** @class */ (function () {
                function UsersRoutingModule() {
                }
                return UsersRoutingModule;
            }());
            UsersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], UsersRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/components/users/users.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/components/users/users.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("i {\r\n    cursor: pointer;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/users/users.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/users/users.component.ts ***!
          \*****************************************************/
        /*! exports provided: UsersComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function () { return UsersComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/fesm2015/ngx-permissions.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _services_roles_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/roles.service */ "./src/app/services/roles.service.ts");
            /* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_app_models_logs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/models/logs */ "./src/app/models/logs.ts");
            /* harmony import */ var src_app_services_home_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/home.service */ "./src/app/services/home.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var UsersComponent = /** @class */ (function () {
                function UsersComponent(permissionsService, modalService, rolesServices, homeServices, userService, formBuilder, toastr, datepipe, http) {
                    var _this = this;
                    this.permissionsService = permissionsService;
                    this.modalService = modalService;
                    this.rolesServices = rolesServices;
                    this.homeServices = homeServices;
                    this.userService = userService;
                    this.formBuilder = formBuilder;
                    this.toastr = toastr;
                    this.datepipe = datepipe;
                    this.http = http;
                    this.isLoading = true;
                    this.searchValue = '';
                    this.users = [];
                    this.passwordVisible = false;
                    this.submittedAgregarUsuario = false;
                    this.isVisibleAgregarUsuario = false;
                    this.isConfirmLoadingAgregarUsuario = false;
                    this.isVisibleRoles = false;
                    this.isConfirmLoadingRoles = false;
                    this.submittedEditarUsuario = false;
                    this.isVisibleEditarUsuario = false;
                    this.isConfirmLoadingEditarUsuario = false;
                    this.now = new Date();
                    this.data = [];
                    this.browserName = '';
                    this.browserVersion = '';
                    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
                    this.currentUser = this.currentUserSubject.asObservable();
                    this.userService.getUsers().subscribe(function (request) {
                        _this.users = request;
                        _this.isLoading = false;
                    }, function (error) {
                        console.log(error);
                    });
                    this.rolesServices.getRoles().subscribe(function (roles) {
                        _this.roles = roles;
                    }, function (err) {
                        console.log(err);
                    });
                }
                UsersComponent.prototype.nzEvent = function (event) {
                    console.log(event);
                };
                UsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dateLogin = this.datepipe.transform(this.now, 'dd/MM/yyyy hh:mm:ss', 'es');
                    this.userAgregarForm = this.formBuilder.group({
                        nombre_empleado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        nombre_usuario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        contrasena: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        rol: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        cargo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                    });
                    this.userEditarForm = this.formBuilder.group({
                        nombre_empleado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        nombre_usuario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        contrasena: [''],
                        rol: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        cargo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                    });
                    this.getIPAddress();
                    this.browserName = this.detectBrowserName();
                    this.browserVersion = this.detectBrowserVersion();
                    setTimeout(function () {
                        _this.Logs('usuarios', 'Consulto modulo usuarios', _this.currentUserSubject.value.id_usuario, 'Consulta', 'Consulto el modulo de usuarios: ');
                    }, 4000);
                };
                UsersComponent.prototype.getIPAddress = function () {
                    var _this = this;
                    this.http.get('https://jsonip.com').subscribe(function (data) {
                        _this.ipAddressPrivate = data['ip'];
                    });
                    this.http.get('https://api.ipify.org?format=json').subscribe(function (data) {
                        _this.ipAddressPublic = data['ip'];
                    });
                };
                UsersComponent.prototype.detectBrowserName = function () {
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
                UsersComponent.prototype.detectBrowserVersion = function () {
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
                UsersComponent.prototype.Logs = function (tabla, objeto, id, tipo, descipcion) {
                    var navegadorUsed = this.browserName + ', ' + this.browserVersion;
                    var descripcion = descipcion + ' por ' + this.currentUserSubject.value.nombre_usuario;
                    if (this.ipAddressPrivate == undefined) {
                        this.ipAddressPrivate = '';
                    }
                    if (this.ipAddressPublic == undefined) {
                        this.ipAddressPublic = '';
                    }
                    var metaData = new src_app_models_logs__WEBPACK_IMPORTED_MODULE_11__["AdmLogs"](tabla, objeto, id, tipo, descripcion, this.currentUserSubject.value.nombre_empleado, this.currentUserSubject.value.nombre_usuario, this.ipAddressPublic, this.ipAddressPrivate, navegadorUsed, this.dateLogin);
                    this.homeServices.addLogLogin(metaData).subscribe(function (result) {
                    }, function (err) {
                        console.log(err);
                    });
                };
                Object.defineProperty(UsersComponent.prototype, "fau", {
                    get: function () { return this.userAgregarForm.controls; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UsersComponent.prototype, "feu", {
                    get: function () { return this.userEditarForm.controls; },
                    enumerable: true,
                    configurable: true
                });
                UsersComponent.prototype.showModalAgregarUsuario = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this.Logs('usuarios', 'Consulta la actividad agregar usuario' + 'null', 'null', 'Consulta', 'Visualizo los detalles de creacion de usuario ');
                    }, 1000);
                    this.isVisibleAgregarUsuario = true;
                    this.userAgregarForm.get('nombre_empleado').setValue(null);
                    this.userAgregarForm.get('nombre_usuario').setValue(null);
                    this.userAgregarForm.get('rol').setValue(null);
                    this.userAgregarForm.get('cargo').setValue(null);
                    this.password = null;
                };
                UsersComponent.prototype.handleCancelAgregarUsuario = function () {
                    this.isVisibleAgregarUsuario = false;
                    this.submittedAgregarUsuario = false;
                };
                UsersComponent.prototype.onSubmitAgregarUsuario = function () {
                    var _this = this;
                    this.submittedAgregarUsuario = true;
                    if (this.userAgregarForm.invalid) {
                        return;
                    }
                    this.isConfirmLoadingAgregarUsuario = true;
                    var user = new _models_user__WEBPACK_IMPORTED_MODULE_8__["User"](null, this.userAgregarForm.get('nombre_empleado').value, this.userAgregarForm.get('nombre_usuario').value, this.userAgregarForm.get('contrasena').value, this.userAgregarForm.get('rol').value, null, this.userAgregarForm.get('cargo').value);
                    this.userService.addUser(user).subscribe(function (result) {
                        console.log(result);
                        var role = Object.values(_this.roles).find(function (value) {
                            return value.id_role == result.id_role;
                        });
                        _this.users.push(new _models_user__WEBPACK_IMPORTED_MODULE_8__["User"](result.id_usuario, result.nombre_empleado, result.nombre_usuario, result.contrasena, null, null, null, null, null, null, null, role.nombre_role, result.cargo));
                        _this.users = _this.users.slice();
                        _this.isConfirmLoadingAgregarUsuario = false;
                        _this.isVisibleAgregarUsuario = false;
                        _this.toastr.success('Usuario Agregado!');
                        setTimeout(function () {
                            _this.Logs('usuarios', 'Creacion de un nuevo usuario: ' + result.nombre_usuario, result.nombre_empleado, 'Creacion', 'Creacion de un nuevo usuario: ' + _this.userAgregarForm.get('nombre_usuario').value + ' ');
                        }, 1000);
                    }, function (err) {
                        _this.isConfirmLoadingAgregarUsuario = false;
                        if (err.error.msg.error.fields) {
                            if (err.error.msg.error.fields.nombre_usuario)
                                _this.toastr.error('El nombre de usuario ingresado ya existe.');
                        }
                        else {
                            _this.toastr.error('Hubo un error al agregar el usuario');
                        }
                    });
                    this.submittedAgregarUsuario = false;
                };
                UsersComponent.prototype.showModalEditarUsuario = function (data) {
                    var _this = this;
                    this.userDataSelected = JSON.parse(JSON.stringify(data));
                    setTimeout(function () {
                        _this.Logs('usuarios', 'Consulta actividad de edicion usuario' + _this.userDataSelected.nombre_usuario, _this.userDataSelected.nombre_empleado, 'Consulta', 'Visualizo los detalles de edicion de usuario ');
                    }, 1000);
                    this.userEditarForm.controls['nombre_empleado'].setValue(this.userDataSelected.nombre_empleado);
                    this.userEditarForm.controls['nombre_usuario'].setValue(this.userDataSelected.nombre_usuario);
                    this.userEditarForm.controls['contrasena'].setValue(this.userDataSelected.contrasena);
                    this.userEditarForm.controls['rol'].setValue(String(this.userDataSelected.id_role));
                    this.userEditarForm.controls['cargo'].setValue(String(this.userDataSelected.cargo));
                    this.isVisibleEditarUsuario = true;
                };
                UsersComponent.prototype.handleCancelEditarUsuario = function () {
                    this.isVisibleEditarUsuario = false;
                    this.submittedEditarUsuario = false;
                };
                UsersComponent.prototype.onSubmitEditarUsuario = function () {
                    var _this = this;
                    this.submittedEditarUsuario = true;
                    if (this.userEditarForm.invalid) {
                        return;
                    }
                    this.isConfirmLoadingEditarUsuario = true;
                    var user = new _models_user__WEBPACK_IMPORTED_MODULE_8__["User"](this.userDataSelected.id_usuario, this.userEditarForm.get('nombre_empleado').value, this.userEditarForm.get('nombre_usuario').value, this.userEditarForm.get('contrasena').value, this.userEditarForm.get('rol').value, this.userEditarForm.get('cargo').value);
                    this.userService.updateUsers(user)
                        .subscribe(function (result) {
                        _this.isConfirmLoadingEditarUsuario = false;
                        _this.isVisibleEditarUsuario = false;
                        _this.toastr.success('Usuario actualizado!');
                        setTimeout(function () {
                            _this.Logs('usuarios', 'Edicion del usuario ' + _this.userDataSelected.nombre_usuario, _this.userDataSelected.nombre_empleado, 'Actualizacion', 'Realizo cambios en el campo de nombre_empleado de "' + _this.userDataSelected.nombre_empleado + '" a "' + _this.userEditarForm.get('nombre_empleado').value +
                                '" y realizo cambios en nombre_usuario de "' + _this.userDataSelected.nombre_usuario + '" a "' + _this.userEditarForm.get('nombre_usuario').value + '"' +
                                '" y realizo cambios en contrasena de "' + _this.userDataSelected.contrasena + '" a "' + _this.userEditarForm.get('contrasena').value + '"' +
                                '" y realizo cambios en rol de "' + _this.userDataSelected.id_role + '" a "' + _this.userEditarForm.get('rol').value + '"' +
                                '" y realizo cambios en cargo de "' + _this.userDataSelected.cargo + '" a "' + _this.userEditarForm.get('cargo').value + '".');
                        }, 1000);
                        _this.userService.getUsers().subscribe(function (request) {
                            _this.users = request;
                            _this.isLoading = false;
                        }, function (error) {
                            console.log(error);
                        });
                    }, function (err) {
                        console.log(err);
                        _this.isConfirmLoadingEditarUsuario = false;
                        if (err.error.msg.error.fields) {
                            if (err.error.msg.error.fields.nombre_usuario)
                                _this.toastr.error('El nombre de usuario ingresado ya existe.');
                        }
                        else {
                            _this.toastr.error('Hubo un error al editar el usuario');
                        }
                    });
                    this.submittedEditarUsuario = false;
                };
                UsersComponent.prototype.showDeleteConfirm = function (data) {
                    var _this = this;
                    this.userDataSelected = JSON.parse(JSON.stringify(data));
                    this.modalService.confirm({
                        nzTitle: '¿Esta seguro que desea eliminar el usuario?',
                        nzContent: '<b style="color: red;">Se eliminara el usuario: ' + this.userDataSelected.nombre_empleado + '</b>',
                        nzOkText: 'Si',
                        nzOkType: 'danger',
                        nzOnOk: function () {
                            _this.userService.deleteUser(_this.userDataSelected.id_usuario).subscribe(function (result) {
                                _this.toastr.success('Usuario eliminado correctamente!');
                                setTimeout(function () {
                                    _this.Logs('usuarios', 'Eliminacion del usuario ' + _this.userDataSelected.nombre_usuario, _this.userDataSelected.nombre_empleado, 'Eliminacion', 'Se elimino el usuario: ' + _this.userDataSelected.nombre_usuario + ' ');
                                }, 1000);
                                _this.users = _this.users.filter(function (obj) { return obj.id_usuario !== _this.userDataSelected.id_usuario; });
                                _this.users = _this.users.slice();
                            }, function (error) {
                                _this.toastr.error('Hubo un error al eliminar el usuario');
                            });
                        },
                        nzCancelText: 'No',
                        nzOnCancel: function () {
                        }
                    });
                };
                return UsersComponent;
            }());
            UsersComponent.ctorParameters = function () { return [
                { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxPermissionsService"] },
                { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"] },
                { type: _services_roles_service__WEBPACK_IMPORTED_MODULE_7__["RolesService"] },
                { type: src_app_services_home_service__WEBPACK_IMPORTED_MODULE_12__["HomeService"] },
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] }
            ]; };
            UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-users',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/users.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.component.css */ "./src/app/components/users/users.component.css")).default]
                })
            ], UsersComponent);
            /***/ 
        }),
        /***/ "./src/app/components/users/users.module.ts": 
        /*!**************************************************!*\
          !*** ./src/app/components/users/users.module.ts ***!
          \**************************************************/
        /*! exports provided: UsersModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function () { return UsersModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/components/users/users-routing.module.ts");
            /* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users.component */ "./src/app/components/users/users.component.ts");
            /* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
            /* harmony import */ var angular_admin_lte__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-admin-lte */ "./node_modules/angular-admin-lte/fesm2015/angular-admin-lte.js");
            /* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm2015/ant-design-icons-angular-icons.js");
            /* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tree */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-tree.js");
            /* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/fesm2015/ngx-permissions.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var antDesignIcons = _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__;
            var icons = Object.keys(antDesignIcons).map(function (key) { return antDesignIcons[key]; });
            var UsersModule = /** @class */ (function () {
                function UsersModule() {
                }
                return UsersModule;
            }());
            UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzTableModule"],
                        _users_routing_module__WEBPACK_IMPORTED_MODULE_4__["UsersRoutingModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzDropDownModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
                        ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_9__["NzTreeModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzSelectModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzModalModule"],
                        angular_admin_lte__WEBPACK_IMPORTED_MODULE_7__["BoxModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        ngx_permissions__WEBPACK_IMPORTED_MODULE_10__["NgxPermissionsModule"].forChild()
                    ],
                    providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NZ_ICONS"], useValue: icons }]
                })
            ], UsersModule);
            /***/ 
        }),
        /***/ "./src/app/models/logs.ts": 
        /*!********************************!*\
          !*** ./src/app/models/logs.ts ***!
          \********************************/
        /*! exports provided: AdmLogs */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmLogs", function () { return AdmLogs; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var AdmLogs = /** @class */ (function () {
                function AdmLogs(nombre_tabla, nombre_objeto, id_objeto, tipo_transaccion, descripcion, nombre, usuario, publicIP, privateIP, navegator, fecha_creacion) {
                    this.nombre_tabla = nombre_tabla;
                    this.nombre_objeto = nombre_objeto;
                    this.id_objeto = id_objeto;
                    this.tipo_transaccion = tipo_transaccion;
                    this.descripcion = descripcion;
                    this.nombre = nombre;
                    this.usuario = usuario;
                    this.publicIP = publicIP;
                    this.privateIP = privateIP;
                    this.navegator = navegator;
                    this.fecha_creacion = fecha_creacion;
                }
                return AdmLogs;
            }());
            /***/ 
        }),
        /***/ "./src/app/services/home.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/home.service.ts ***!
          \******************************************/
        /*! exports provided: HomeService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function () { return HomeService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var HomeService = /** @class */ (function () {
                function HomeService(http) {
                    this.http = http;
                }
                HomeService.prototype.totalUsuarios = function () {
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url_api + "usuarios/count/totales").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                        return data;
                    }));
                };
                HomeService.prototype.addLogLogin = function (datos) {
                    var data = {
                        nombre_tabla: datos.nombre_tabla,
                        nombre_objeto: datos.nombre_objeto,
                        id_objeto: datos.id_objeto,
                        tipo_transaccion: datos.tipo_transaccion,
                        descripcion: datos.descripcion,
                        nombre: datos.nombre,
                        usuario: datos.usuario,
                        publicIP: datos.publicIP,
                        privateIP: datos.privateIP,
                        navegator: datos.navegator,
                        fecha_creacion: datos.fecha_creacion
                    };
                    console.log(data);
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url_api + "addLog", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                        return result.Usuario;
                    }));
                };
                return HomeService;
            }());
            HomeService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], HomeService);
            /***/ 
        })
    }]);
//# sourceMappingURL=components-users-users-module-es2015.js.map
//# sourceMappingURL=components-users-users-module-es5.js.map
//# sourceMappingURL=components-users-users-module-es5.js.map