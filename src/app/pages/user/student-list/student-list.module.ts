import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list.component';
import { StudentListRoutingModule } from './student-list-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { StudentModalComponent } from './student-modal/student-modal.component';



@NgModule({
  declarations: [StudentListComponent, StudentModalComponent],
  imports: [
    CommonModule,
    StudentListRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    ReactiveFormsModule
  ]
})
export class StudentListModule { }
