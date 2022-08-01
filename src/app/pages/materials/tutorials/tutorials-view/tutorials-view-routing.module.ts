import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialsViewComponent } from './tutorials-view.component';

const routes: Routes = [
  {
    path: '',
    component: TutorialsViewComponent,
    data: {
      breadcrumb: 'Tutorial View',
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
export class TutorialsViewRoutingModule { }