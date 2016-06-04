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
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(el) {
        _super.call(this);
        this.el = el;
        this.clicked = new core_1.EventEmitter();
        this.type = "btn-primary";
        this.icon = null;
        //this.innerHTML = el.nativeElement.innerHTML;
    }
    // Used to set the correct class on the control.
    Button.prototype.setClasses = function () {
        var classes = {
            "btn-primary": this.type === "btn-primary",
            "btn": this.type === "btn",
            "btn-tertiary": this.type === "btn-tertiary",
            "btn-icon": this.type === "btn-icon"
        };
        return classes;
    };
    Button.prototype.onClick = function () {
        this.clicked.emit(this.id);
    };
    Button.prototype.ngAfterContentInit = function () {
        $(this.el.nativeElement).find('.button').button();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Button.prototype, "clicked", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Button.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Button.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Button.prototype, "icon", void 0);
    Button = __decorate([
        core_1.Component({
            moduleId: __moduleName,
            selector: 'sohoxi-button',
            templateUrl: 'button.html'
        }),
        __param(0, core_1.Inject(core_1.ElementRef)), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Button);
    return Button;
}(control_1.Control));
exports.Button = Button;
//# sourceMappingURL=button.js.map