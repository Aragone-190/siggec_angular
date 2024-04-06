(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-usuarios-usuarios-module"],{

/***/ "./node_modules/angular-mgl-timeline/fesm2015/angular-mgl-timeline.js":
/*!****************************************************************************!*\
  !*** ./node_modules/angular-mgl-timeline/fesm2015/angular-mgl-timeline.js ***!
  \****************************************************************************/
/*! exports provided: MglTimelineModule, ɵc, ɵe, ɵd, ɵf, ɵb, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MglTimelineModule", function() { return MglTimelineModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return MglTimelineEntryContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return MglTimelineEntryDotComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return MglTimelineEntryHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return MglTimelineEntrySideComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return MglTimelineEntryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return MglTimelineComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MglTimelineEntryHeaderComponent {
}
MglTimelineEntryHeaderComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                selector: 'mgl-timeline-entry-header',
                template: "<ng-content></ng-content>",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                styles: ["mgl-timeline-entry-header{position:relative;display:block;overflow:hidden;padding:15px;text-align:center}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MglTimelineEntryDotComponent {
    /**
     * @param {?} animationBuilder
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} changeDetectorRef
     * @param {?} document
     */
    constructor(animationBuilder, elementRef, renderer, changeDetectorRef, document) {
        this.animationBuilder = animationBuilder;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.document = document;
        this._expanded = false;
        this._alternate = false;
        this._mobile = false;
        this._size = 50;
        this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.clazz = 'primary';
    }
    /**
     * @param {?} size
     * @return {?}
     */
    set size(size) {
        this._size = size;
        this.setStyle();
    }
    /**
     * @return {?}
     */
    get size() {
        return this._size;
    }
    /**
     * @param {?} alternate
     * @return {?}
     */
    set alternate(alternate) {
        this._alternate = alternate;
        this.setStyle();
    }
    /**
     * @return {?}
     */
    get alternate() {
        return this._alternate;
    }
    /**
     * @param {?} mobile
     * @return {?}
     */
    set mobile(mobile) {
        this._mobile = mobile;
        this.setStyle();
    }
    /**
     * @return {?}
     */
    get mobile() {
        return this._mobile;
    }
    /**
     * @param {?} expanded
     * @return {?}
     */
    set expanded(expanded) {
        /** @type {?} */
        const animate$$1 = this._expanded !== expanded;
        this._expanded = expanded;
        animate$$1 ? this.animate() : this.setStyle();
    }
    /**
     * @return {?}
     */
    get expanded() {
        return this._expanded;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initialStyle = this.document.defaultView.getComputedStyle(this.elementRef.nativeElement);
        this.setStyle();
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    getCollapsedStyle() {
        return {
            top: '50%',
            left: (this.alternate || this.mobile) ? '-5px' : 'calc(100% + 5px)',
            width: this.size + 'px',
            height: this.size + 'px',
            opacity: 1,
            transform: 'translateY(-50%) translateX(-50%)',
            boxShadow: this.initialStyle && this.initialStyle.boxShadow,
            borderRadius: '100px'
        };
    }
    /**
     * @private
     * @return {?}
     */
    getTransitionStyle() {
        return Object.assign({}, this.getCollapsedStyle(), { left: '50%', opacity: 0.5, boxShadow: 'none' });
    }
    /**
     * @private
     * @return {?}
     */
    getExpandedStyle() {
        return Object.assign({}, this.getTransitionStyle(), { left: '0', transform: 'translateX(0) translateY(-50%)', width: '100%', height: '100%', opacity: 1, borderRadius: 0 });
    }
    /**
     * @private
     * @return {?}
     */
    animate() {
        this.destroyAnimation();
        if (this.expanded) {
            this.animation = this.animationBuilder
                .build([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])(this.getCollapsedStyle()),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])(this.getTransitionStyle())),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])(this.getExpandedStyle())),
            ])
                .create(this.elementRef.nativeElement);
            this.animation.onDone(() => this.animationDone.emit({ toState: 'expanded' }));
            this.animation.play();
        }
        else {
            this.animationBuilder;
            this.animation = this.animationBuilder
                .build([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])(this.getExpandedStyle()),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])(this.getTransitionStyle())),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])(this.getCollapsedStyle())),
            ])
                .create(this.elementRef.nativeElement);
            this.animation.onDone(() => this.animationDone.emit({ toState: 'collapsed' }));
            this.animation.play();
        }
    }
    /**
     * @private
     * @return {?}
     */
    setStyle() {
        this.destroyAnimation();
        /** @type {?} */
        const baseStyle = this.expanded ? this.getExpandedStyle() : this.getCollapsedStyle();
        Object.keys(baseStyle).forEach(property => {
            this.renderer.setElementStyle(this.elementRef.nativeElement, property, baseStyle[property]);
        });
    }
    /**
     * @private
     * @return {?}
     */
    destroyAnimation() {
        if (this.animation) {
            this.animation.destroy();
            delete this.animation;
        }
    }
}
MglTimelineEntryDotComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                selector: 'mgl-timeline-entry-dot',
                template: "<ng-content></ng-content>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                styles: ["mgl-timeline-entry-dot{display:block;position:absolute}"]
            }] }
];
/** @nocollapse */
MglTimelineEntryDotComponent.ctorParameters = () => [
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
];
MglTimelineEntryDotComponent.propDecorators = {
    clazz: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['class',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ['class',] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MglTimelineEntryContentComponent {
    /**
     * @param {?} elementRef
     * @param {?} animationBuilder
     * @param {?} renderer
     */
    constructor(elementRef, animationBuilder, renderer) {
        this.elementRef = elementRef;
        this.animationBuilder = animationBuilder;
        this.renderer = renderer;
        this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this._expanded = false;
    }
    /**
     * @param {?} expanded
     * @return {?}
     */
    set expanded(expanded) {
        this.contentHeight = this.elementRef.nativeElement.scrollHeight;
        /** @type {?} */
        const animate$$1 = this._expanded !== expanded;
        this._expanded = expanded;
        animate$$1 ? this.animate() : this.setStyle;
    }
    /**
     * @return {?}
     */
    get expanded() {
        return this._expanded;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.contentHeight = this.elementRef.nativeElement.scrollHeight;
        this.setStyle();
    }
    /**
     * @private
     * @return {?}
     */
    getCollapsedStyle() {
        return {
            height: '0px'
        };
    }
    /**
     * @private
     * @return {?}
     */
    getExpandedStyle() {
        return {
            height: this.contentHeight + 'px'
        };
    }
    /**
     * @return {?}
     */
    animate() {
        if (this.expanded) {
            /** @type {?} */
            const animation = this.animationBuilder
                .build([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])(this.getCollapsedStyle()),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])(this.getExpandedStyle())),
            ])
                .create(this.elementRef.nativeElement);
            animation.onDone(() => this.animationDone.emit({ toState: 'expanded' }));
            animation.play();
        }
        else {
            this.animationBuilder;
            /** @type {?} */
            const animation = this.animationBuilder
                .build([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])(this.getExpandedStyle()),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])(this.getCollapsedStyle())),
            ])
                .create(this.elementRef.nativeElement);
            animation.onDone(() => this.animationDone.emit({ toState: 'collapsed' }));
            animation.play();
        }
    }
    /**
     * @return {?}
     */
    setStyle() {
        /** @type {?} */
        const baseStyle = this.expanded ? this.getExpandedStyle() : this.getCollapsedStyle();
        Object.keys(baseStyle).forEach(property => {
            this.renderer.setElementStyle(this.elementRef.nativeElement, property, baseStyle[property]);
        });
    }
}
MglTimelineEntryContentComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                selector: 'mgl-timeline-entry-content',
                template: "<div><ng-content></ng-content></div>",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                styles: ["mgl-timeline-entry-content{position:relative;display:block;overflow:hidden}mgl-timeline-entry-content>div{padding:10px}"]
            }] }
];
/** @nocollapse */
MglTimelineEntryContentComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MglTimelineEntrySideComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set alternate(value) {
        this.elementRef.nativeElement.classList.toggle('alternate', value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set mobile(value) {
        this.elementRef.nativeElement.classList.toggle('mobile', value);
    }
}
MglTimelineEntrySideComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                selector: 'mgl-timeline-entry-side',
                template: "<ng-content></ng-content>",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                styles: ["mgl-timeline-entry-side{position:absolute;top:0;left:100%;width:100%;text-align:center}mgl-timeline-entry-side.alternate{left:-100%}mgl-timeline-entry-side.mobile{display:none}"]
            }] }
];
/** @nocollapse */
MglTimelineEntrySideComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MglTimelineEntryComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.subscriptions = [];
        this.focusOnOpen = false;
        this._mobile = false;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    /**
     * @param {?} expanded
     * @return {?}
     */
    set expanded(expanded) {
        if (this.dot && expanded) {
            this.dot.expanded = expanded;
        }
        else {
            this.content.expanded = expanded;
        }
        this.changed.emit(expanded);
    }
    /**
     * @return {?}
     */
    get expanded() {
        return this.dot ? (this.dot.expanded && this.content.expanded) : this.content.expanded;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set mobile(value) {
        this.elementRef.nativeElement.classList.toggle('mobile', value);
        if (this.dot) {
            this.dot.mobile = value;
        }
        if (this.side) {
            this.side.mobile = value;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.dot) {
            this.subscriptions.push(this.dot.animationDone.subscribe(event => {
                if (event.toState === 'expanded') {
                    this.content.expanded = true;
                }
                else {
                    this.animationDone.emit(event);
                }
            }));
        }
        if (this.content) {
            this.subscriptions.push(this.content.animationDone.subscribe(event => {
                if (this.dot && event.toState === 'collapsed') {
                    this.dot.expanded = false;
                }
                else {
                    if (this.focusOnOpen) {
                        this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
                    }
                    this.animationDone.emit(event);
                }
            }));
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set alternate(value) {
        this.elementRef.nativeElement.classList.toggle('alternate', value);
        if (this.dot) {
            this.dot.alternate = value;
        }
        if (this.side) {
            this.side.alternate = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
    /**
     * @return {?}
     */
    collapse() {
        this.expanded = false;
    }
    /**
     * @return {?}
     */
    expand() {
        this.expanded = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggle(event) {
        /** @type {?} */
        const headerFound = this.containsInPath(event, 'mgl-timeline-entry-header');
        /** @type {?} */
        const dotFound = this.containsInPath(event, 'mgl-timeline-entry-dot');
        if (headerFound || dotFound) {
            this.expanded = !this.expanded;
        }
    }
    /**
     * @private
     * @param {?} mouseEvent
     * @param {?} name
     * @return {?}
     */
    containsInPath(mouseEvent, name) {
        /** @type {?} */
        let currentElem = (/** @type {?} */ (mouseEvent.target));
        while (currentElem) {
            if (currentElem.localName === name) {
                return true;
            }
            currentElem = currentElem.parentElement;
        }
        return false;
    }
}
MglTimelineEntryComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                selector: 'mgl-timeline-entry',
                template: "<ng-content select=\"mgl-timeline-entry-side\"></ng-content>\n<div class=\"mgl-timeline-entry-card\">\n  <div class=\"mgl-timeline-entry-card-header\" (click)=\"toggle($event)\">\n    <ng-content select=\"mgl-timeline-entry-dot\"></ng-content>\n    <ng-content select=\"mgl-timeline-entry-header\"></ng-content>\n  </div>\n  <ng-content select=\"mgl-timeline-entry-content\"></ng-content>\n</div>",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                styles: ["mgl-timeline-entry{display:block;position:relative;margin-bottom:50px;width:calc(50% - 5px)}mgl-timeline-entry.alternate{margin-left:calc(50% + 5px)}mgl-timeline-entry.mobile{width:calc(100% - 30px);margin-left:30px}mgl-timeline-entry .mgl-timeline-entry-card{background-color:#f0f0f0}mgl-timeline-entry .mgl-timeline-entry-card .mgl-timeline-entry-card-header{position:relative;background-color:#e6e6e6}"]
            }] }
];
/** @nocollapse */
MglTimelineEntryComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
MglTimelineEntryComponent.propDecorators = {
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ['class.expanded',] }],
    changed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"], args: ['expand',] }],
    animationDone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [MglTimelineEntryContentComponent,] }],
    header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [MglTimelineEntryHeaderComponent,] }],
    dot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [MglTimelineEntryDotComponent,] }],
    side: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [MglTimelineEntrySideComponent,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MglTimelineComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     */
    constructor(elementRef, changeDetectorRef) {
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.toggle = true;
        this.mobileWidthThreshold = 640;
        this.alternate = true;
        this.side = 'left';
        this._focusOnOpen = false;
        this.subscriptions = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set mobile(value) {
        this.content && this.content.forEach(entry => entry.mobile = value);
        this.elementRef.nativeElement.classList.toggle('mobile', value);
    }
    /**
     * @return {?}
     */
    get mobile() {
        return this.elementRef.nativeElement.classList.contains('mobile');
    }
    /**
     * @param {?} focusOnOpen
     * @return {?}
     */
    set focusOnOpen(focusOnOpen) {
        this.content && this.content.forEach(entry => entry.focusOnOpen = focusOnOpen);
        this._focusOnOpen = focusOnOpen;
    }
    /**
     * @return {?}
     */
    get focusOnOpen() {
        return this._focusOnOpen;
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    ngOnChanges(simpleChanges) {
        this.updateContent();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.mobile = this.elementRef.nativeElement.clientWidth < this.mobileWidthThreshold;
        setTimeout(() => this.updateContent());
        this.content.changes.subscribe(changes => {
            this.updateContent();
        });
    }
    /**
     * @private
     * @return {?}
     */
    updateContent() {
        this.ngOnDestroy();
        if (this.content) {
            this.content.forEach((entry, index) => {
                if (this.toggle) {
                    this.subscriptions.push(entry.changed.subscribe(state => {
                        if (state === true) {
                            this.content.filter(e => e !== entry).forEach(e => e.collapse());
                        }
                    }));
                }
                entry.alternate = this.alternate ? (index % 2 !== 0) : (this.side === 'right');
                entry.mobile = this.mobile;
                entry.focusOnOpen = this.focusOnOpen;
            });
        }
    }
    /**
     * @param {?} ev
     * @return {?}
     */
    onResize(ev) {
        console.log(this.mobileWidthThreshold);
        this.mobile = this.elementRef.nativeElement.clientWidth < this.mobileWidthThreshold;
    }
}
MglTimelineComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                selector: 'mgl-timeline',
                template: "<div class=\"mgl-timeline-line\"></div>\n<ng-content></ng-content>",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                styles: ["mgl-timeline{position:relative;display:block;padding:50px 0}mgl-timeline .mgl-timeline-line{position:absolute;top:0;height:100%;background-color:#a0a0a0;left:50%;width:10px;-webkit-transform:translateX(-50%);transform:translateX(-50%)}mgl-timeline.mobile .mgl-timeline-line{left:20px;-webkit-transform:none;transform:none}"]
            }] }
];
/** @nocollapse */
MglTimelineComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
MglTimelineComponent.propDecorators = {
    toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mobileWidthThreshold: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    alternate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    side: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    focusOnOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [MglTimelineEntryComponent,] }],
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['window:resize', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MglTimelineModule {
}
MglTimelineModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                declarations: [
                    MglTimelineComponent,
                    MglTimelineEntryComponent,
                    MglTimelineEntryHeaderComponent,
                    MglTimelineEntrySideComponent,
                    MglTimelineEntryContentComponent,
                    MglTimelineEntryDotComponent
                ],
                exports: [
                    MglTimelineComponent,
                    MglTimelineEntryComponent,
                    MglTimelineEntryHeaderComponent,
                    MglTimelineEntrySideComponent,
                    MglTimelineEntryContentComponent,
                    MglTimelineEntryDotComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-mgl-timeline.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/usuarios/usuarios.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/usuarios/usuarios.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template ngxPermissionsOnly=\"canAddUsers\">\r\n    <mk-box [isRemovable]=\"false\" [isCollapsed]=\"false\">\r\n        <div class=\"container pull-left\">\r\n            <div class=\"row\">\r\n            <!-- <div class=\"col-sm-4\">    \r\n                <button nz-button nzType=\"primary\" (click)=\"showModalAgregarUsuario()\">Agregar usuario</button>                         \r\n            </div> -->\r\n        </div>\r\n        </div>\r\n    </mk-box>\r\n</ng-template>\r\n\r\n\r\n<div style=\"background: white\">\r\n    <nz-table #tableUsuarios [nzData]=\"usuarios\" nzBordered=\"true\" [nzLoading]=\"isLoading\" nzSize=\"small\" nzShowPagination=\"true\">\r\n        <thead>\r\n            <tr>\r\n                <th>Nombre</th>\r\n                <th>Usuario</th>\r\n                <th>Institucion</th>\r\n                <th>Cargo</th>\r\n                <ng-template [ngxPermissionsOnly]=\"['canViewUsers' ,'canEditUsers', 'canDeleteUsers']\">\r\n                    <th>Acciones</th>\r\n                </ng-template>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let data of tableUsuarios.data\">\r\n                <td>{{ data.nombre }}</td>\r\n                <td>{{ data.usuario }}</td>\r\n                <td>{{ data.institucion }}</td>\r\n                <td>{{ data.cargo }}</td>\r\n                <ng-template [ngxPermissionsOnly]=\"['canViewUsers' ,'canEditUsers', 'canDeleteUsers']\">\r\n                    <td class=\"text-center\">\r\n                        <ng-template ngxPermissionsOnly=\"canViewUsers\">                \r\n                            <button style=\"margin-right: 10px\" class=\"btn btn-primary\" nzTitle=\"Ver \" nzPlacement=\"topCenter\" nz-tooltip (click)=\"showModalDatosUsuario(data)\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></button>\r\n                        </ng-template> \r\n                        <ng-template ngxPermissionsOnly=\"canEditUsers\">\r\n                            <button style=\"margin-right: 10px\" nzTitle=\"Editar\" nzPlacement=\"topCenter\" nz-tooltip class=\"btn btn-success\" (click)=\"showModalEditarUsuario(data)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>                    \r\n                        </ng-template> \r\n                        <ng-template ngxPermissionsOnly=\"canDeleteUsers\">\r\n                            <button style=\"margin-right: 10px\" class=\"btn btn-danger\" nzTitle=\"Eliminar\" nzPlacement=\"topCenter\" nz-tooltip (click)=\"showDeleteConfirm(data)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\r\n                        </ng-template>  \r\n                    </td>\r\n                </ng-template>\r\n            </tr>\r\n        </tbody>\r\n    </nz-table>\r\n</div>\r\n\r\n\r\n<nz-modal [(nzVisible)]=\"isVisibleDatosUsuario\" [nzWidth]=\"750\" [nzTitle]=\"modalTitleDatosUsuario\" [nzContent]=\"modalContentDatosUsuario\" [nzFooter]=\"modalFooterDatosUsuario\">\r\n    <ng-template #modalTitleDatosUsuario>DATOS DEL USUARIO</ng-template>\r\n\r\n    <ng-template #modalContentDatosUsuario>\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-md-4\">\r\n                <label>Nombre</label>\r\n                <p for=\"\">{{ userDataSelected.nombre }}</p>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n                <label>Usuario</label>\r\n                <p for=\"\">{{ userDataSelected.usuario }}</p>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n\r\n                <label>Contraseña</label>\r\n                <p for=\"\">{{ userDataSelected.password }}</p>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n                <br>\r\n                <label>Institucion</label>\r\n                <p for=\"\">{{ userDataSelected.institucion }}</p>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n                <br>\r\n                <label>Cargo</label>\r\n                <p for=\"\">{{ userDataSelected.cargo }}</p>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n                <br>\r\n                <label>Estado</label>\r\n                <p *ngIf=\"this.userDataSelected.status=='1'\">Activo</p>\r\n                <p *ngIf=\"this.userDataSelected.status=='0'\">Inactivo</p>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n                <br>\r\n                <label>Fecha de creacion</label>\r\n                <p for=\"\">{{ userDataSelected.createAt }}</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n\r\n            <!-- <div class=\"col-md-4\">\r\n                <label>Selfie</label>\r\n                <ng-container *ngIf=\"!this.verificadoDataSelected.selfie; else withImage4\">\r\n                    <p>Sin imagen</p>\r\n                </ng-container>\r\n                <ng-template #withImage4>\r\n                    <div>\r\n                        <img src=\"{{ this.verificadoDataSelected.selfie }}\" style=\"width: 50px; height: 90px;\" alt=\"\">\r\n                    </div>\r\n                </ng-template>\r\n            </div> -->\r\n\r\n             \r\n        </div>\r\n    </ng-template>\r\n\r\n    <ng-template #modalFooterDatosUsuario>\r\n        <button nz-button nzType=\"default\" (click)=\"handleCancelDatosUsuario()\">Cerrar</button>\r\n    </ng-template>\r\n</nz-modal>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--                                             Agregar Usuario                                                                   -->\r\n \r\n<nz-modal [(nzVisible)]=\"isVisibleAgregarUsuario\" [nzWidth]=\"800\" [nzTitle]=\"modalTitleAgregarUsuario\" [nzContent]=\"modalContentAgregarUsuario\" [nzFooter]=\"modalFooterAgregarUsuario\" (nzOnCancel)=\"handleCancelAgregarUsuario()\">\r\n    <ng-template #modalTitleAgregarUsuario>Nuevo usuario</ng-template>\r\n\r\n    <ng-template #modalContentAgregarUsuario>\r\n        <form [formGroup]=\"userAgregarForm\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-md-3\">\r\n                        <label for=\"\">Nombre</label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"nombre\">  \r\n                                <div *ngIf=\"submittedAgregarUsuario && fau.nombre.errors\" class=\"invalid-feedback d-block\">\r\n                                    <div *ngIf=\"fau.nombre.errors.required\" class=\"text-danger\">Campo requerido</div>\r\n                                </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">  \r\n                        <label for=\"\">Usuario</label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"usuario\">  \r\n                                <div *ngIf=\"submittedAgregarUsuario && fau.usuario.errors\" class=\"invalid-feedback d-block\">\r\n                                    <div *ngIf=\"fau.usuario.errors.required\" class=\"text-danger\">Campo requerido</div>\r\n                                </div>             \r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <label for=\"\">Contraseña</label>\r\n                        <nz-input-group [nzSuffix]=\"suffixTemplate\">\r\n                        <input\r\n                            [type]=\"passwordVisible ? 'text' : 'password'\"\r\n                            nz-input\r\n                            placeholder=\"**********\"\r\n                            [(ngModel)]=\"password\" formControlName=\"contrasena\"\r\n                        />             \r\n                        </nz-input-group>\r\n                        <ng-template #suffixTemplate>\r\n                        <i nz-icon [nzType]=\"passwordVisible ? 'eye-invisible' : 'eye'\" (click)=\"passwordVisible = !passwordVisible\"></i>\r\n                        </ng-template>\r\n                            <div *ngIf=\"submittedAgregarUsuario && fau.contrasena.errors\" class=\"invalid-feedback d-block\">\r\n                                <div *ngIf=\"fau.contrasena.errors.required\" class=\"text-danger\">Campo requerido</div>\r\n                            </div>\r\n                    </div>   \r\n                    \r\n                    <div class=\"col-md-3\">  \r\n                        <label for=\"\">Institucion</label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"institucion\">         \r\n                    </div>\r\n\r\n                    <div class=\"col-md-3\">  \r\n                        <label for=\"\">Cargo</label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"cargo\">         \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </ng-template>\r\n\r\n    <ng-template #modalFooterAgregarUsuario>\r\n        <button nz-button nzType=\"default\" (click)=\"handleCancelAgregarUsuario()\">Cerrar</button>\r\n        <button nz-button nzType=\"primary\" (click)=\"onSubmitAgregarUsuario()\" [nzLoading]=\"isConfirmLoadingAgregarUsuario\">Guardar cambios</button>\r\n    </ng-template>\r\n</nz-modal>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--                                             Editar Usuario                                                                   -->\r\n \r\n<nz-modal [(nzVisible)]=\"isVisibleEditarUsuario\" [nzWidth]=\"800\" [nzTitle]=\"modalTitleEditarUsuario\" [nzContent]=\"modalContentEditarUsuario\" [nzFooter]=\"modalFooterEditarUsuario\" (nzOnCancel)=\"handleCancelEditarUsuario()\">\r\n    <ng-template #modalTitleEditarUsuario>Editar usuario</ng-template>\r\n  \r\n    <ng-template #modalContentEditarUsuario>\r\n        <form [formGroup]=\"userEditarForm\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group\">\r\n                  <div class=\"col-md-3\">\r\n                      <label for=\"\">Nombre</label>\r\n                          <input type=\"text\" class=\"form-control\" formControlName=\"nombre\">\r\n                          <div *ngIf=\"submittedEditarUsuario && feu.nombre.errors\" class=\"invalid-feedback d-block\">\r\n                              <div *ngIf=\"feu.nombre.errors.required\" class=\"text-danger\">Campo requerido</div>\r\n                          </div>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <label for=\"\">Usuario</label>\r\n                          <input type=\"text\" class=\"form-control\" formControlName=\"usuario\">  \r\n                          <div *ngIf=\"submittedEditarUsuario && feu.usuario.errors\" class=\"invalid-feedback d-block\">\r\n                              <div *ngIf=\"feu.usuario.errors.required\" class=\"text-danger\">Campo requerido</div>\r\n                          </div>             \r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <label for=\"\">Contraseña</label>\r\n                      <nz-input-group [nzSuffix]=\"suffixTemplate\">\r\n                      <input\r\n                          [type]=\"passwordVisible ? 'text' : 'password'\"\r\n                          nz-input\r\n                          placeholder=\"**********\"\r\n                          [(ngModel)]=\"password\" formControlName=\"contrasena\"\r\n                      />\r\n                      </nz-input-group>\r\n                      <ng-template #suffixTemplate>\r\n                      <i nz-icon [nzType]=\"passwordVisible ? 'eye-invisible' : 'eye'\" (click)=\"passwordVisible = !passwordVisible\"></i>\r\n                      </ng-template>\r\n                  </div>    \r\n\r\n\r\n                  <div class=\"col-md-3\">  \r\n                    <label for=\"\">Institucion</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"institucion\">         \r\n                </div>\r\n\r\n                <div class=\"col-md-3\">  \r\n                    <label for=\"\">Cargo</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"cargo\">         \r\n                </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </ng-template>\r\n  \r\n    <ng-template #modalFooterEditarUsuario>\r\n        <button nz-button nzType=\"default\" (click)=\"handleCancelEditarUsuario()\">Cerrar</button>\r\n        <button nz-button nzType=\"primary\" (click)=\"onSubmitEditarUsuario()\" [nzLoading]=\"isConfirmLoadingEditarUsuario\">Guardar cambios</button>\r\n    </ng-template>\r\n  </nz-modal>\r\n  ");

/***/ }),

