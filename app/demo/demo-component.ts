import { Component } from '@angular/core';

import { TabsDemo } from './tabs-demo';
import { ButtonsDemo } from './buttons-demo';

declare var __moduleName: string;

@Component({
    moduleId:       __moduleName,
    selector:       'demo',
    templateUrl:    'demo-component.html',
    directives:     [TabsDemo, ButtonsDemo]
})

export class DemoComponent {}