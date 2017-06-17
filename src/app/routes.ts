// src/app/routes.ts
import {Home} from './components/home/home.component'; 

export default [
    {path: '/', component: Home, name: 'Home'},
    // Async load a component using Webpack's require with es6-promise-loader
    
];
//{path: '/about', loader: () => require('./components/about')('About'), name: 'About'}