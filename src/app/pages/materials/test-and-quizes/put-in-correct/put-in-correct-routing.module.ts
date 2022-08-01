import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PutInCorrectComponent } from './put-in-correct.component';

const routes: Routes = [
  {
    path: '',
    component: PutInCorrectComponent,
    data: {
      breadcrumb: 'Pit in correct order',
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
export class PutInCorrectRoutingModule { }