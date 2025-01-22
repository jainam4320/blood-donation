import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { Registeration1Component } from './registeration1/registeration1.component';
import { Registeration2Component } from './registeration2/registeration2.component';
import { Registeration3Component } from './registeration3/registeration3.component';
import { Registeration4Component } from './registeration4/registeration4.component';
import { Registeration5Component } from './registeration5/registeration5.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RequestComponent } from './request/request.component';
import { DonateComponent } from './donate/donate.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { OtpCheckingComponent } from './otp-checking/otp-checking.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FilterComponent } from './filter/filter.component';
import { RequestGenerateComponent } from './request-generate/request-generate.component';
import { FilterResultComponent } from './filter-result/filter-result.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    Registeration1Component,
    Registeration2Component,
    Registeration3Component,
    Registeration4Component,
    Registeration5Component,
    AboutUsComponent,
    PageNotFoundComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    RequestComponent,
    DonateComponent,
    FooterComponent,
    OtpCheckingComponent,
    UserLoginComponent,
    FilterComponent,
    RequestGenerateComponent,
    FilterResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
