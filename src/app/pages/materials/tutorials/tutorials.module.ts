import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialsComponent } from './tutorials.component';
import { TutorialsRoutingModule } from './tutorials-routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    TutorialsComponent
  ],
  imports: [
    CommonModule,
    TutorialsRoutingModule,
    SharedModule
  ]
})
export class TutorialsModule { }
