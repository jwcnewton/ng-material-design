/// src/app/index.ts
import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {FORM_PROVIDERS} from '@angular/common';

import '../style/app.scss';
import routes from './routes';

@Component({
    selector: 'app', // <app></app>
    providers: [...FORM_PROVIDERS],
    directives: [...ROUTER_DIRECTIVES],
    pipes: [],
    styles: [require('./style.scss')],
    template: require('./template.html')
})

@RouteConfig(routes)

export class App {
    url: string = '//github.com/cmelion/generator-ng2-webpack';

}
