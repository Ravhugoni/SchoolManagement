import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecordAudioComponent } from './record-audio.component';

const routes: Routes = [
  {
    path: '',
    component: RecordAudioComponent,
    data: {
      breadcrumb: 'Record audio answer',
      icon: 'icofont-video-alt bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Button',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordAudioRoutingModule { }