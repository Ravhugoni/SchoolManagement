import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list.component';
import { StudentListRoutingModule } from './student-list-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [StudentListComponent],
  imports: [
    CommonModule,
    StudentListRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ]
})
export class StudentListModule { }
