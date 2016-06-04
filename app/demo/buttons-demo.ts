import { Component } from '@angular/core';

import { Button } from '../ngsohoxi/button';

declare var __moduleName: string;

@Component({
    moduleId:       __moduleName,
    selector:       'buttons-demo',
    templateUrl:    'buttons-demo.html',
    directives:     [Button]
})

export class ButtonsDemo {}