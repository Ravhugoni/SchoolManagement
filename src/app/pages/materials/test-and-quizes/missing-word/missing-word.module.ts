import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissingWordComponent } from './missing-word.component';
import { MissingWordRoutingModule } from './missing-word-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { MissingWordModalComponent } from './missing-word-modal/missing-word-modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [MissingWordComponent, MissingWordModalComponent],
  imports: [
    CommonModule,
    MissingWordRoutingModule,
    SharedModule,
    FormsModule, 
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class MissingWordModule { }
