import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickAnswerComponent } from './pick-answer.component';
import { SharedModule } from '../../../../shared/shared.module';
import { PickAnswerRoutingModule } from './pick-answer-routing.module';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [PickAnswerComponent],
  imports: [
    CommonModule,
    SharedModule,
    PickAnswerRoutingModule,
    DataTablesModule
  ]
})
export class PickAnswerModule { }
