import { CourseroutingModule } from './../courserouting/courserouting.module';
import { CoursehomeComponent } from './../coursehome/coursehome.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CoursehomeComponent],
  imports: [
    CommonModule,
    CourseroutingModule
  ]
})
export class CourseModule { }
