import { Component, Input, ContentChildren, QueryList, AfterContentInit, Inject, ElementRef} from '@angular/core';

import { Control } from './control';

declare var $: any, __moduleName: string;

@Component({
    moduleId: __moduleName,
    selector: '.tab-panel',
    template: `<ng-content></ng-content>`
})
export class Tab extends Control {
    @Input() title: string;
    @Input() active = false;

    deselect() {
        $(this.el.nativeElement).hide();
        this.active = true;
    }

    select() {
        $(this.el.nativeElement).show();
        this.active = false;
    }

    constructor( @Inject(ElementRef) private el: ElementRef) {
        super();
    }
}