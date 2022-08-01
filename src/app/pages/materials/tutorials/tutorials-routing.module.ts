import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Tutorials',
      icon: 'icofont-user bg-c-green',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - About Us',
      status: false
    },
    children: [
        {
          path: 'tutorials-list',
          loadChildren: () => import('./tutorials-list/tutorials-list.module').then(m => m.TutorialsListModule)
        },
        {
            path: 'tutorials-view',
            loadChildren: () => import('./tutorials-view/tutorials-view.module').then(m => m.TutorialsViewModule)
          }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialsRoutingModule { }