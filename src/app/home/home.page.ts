import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    list = [
        {img: 'assets/images/mt1.jpeg', name: 'Tian aux Légumes'},
        {img: 'assets/images/mt2.jpeg', name: 'Tarte au thon'},
        {img: 'assets/images/mt3.jpeg', name: 'Plat principal'},
        {img: 'assets/images/mt4.jpeg', name: 'Courge spaghetti en gratin'},
        {img: 'assets/images/mt5.jpeg', name: 'Quiche lorraine'},
        {img: 'assets/images/mt6.jpeg', name: 'Madeleines'}
    ];

    constructor() {
    }

}
