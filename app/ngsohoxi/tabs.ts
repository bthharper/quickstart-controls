import { Component, Input, ContentChildren, QueryList, AfterContentInit, ElementRef, Inject } from '@angular/core';

import { Tab } from './tab.ts';

declare var $: any;

@Component({
     selector: '.tab-container',
     template: `<ul class="tab-list">
                    <li class="tab" *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.is-selected]="tab.active">
                        <a href="#{{tab.id}}">{{tab.title}}</a>
                    </li>   
                </ul>
                <ng-content></ng-content>`,
     directives: [Tab]
})

export class Tabs implements AfterContentInit {
    @ContentChildren(Tab) tabs: QueryList<Tab>;
  
    constructor(@Inject(ElementRef) private el : ElementRef) {
    }

     selectTab(tab: Tab) {
         console.log(tab.id + " selected");
         this.tabs.forEach( tab => { tab.deselect() ; } );
         tab.select();
     }
     
    ngAfterContentInit() {
        console.log("ngAfterContentInit");
        
        $(this.el.nativeElement).tabs();

        // get all active tabs
        let activeTabs = this.tabs.filter((tab)=>tab.active);
  
        // if there is no active tab set, activate the first
        if(activeTabs.length === 0) {
             this.selectTab(this.tabs.first);
        }
    }
}
