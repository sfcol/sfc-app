import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import { UUID } from 'angular2-uuid';
import * as moment from 'moment';


@Component({
    selector: 'app-send',
    templateUrl: './send.page.html',
    styleUrls: ['./send.page.scss'],
})
export class SendPage implements OnInit {

    @Input() id: string;

    constructor(private modalCtrl: ModalController) {
    }

    ngOnInit() {
    }

    close() {
        this.modalCtrl.dismiss({message: 'Unfinished', duration: 2000, color: 'danger'});
    }

    submit() {
        this.modalCtrl.dismiss({message: 'Successfully submitted!', duration: 2000, color: 'success'});
    }
}
