import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayPost } from './components/display-post/display-post';

const routes: Routes = [
  { path: 'post', component: DisplayPost },
  { path: '', redirectTo: '/post', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
