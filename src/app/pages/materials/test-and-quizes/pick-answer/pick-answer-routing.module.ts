import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PickAnswerComponent } from './pick-answer.component';

const routes: Routes = [
  {
    path: '',
    component: PickAnswerComponent,
    data: {
      breadcrumb: 'Pick the right answer',
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
export class PickAnswerRoutingModule { }