/***/ "./src/app/components/usuarios/usuario-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/usuarios/usuario-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: UsuariosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosRoutingModule", function() { return UsuariosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _usuarios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuarios.component */ "./src/app/components/usuarios/usuarios.component.ts");




const routes = [
    {
        path: '',
        component: _usuarios_component__WEBPACK_IMPORTED_MODULE_3__["UsuariosComponent"]
    }
];
let UsuariosRoutingModule = class UsuariosRoutingModule {
};
UsuariosRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UsuariosRoutingModule);



/***/ }),

/***/ "./src/app/components/usuarios/usuarios.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/usuarios/usuarios.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXN1YXJpb3MvdXN1YXJpb3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/usuarios/usuarios.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/usuarios/usuarios.component.ts ***!
  \***********************************************************/
/*! exports provided: UsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosComponent", function() { return UsuariosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_models_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/users */ "./src/app/models/users.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_services_home_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var src_app_models_logs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/models/logs */ "./src/app/models/logs.ts");












let UsuariosComponent = class UsuariosComponent {
    constructor(usuariosService, modalService, homeServices, formBuilder, toastr, datepipe, http) {
        this.usuariosService = usuariosService;
        this.modalService = modalService;
        this.homeServices = homeServices;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.datepipe = datepipe;
        this.http = http;
        this.usuarios = [];
        this.isLoading = true;
        this.isVisibleDatosUsuario = false;
        this.now = new Date();
        this.passwordVisible = false;
        this.isVisibleAgregarUsuario = false;
        this.submittedAgregarUsuario = false;
        this.isConfirmLoadingAgregarUsuario = false;
        this.isVisibleEditarUsuario = false;
        this.submittedEditarUsuario = false;
        this.isConfirmLoadingEditarUsuario = false;
        this.data = [];
        this.browserName = '';
        this.browserVersion = '';
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.fech = this.datepipe.transform(this.now, 'yyyy-MM-dd HH:mm:ss');
        this.usuariosService.getUsersApp().subscribe(request => {
            this.usuarios = request;
            this.isLoading = false;
        }, error => {
            console.log(error);
        });
    }
    ngOnInit() {
        this.dateLogin = this.datepipe.transform(this.now, 'dd/MM/yyyy hh:mm:ss', 'es');
        this.userAgregarForm = this.formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            usuario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            contrasena: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            institucion: [''],
            cargo: ['']
        });
        this.userEditarForm = this.formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            usuario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            contrasena: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            institucion: [''],
            cargo: ['']
        });
        this.getIPAddress();
        this.browserName = this.detectBrowserName();
        this.browserVersion = this.detectBrowserVersion();
        setTimeout(() => {
            this.Logs('usuariosapp', 'Consulto modulo usuarios app', this.currentUserSubject.value.id_usuario, 'Consulta', 'Consulto el modulo de usuarios app: ');
        }, 4000);
    }
    getIPAddress() {
        this.http.get('https://jsonip.com').subscribe(data => {
            this.ipAddressPrivate = data['ip'];
        });
        this.http.get('https://api.ipify.org?format=json').subscribe(data => {
            this.ipAddressPublic = data['ip'];
        });
    }
    detectBrowserName() {
        const agent = window.navigator.userAgent.toLowerCase();
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
    }
    detectBrowserVersion() {
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
    }
    Logs(tabla, objeto, id, tipo, descipcion) {
        var navegadorUsed = this.browserName + ', ' + this.browserVersion;
        var descripcion = descipcion + ' por ' + this.currentUserSubject.value.nombre_usuario;
        if (this.ipAddressPrivate == undefined) {
            this.ipAddressPrivate = '';
        }
        if (this.ipAddressPublic == undefined) {
            this.ipAddressPublic = '';
        }
        let metaData = new src_app_models_logs__WEBPACK_IMPORTED_MODULE_11__["AdmLogs"](tabla, objeto, id, tipo, descripcion, this.currentUserSubject.value.nombre_empleado, this.currentUserSubject.value.nombre_usuario, this.ipAddressPublic, this.ipAddressPrivate, navegadorUsed, this.dateLogin);
        this.homeServices.addLogLogin(metaData).subscribe(result => {
        }, err => {
            console.log(err);
        });
    }
    get fau() { return this.userAgregarForm.controls; }
    showModalDatosUsuario(data) {
        this.userDataSelected = JSON.parse(JSON.stringify(data));
        setTimeout(() => {
            this.Logs('usuariosapp', 'Consulta actividad de detalle de usuario app' + this.userDataSelected.usuario, this.userDataSelected.nombre, 'Consulta', 'Visualizo los detalles de usuario app ');
        }, 1000);
        console.log(this.userDataSelected);
        this.isVisibleDatosUsuario = true;
    }
    handleCancelDatosUsuario() {
        this.isVisibleDatosUsuario = false;
    }
    showModalAgregarUsuario() {
        this.isVisibleAgregarUsuario = true;
        this.userAgregarForm.get('nombre').setValue(null);
        this.userAgregarForm.get('usuario').setValue(null);
        this.userAgregarForm.get('institucion').setValue(null);
        this.userAgregarForm.get('cargo').setValue(null);
        this.password = null;
    }
    handleCancelAgregarUsuario() {
        this.isVisibleAgregarUsuario = false;
        this.submittedAgregarUsuario = false;
    }
    onSubmitAgregarUsuario() {
        this.submittedAgregarUsuario = true;
        if (this.userAgregarForm.invalid) {
            return;
        }
        this.isConfirmLoadingAgregarUsuario = true;
        let userapp = new src_app_models_users__WEBPACK_IMPORTED_MODULE_3__["Users"](null, this.userAgregarForm.get('nombre').value, this.userAgregarForm.get('usuario').value, this.userAgregarForm.get('contrasena').value, '', '', this.userAgregarForm.get('institucion').value, this.userAgregarForm.get('cargo').value, '', '', this.fech);
        console.log(userapp);
        this.usuariosService.addUserApp(userapp).subscribe(result => {
            console.log(result);
            this.usuarios.push(new src_app_models_users__WEBPACK_IMPORTED_MODULE_3__["Users"](result.id_usuario_app, result.nombre, result.usuario, result.password, '', '', result.institucion, result.cargo, '', '', result.createAt));
            this.usuarios = [...this.usuarios];
            this.isConfirmLoadingAgregarUsuario = false;
            this.isVisibleAgregarUsuario = false;
            this.toastr.success('Usuario Agregado!');
        }, err => {
            this.isConfirmLoadingAgregarUsuario = false;
            if (err.error.msg.error.fields) {
                if (err.error.msg.error.fields.usuario)
                    this.toastr.error('El nombre de usuario ingresado ya existe.');
            }
            else {
                this.toastr.error('Hubo un error al agregar el usuario');
            }
        });
        this.submittedAgregarUsuario = false;
    }
    showModalEditarUsuario(data) {
        this.userDataSelected = JSON.parse(JSON.stringify(data));
        setTimeout(() => {
            this.Logs('usuariosapp', 'Consulta actividad de edicion usuario app' + this.userDataSelected.usuario, this.userDataSelected.nombre, 'Consulta', 'Visualizo los detalles de edicion de usuario app ');
        }, 1000);
        console.log(this.userDataSelected);
        this.userEditarForm.controls['nombre'].setValue(this.userDataSelected.nombre);
        this.userEditarForm.controls['usuario'].setValue(this.userDataSelected.usuario);
        this.userEditarForm.controls['contrasena'].setValue(this.userDataSelected.password);
        this.userEditarForm.controls['institucion'].setValue(String(this.userDataSelected.institucion));
        this.userEditarForm.controls['cargo'].setValue(String(this.userDataSelected.cargo));
        this.isVisibleEditarUsuario = true;
    }
    handleCancelEditarUsuario() {
        this.isVisibleEditarUsuario = false;
        this.submittedEditarUsuario = false;
    }
    onSubmitEditarUsuario() {
        this.submittedEditarUsuario = true;
        if (this.userEditarForm.invalid) {
            return;
        }
        this.isConfirmLoadingEditarUsuario = true;
        let user = new src_app_models_users__WEBPACK_IMPORTED_MODULE_3__["Users"](this.userDataSelected.id, this.userEditarForm.get('nombre').value, this.userEditarForm.get('usuario').value, this.userEditarForm.get('contrasena').value, this.userDataSelected.islogged, this.userDataSelected.image, this.userEditarForm.get('institucion').value, this.userEditarForm.get('cargo').value, this.userDataSelected.token, this.userDataSelected.status, this.userDataSelected.createAt);
        console.log(user);
        this.usuariosService.updateUserApp(user).subscribe(result => {
            this.isConfirmLoadingEditarUsuario = false;
            this.isVisibleEditarUsuario = false;
            this.toastr.success('Usuario actualizado!');
            setTimeout(() => {
                this.Logs('usuarios', 'Edicion del usuario ' + this.userDataSelected.usuario, this.userDataSelected.nombre, 'Actualizacion', 'Realizo cambios en el campo de nombre de "' + this.userDataSelected.nombre + '" a "' + this.userEditarForm.get('nombre').value +
                    '" y realizo cambios en usuario de "' + this.userDataSelected.usuario + '" a "' + this.userEditarForm.get('usuario').value + '"' +
                    '" y realizo cambios en contrasena de "' + this.userDataSelected.password + '" a "' + this.userEditarForm.get('contrasena').value + '"' +
                    '" y realizo cambios en institucion de "' + this.userDataSelected.institucion + '" a "' + this.userEditarForm.get('institucion').value + '"' +
                    '" y realizo cambios en cargo de "' + this.userDataSelected.cargo + '" a "' + this.userEditarForm.get('cargo').value + '".');
            }, 1000);
            this.usuariosService.getUsersApp().subscribe(request => {
                this.usuarios = request;
                this.isLoading = false;
            }, error => {
                console.log(error);
            });
        }, err => {
            console.log(err);
            this.isConfirmLoadingEditarUsuario = false;
            if (err.error.msg.error.fields) {
                if (err.error.msg.error.fields.usuario)
                    this.toastr.error('El nombre de usuario ingresado ya existe.');
            }
            else {
                this.toastr.error('Hubo un error al editar el usuario');
            }
        });
        this.submittedEditarUsuario = false;
    }
    showDeleteConfirm(data) {
        this.userDataSelected = JSON.parse(JSON.stringify(data));
        this.modalService.confirm({
            nzTitle: '¿Esta seguro que desea eliminar el usuario?',
            nzContent: '<b style="color: red;">Se eliminara el usuario: ' + this.userDataSelected.nombre + '</b>',
            nzOkText: 'Si',
            nzOkType: 'danger',
            nzOnOk: () => {
                this.usuariosService.deleteUserApp(this.userDataSelected.id).subscribe(result => {
                    this.toastr.success('Usuario eliminado correctamente!');
                    setTimeout(() => {
                        this.Logs('usuarios', 'Eliminacion del usuario ' + this.userDataSelected.usuario, this.userDataSelected.nombre, 'Eliminacion', 'Se elimino el usuario: ' + this.userDataSelected.usuario + ' ');
                    }, 1000);
                    this.usuarios = this.usuarios.filter(obj => obj.id !== this.userDataSelected.id);
                    this.usuarios = [...this.usuarios];
                }, error => {
                    this.toastr.error('Hubo un error al eliminar el usuario');
                });
            },
            nzCancelText: 'No',
            nzOnCancel: () => {
            }
        });
    }
};
UsuariosComponent.ctorParameters = () => [
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzModalService"] },
    { type: src_app_services_home_service__WEBPACK_IMPORTED_MODULE_10__["HomeService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }
];
UsuariosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usuarios',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./usuarios.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/usuarios/usuarios.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./usuarios.component.css */ "./src/app/components/usuarios/usuarios.component.css")).default]
    })
], UsuariosComponent);



