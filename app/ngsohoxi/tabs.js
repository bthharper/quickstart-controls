"use strict";
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
var tab_ts_1 = require('./tab.ts');
var Tabs = (function () {
    function Tabs(el) {
        this.el = el;
    }
    Tabs.prototype.selectTab = function (tab) {
        console.log(tab.id + " selected");
        this.tabs.forEach(function (tab) { tab.deselect(); });
        tab.select();
    };
    Tabs.prototype.ngAfterContentInit = function () {
        console.log("ngAfterContentInit");
        $(this.el.nativeElement).tabs();
        // get all active tabs
        var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    };
    __decorate([
        core_1.ContentChildren(tab_ts_1.Tab), 
        __metadata('design:type', core_1.QueryList)
    ], Tabs.prototype, "tabs", void 0);
    Tabs = __decorate([
        core_1.Component({
            selector: '.tab-container',
            template: "<ul class=\"tab-list\">\n                    <li class=\"tab\" *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\" [class.is-selected]=\"tab.active\">\n                        <a href=\"#{{tab.id}}\">{{tab.title}}</a>\n                    </li>   \n                </ul>\n                <ng-content></ng-content>",
            directives: [tab_ts_1.Tab]
        }),
        __param(0, core_1.Inject(core_1.ElementRef)), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Tabs);
    return Tabs;
}());
exports.Tabs = Tabs;
//# sourceMappingURL=tabs.js.map