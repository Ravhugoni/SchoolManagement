import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialsViewComponent } from './tutorials-view.component';
import { TutorialsViewRoutingModule } from './tutorials-view-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { VgCoreModule } from 'ngx-videogular';



@NgModule({
  declarations: [
    TutorialsViewComponent
  ],
  imports: [
    CommonModule,
    TutorialsViewRoutingModule,
    SharedModule,VgCoreModule
  ]
})
export class TutorialsViewModule { }
