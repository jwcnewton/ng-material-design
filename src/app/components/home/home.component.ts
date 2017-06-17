declare var componentHandler: any;

import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from 'rxjs/Observable';

export interface Item {
    id: number;
    name: string;
    description: string;
}

export interface AppStore {
    items: Item[];
    selectedItem: Item;
}


@Component({
    selector: 'home',
    providers: [],
    template: require('./template.html'),
    styles: [require('./style.scss')]
})
export class Home {
    constructor() {

    }
}

