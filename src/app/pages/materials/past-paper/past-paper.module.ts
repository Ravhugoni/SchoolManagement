import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastPaperRoutingModule } from './past-paper-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { PastPaperComponent } from './past-paper.component';



@NgModule({
  declarations: [PastPaperComponent],
  imports: [
    CommonModule,
    PastPaperRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ]
})
export class PastPaperModule { }
