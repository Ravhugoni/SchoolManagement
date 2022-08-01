import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Test & Quizes',
      icon: 'icofont-user bg-c-green',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - About Us',
      status: false
    },
    children: [
        {
          path: 'missing-word',
          loadChildren: () => import('./missing-word/missing-word.module').then(m => m.MissingWordModule)
        },
        {
          path: 'pick-answer',
          loadChildren: () => import('./pick-answer/pick-answer.module').then(m => m.PickAnswerModule)
        },
        {
          path: 'put-in-correct',
          loadChildren: () => import('./put-in-correct/put-in-correct.module').then(m => m.PutInCorrectModule)
        },
        {
          path: 'record-audio',
          loadChildren: () => import('./record-audio/record-audio.module').then(m => m.RecordAudioModule)
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestAndQuizesRoutingModule { }