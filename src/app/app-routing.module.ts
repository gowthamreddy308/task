import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotebookComponent } from './notebook/notebook.component';
import { ClassbookComponent } from './classbook/classbook.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { CodeComponent } from './code/code.component';


const routes: Routes = [
  {path: 'notebook' ,component:NotebookComponent  },
  {path: 'classbook',component:ClassbookComponent},
  {path:'signup', component:SignupComponent},
  {path:'', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'task', component:TasksComponent},
  {path:'post', component:PostsComponent},
  {path:'album', component:AlbumsComponent},
  {path:'code', component:CodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
