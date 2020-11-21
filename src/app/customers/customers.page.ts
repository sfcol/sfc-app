import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Customer, CustomerService } from '../backend';
import { SendPage } from '../send/send.page';

declare var navigator: any;

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  customers: Customer[];

  constructor(private modalCtrl: ModalController, private customerService: CustomerService, private toastController: ToastController) {
  }

  ngOnInit() {
    this.customerService.getCustomersCustomersGet().subscribe(data => this.customers = data);
  }

  delete() {

  }

  async send(id: number) {
    const modal = await this.modalCtrl.create({
      component: SendPage,
      componentProps: {
        id
      }
    });
    modal.onDidDismiss().then(event => {
      this.toastController.create(event.data).then(toast => toast.present());
    });
    return await modal.present();
  }

  pick() {
    navigator.contacts.pickContact((contact) => {
      console.log('The following contact has been selected:' + JSON.stringify(contact));
      alert(JSON.stringify(contact));
    }, (err) => {
      console.log('Error: ' + err);
    });
  }

}
