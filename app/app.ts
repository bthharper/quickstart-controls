import { Component, AfterContentInit, ElementRef, Inject } from '@angular/core';

import { DemoComponent } from './demo/demo-component';
import { Svg } from './ngsohoxi/svg';

declare var $: any, __moduleName: string;

@Component({
    moduleId: __moduleName,
    selector: 'my-app',
    templateUrl: 'app.html',
    directives: [DemoComponent, Svg]
})
export class App implements AfterContentInit {
    name: string;

    constructor( @Inject(ElementRef) private el: ElementRef) {
        this.name = 'Angular2';
    }

    ngAfterContentInit(): any {
        $(this.el.nativeElement).initialize('en-US');
    }
}
