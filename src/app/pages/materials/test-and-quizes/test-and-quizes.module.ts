import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestAndQuizesComponent } from './test-and-quizes.component';
import { TestAndQuizesRoutingModule } from './test-and-quizes-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { AddModalComponent } from './add-modal/add-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    TestAndQuizesComponent,
    AddModalComponent
  ],
  imports: [
    CommonModule,
    TestAndQuizesRoutingModule,
    SharedModule,
    FormsModule, 
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class TestAndQuizesModule { }
