import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../components/components.module';
import { CustomersPageRoutingModule } from './customers-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CustomersPageRoutingModule
  ],
  declarations: [CustomersPageModule]
})
export class CustomersPageModule {}
