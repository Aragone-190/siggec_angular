(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/models/users.ts":
/*!*********************************!*\
  !*** ./src/app/models/users.ts ***!
  \*********************************/
/*! exports provided: Users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Users {
    constructor(id, nombre, usuario, password, islogged, image, institucion, cargo, token, status, createAt) {
        this.id = id;
        this.nombre = nombre;
        this.usuario = usuario;
        this.password = password;
        this.islogged = islogged;
        this.image = image;
        this.institucion = institucion;
        this.cargo = cargo;
        this.token = token;
        this.status = status;
        this.createAt = createAt;
    }
}


/***/ }),

/***/ "./src/app/services/peritos.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/peritos.service.ts ***!
  \*********************************************/
/*! exports provided: peritosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peritosService", function() { return peritosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_carpeta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/carpeta */ "./src/app/models/carpeta.ts");
/* harmony import */ var _models_indicio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/indicio */ "./src/app/models/indicio.ts");








moment__WEBPACK_IMPORTED_MODULE_5__["locale"]('en');
let peritosService = class peritosService {
    constructor(http) {
        this.http = http;
    }
    getFolderXPerito(nuc) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url_api}getFolderXPerito/${nuc}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => {
            return JSON.parse(JSON.stringify(result.Resultado)).map(item => {
                return new _models_carpeta__WEBPACK_IMPORTED_MODULE_6__["Carpeta"](item.nuc, item.isOpen, item.horaIntervencion, item.horaCreacion, item.fechaIntervencion, item.lugar, item.institucion, item.inicio, item.folio, item.entregado);
            });
        }));
    }
    getIndiciosXPeritoAndFolder(usuario) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url_api}getIndiciosXPeritoAndFolder/${usuario}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => {
            return JSON.parse(JSON.stringify(result.IndiciosPF)).map(item => {
                return new _models_indicio__WEBPACK_IMPORTED_MODULE_7__["Indicio"](item.id_indicio, item.identificacion, item.descripcion, item.fecha, item.hora, item.documentacion, item.recoleccion, item.embalaje, item.latitud, item.longitud, item.lugar, item.foto1, item.naturaleza, item.nombreUsuario, item.usuario, item.smart_tag, item.foto2, item.nuc, item.escrito, item.fotografico, item.croquis, item.otro, item.especifique, item.entregado, item.estado);
            });
        }));
    }
    getTotalFolderxPerito(user) {
        let data = {
            usuario: user
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url_api}getTotalFolderxPerito`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => {
            return result.IndiciosPF;
        }));
    }
};
peritosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
peritosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], peritosService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_authentification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentification.service */ "./src/app/services/authentification.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_7__);








let UserService = class UserService {
    constructor(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.currentUser = this.authenticationService.currentUserValue;
    }
    getCountUsers() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url_api}getCountUsers`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => {
            return result.Total;
        }));
    }
    getUsers() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url_api}usuario`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => {
            console.log(result);
            return JSON.parse(JSON.stringify(result.Usuarios)).map(item => {
                return new _models_user__WEBPACK_IMPORTED_MODULE_6__["User"](item.id_usuario, item.nombre_empleado, item.nombre_usuario, item.contrasena, item.id_role, item.status, item.cargo, item.fecha_creacion, item.fecha_ultima_modificacion, item.fecha_modificacion_por, item.Role.nombre_role, item.creado_por, item.token);
            });
        }));
    }
    addUser(user) {
        let data = {
            nombre_empleado: user.nombre_empleado,
            nombre_usuario: user.nombre_usuario,
            contrasena: user.contrasena,
            id_role: user.id_role,
            cargo: user.cargo
        };
        console.log(data);
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url_api}usuario`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => {
            if (result.OK) {
                return result.Usuario;
            }
            else {
                return q__WEBPACK_IMPORTED_MODULE_7__["reject"];
            }
        }));
    }
    updateUser(nombre_empleado, nombre_usuario, contrasena, cargo) {
        let data = {
            nombre_empleado: nombre_empleado,
            nombre_usuario: nombre_usuario,
            contrasena: contrasena,
            cargo: cargo
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url_api}usuarioperfil/${this.currentUser.id_usuario}`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => {
            if (result.OK) {
            }
            return result;
        }));
    }
    updateUsers(user) {
        let data = {
            nombre_empleado: user.nombre_empleado,
            nombre_usuario: user.nombre_usuario,
            contrasena: user.contrasena,
            id_role: user.id_role,
            cargo: user.cargo
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url_api}usuario/${user.id_usuario}`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => {
            if (result.OK) {
                return result;
            }
            else {
                return Object(q__WEBPACK_IMPORTED_MODULE_7__["reject"])();
            }
        }));
    }
    deleteUser(id_usuario) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url_api}usuario/${id_usuario}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => {
            return result;
        }));
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _services_authentification_service__WEBPACK_IMPORTED_MODULE_5__["AuthentificationService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/users */ "./src/app/models/users.ts");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_7__);








moment__WEBPACK_IMPORTED_MODULE_5__["locale"]('en');
let UsersService = class UsersService {
    constructor(http) {
        this.http = http;
    }
    getCountUserApp() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url_api}getCountUserApp`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => {
            return result.Total;
        }));
    }
    getUsersApp() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url_api}getUsuariosApp`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => {
            return JSON.parse(JSON.stringify(result.UsuariosAPP)).map(item => {
                return new _models_users__WEBPACK_IMPORTED_MODULE_6__["Users"](item.id_usuario_app, item.nombre, item.usuario, item.password, item.isLogged, item.image, item.institucion, item.cargo, item.token, item.status, item.createAt);
            });
        }));
    }
    addUserApp(user) {
        let data = {
            nombre: user.nombre,
            usuario: user.usuario,
            password: user.password,
            image: user.image,
            institucion: user.institucion,
            cargo: user.cargo,
            createAt: user.createAt
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url_api}AddUsuarioApp`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => {
            if (result.OK) {
                return result.addUsuarioAPP;
            }
            else {
                return q__WEBPACK_IMPORTED_MODULE_7__["reject"];
            }
        }));
    }
    updateUserApp(user) {
        let data = {
            nombre: user.nombre,
            usuario: user.usuario,
            password: user.password,
            institucion: user.institucion,
            cargo: user.cargo,
        };
        console.log(data);
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url_api}updateUsuarioApp/${user.id}`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => {
            if (result.OK) {
                return result;
            }
            else {
                return Object(q__WEBPACK_IMPORTED_MODULE_7__["reject"])();
            }
        }));
    }
    deleteUserApp(id_usuario_app) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url_api}deleteUsuarioApp/${id_usuario_app}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => {
            return result;
        }));
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsersService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map