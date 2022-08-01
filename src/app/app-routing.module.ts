import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, 
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard-default/dashboard-default.module').then(m => m.DashboardDefaultModule)
      }, 
      {
        path: 'basic',
        loadChildren: () => import('./pages/ui-elements/basic/basic.module').then(m => m.BasicModule)
      }, 
      {
        path: 'notifications',
        loadChildren: () => import('./pages/ui-elements/advance/notifications/notifications.module').then(m => m.NotificationsModule)
      }, 
      {
        path: 'bootstrap-table',
        loadChildren: () => import('./pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module').then(m => m.BasicBootstrapModule),
      }, 
      {
        path: 'map',
        loadChildren: () => import('./pages/map/google-map/google-map.module').then(m => m.GoogleMapModule),
      }, 
      {
        path: 'user',
        loadChildren: () => import('./pages/user/profile/profile.module').then(m => m.ProfileModule)
      }, 
      {
        path: 'Students',
        loadChildren: () => import('./pages/user/student-list/student-list.module').then(m => m.StudentListModule)
      },
      {
        path: 'past-paper',
        loadChildren: () => import('./pages/materials/past-paper/past-paper.module').then(m => m.PastPaperModule)
      }, 
      {
        path: 'books',
        loadChildren: () => import('./pages/materials/books/books.module').then(m => m.BooksModule)
      },
      {
        path: 'tutorials',
        loadChildren: () => import('./pages/materials/tutorials/tutorials.module').then(m => m.TutorialsModule)
      },
      {
        path: 'test-and-quizes',
        loadChildren: () => import('./pages/materials/test-and-quizes/test-and-quizes.module').then(m => m.TestAndQuizesModule)
      },
      {
        path: 'simple-page',
        loadChildren: () => import('./pages/simple-page/simple-page.module').then(m => m.SimplePageModule)
      }

    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
