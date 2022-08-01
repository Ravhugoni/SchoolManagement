import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PutInCorrectComponent } from './put-in-correct.component';
import { SharedModule } from '../../../../shared/shared.module';
import { PutInCorrectRoutingModule } from './put-in-correct-routing.module';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    PutInCorrectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PutInCorrectRoutingModule, DataTablesModule
  ]
})
export class PutInCorrectModule { }
