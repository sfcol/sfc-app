import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/core';
import { Customer, CustomerService } from '../backend';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomersCustomersGet().subscribe((cust) => this.customers = cust);
  }

  doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

}