/***/ }),

/***/ "./src/app/components/usuarios/usuarios.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/usuarios/usuarios.module.ts ***!
  \********************************************************/
/*! exports provided: UsuariosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosModule", function() { return UsuariosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _usuario_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usuario-routing.module */ "./src/app/components/usuarios/usuario-routing.module.ts");
/* harmony import */ var _usuarios_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuarios.component */ "./src/app/components/usuarios/usuarios.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var angular_admin_lte__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-admin-lte */ "./node_modules/angular-admin-lte/fesm2015/angular-admin-lte.js");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm2015/ant-design-icons-angular-icons.js");
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tree */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-tree.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/fesm2015/ngx-permissions.js");
/* harmony import */ var angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-mgl-timeline */ "./node_modules/angular-mgl-timeline/fesm2015/angular-mgl-timeline.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");













const antDesignIcons = _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__;
const icons = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

let UsuariosModule = class UsuariosModule {
};
UsuariosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_usuarios_component__WEBPACK_IMPORTED_MODULE_5__["UsuariosComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzTableModule"],
            _usuario_routing_module__WEBPACK_IMPORTED_MODULE_4__["UsuariosRoutingModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzDropDownModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
            ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_9__["NzTreeModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzSelectModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzModalModule"],
            angular_admin_lte__WEBPACK_IMPORTED_MODULE_7__["BoxModule"],
            angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_11__["MglTimelineModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_10__["NgxPermissionsModule"].forChild()
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NZ_ICONS"], useValue: icons }]
    })
], UsuariosModule);



/***/ })

}]);
//# sourceMappingURL=components-usuarios-usuarios-module-es2015.js.map