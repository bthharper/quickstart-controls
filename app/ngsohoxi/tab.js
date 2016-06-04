"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var control_1 = require('./control');
var Tab = (function (_super) {
    __extends(Tab, _super);
    function Tab(el) {
        _super.call(this);
        this.el = el;
        this.active = false;
    }
    Tab.prototype.deselect = function () {
        $(this.el.nativeElement).hide();
        this.active = true;
    };
    Tab.prototype.select = function () {
        $(this.el.nativeElement).show();
        this.active = false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Tab.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Tab.prototype, "active", void 0);
    Tab = __decorate([
        core_1.Component({
            moduleId: __moduleName,
            selector: '.tab-panel',
            template: "<ng-content></ng-content>"
        }),
        __param(0, core_1.Inject(core_1.ElementRef)), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Tab);
    return Tab;
}(control_1.Control));
exports.Tab = Tab;
//# sourceMappingURL=tab.js.map