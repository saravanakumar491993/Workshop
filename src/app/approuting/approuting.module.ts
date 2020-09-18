import { AnimtestComponent } from './../view/animation/animtest/animtest.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { StudentformComponent } from '../view/studentform/studentform.component';
import { ObservablerxjxComponent } from '../view/observable-test/observablerxjx/observablerxjx.component';


const routes: Routes = [
  { path: '', redirectTo: '/course', pathMatch: "full"},
  { path: 'studentform', component: StudentformComponent },
  { path: 'anim', component: AnimtestComponent },
  { path: 'observable', component: ObservablerxjxComponent },
  { path: 'course', loadChildren: () => import('../view/lazyload/course/course/course.module').then(m => m.CourseModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class ApproutingModule { }
