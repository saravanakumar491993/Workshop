import { AnimtestComponent } from './view/animation/animtest/animtest.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyTestComponent } from './view/my-test/my-test.component';
import { StudentformComponent } from './view/studentform/studentform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ObservablerxjxComponent } from './view/observable-test/observablerxjx/observablerxjx.component';
import { ApproutingModule } from './approuting/approuting.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MyTestComponent,
    StudentformComponent,
    ObservablerxjxComponent,
    AnimtestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ApproutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
