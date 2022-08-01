import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialsListComponent } from './tutorials-list.component';

const routes: Routes = [
  {
    path: '',
    component: TutorialsListComponent,
    data: {
      breadcrumb: 'Tutorial List',
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
export class TutorialsListRoutingModule { }