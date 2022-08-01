import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordAudioComponent } from './record-audio.component';
import { SharedModule } from '../../../../shared/shared.module';
import { RecordAudioRoutingModule } from './record-audio-routing.module';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [RecordAudioComponent],
  imports: [
    CommonModule,
    SharedModule,
    RecordAudioRoutingModule, DataTablesModule
  ]
})
export class RecordAudioModule { }
