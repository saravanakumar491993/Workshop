import { CoursehomeComponent } from './../view/lazyload/course/coursehome/coursehome.component';
import { UploadViewComponent } from './../view/upload/upload-view/upload-view.component';
import { AnimtestComponent } from './../view/animation/animtest/animtest.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { StudentformComponent } from '../view/studentform/studentform.component';
import { ObservablerxjxComponent } from '../view/observable-test/observablerxjx/observablerxjx.component';
import { InterceptorTestComponent } from '../view/interceptor-test/interceptor-test.component';


const routes: Routes = [
  { path: 'intercept', component: InterceptorTestComponent },
  { path: 'upload', component: UploadViewComponent },
  { path: 'studentform', component: StudentformComponent },
  { path: 'anim', component: AnimtestComponent },
  { path: 'observable', component: ObservablerxjxComponent },
  { path: 'course', loadChildren: () => import('../view/lazyload/course/course/course.module').then(m => m.CourseModule) },
  //{ path: 'course', component: CoursehomeComponent },
  { path: '', redirectTo: '/intercept', pathMatch: "full" },
  { path: '**', component: StudentformComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class ApproutingModule { }
