import { Component } from '@angular/core';

import { Tabs } from '../ngsohoxi/tabs';
import { Tab } from '../ngsohoxi/tab';

declare var __moduleName: string;

@Component({
    moduleId:       __moduleName,
    selector:       'tabs-demo',
    templateUrl:    'tabs-demo.html',
    directives: [Tabs, Tab]
})

export class TabsDemo {}