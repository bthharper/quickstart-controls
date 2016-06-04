import { Component, Input, Inject, EventEmitter, Output, AfterContentInit , ElementRef } from '@angular/core';

import { Control } from './control';

declare var $: any, __moduleName: string;

@Component({
    moduleId:       __moduleName,
    selector:       'sohoxi-button',
    templateUrl:    'button.html'
})

export class Button extends Control implements AfterContentInit  {

    constructor( @Inject(ElementRef) private el: ElementRef) {
        super();   
        
         //this.innerHTML = el.nativeElement.innerHTML;
    }

    @Output()
    clicked = new EventEmitter();

    @Input()
    disabled : boolean;

    @Input()
    type : string = "btn-primary";

    @Input()
    icon : string = null;

    // Used to set the correct class on the control.
    setClasses() : any {
        let classes = {
            "btn-primary": this.type === "btn-primary",
            "btn": this.type === "btn",
            "btn-tertiary": this.type === "btn-tertiary",
            "btn-icon": this.type === "btn-icon"
        }
        return classes;
    }

    onClick() { 
        this.clicked.emit(this.id);
    }

    ngAfterContentInit(): any {
        $(this.el.nativeElement).find('.button').button();
    }
}