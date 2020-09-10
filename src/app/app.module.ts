import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
// import { HttpInterceptorService } from './service/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule

  ],
  providers: [
    // {
    // provide: HTTP_INTERCEPTORS,
    // useClass: HttpInterceptorService,
    // multi: true
    // }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
