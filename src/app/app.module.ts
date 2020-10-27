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
import { HttpClientModule } from '@angular/common/http';
import { InterceptorTestComponent } from './view/interceptor-test/interceptor-test.component';
import { httpInterceptorProviders } from './interceptor/interceptorprovider';
import { UploadViewComponent } from './view/upload/upload-view/upload-view.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MyTestComponent,
    StudentformComponent,
    ObservablerxjxComponent,
    AnimtestComponent,
    InterceptorTestComponent,
    UploadViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ApproutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
