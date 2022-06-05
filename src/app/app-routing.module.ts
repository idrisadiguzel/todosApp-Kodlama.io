import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { PostListComponent } from './components/pages/post-list/post-list.component';
import { TodosListComponent } from './components/pages/todos-list/todos-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",pathMatch:"full",component:TodosListComponent},
  {path:"todos", component:TodosListComponent},
  {path:"posts", component:PostListComponent},
  {path:"**",component:NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
