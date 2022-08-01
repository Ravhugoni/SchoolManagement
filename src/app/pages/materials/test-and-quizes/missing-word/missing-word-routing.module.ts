import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissingWordComponent } from './missing-word.component';

const routes: Routes = [
  {
    path: '',
    component: MissingWordComponent,
    data: {
      breadcrumb: 'Add a missing word',
      icon: 'icofont-write',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Button',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissingWordRoutingModule { }