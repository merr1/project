import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionOneComponent } from './question-one/question-one.component';
import { HomePageComponent } from './home-page/home-page.component';
import { QuestionTwoComponent } from './question-two/question-two.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  
  },
  {
    path: 'question-1',
    component: QuestionOneComponent,
  },
  {
    path: 'question-2',
    component: QuestionTwoComponent,
  },
  {
    path:'main',
    component:MainPageComponent,
  }
 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
