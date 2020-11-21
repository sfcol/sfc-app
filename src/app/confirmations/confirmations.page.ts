import {Component} from '@angular/core';

@Component({
    selector: 'app-confirmations',
    templateUrl: './confirmations.page.html',
    styleUrls: ['./confirmations.page.scss'],
})
export class ConfirmationsPage {

    constructor() { }

    ionViewDidEnter() {
        this.load();
    }

    private async load() {

    }

}
