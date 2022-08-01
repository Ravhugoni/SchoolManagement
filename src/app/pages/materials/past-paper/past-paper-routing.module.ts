import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PastPaperComponent } from './past-paper.component';

const routes: Routes = [
  {
    path: '',
    component: PastPaperComponent,
    data: {
      breadcrumb: 'Past Paper List',
      icon: 'icofont-file-alt bg-c-green',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - About Us',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PastPaperRoutingModule { }
