import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialsListRoutingModule } from './tutorials-list-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TutorialsListComponent } from './tutorials-list.component';
import { VgCoreModule } from 'ngx-videogular';
import { TutorialsModalComponent } from './tutorials-modal/tutorials-modal.component';

@NgModule({
  declarations: [TutorialsListComponent, TutorialsModalComponent],
  imports: [
    CommonModule,
    TutorialsListRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,VgCoreModule
  ]
})
export class TutorialsListModule { }
