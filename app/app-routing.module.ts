import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Registeration1Component } from './registeration1/registeration1.component';
import { Registeration2Component } from './registeration2/registeration2.component';
import { Registeration3Component } from './registeration3/registeration3.component';
import { Registeration4Component } from './registeration4/registeration4.component';
import { Registeration5Component } from './registeration5/registeration5.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RequestComponent } from './request/request.component';
import { DonateComponent } from './donate/donate.component';
import { OtpCheckingComponent } from './otp-checking/otp-checking.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RequestGenerateComponent } from './request-generate/request-generate.component';

const appRoutes: Routes = [
    { path: 'home' , component : HomeComponent },
    { path: 'login' , component : LoginComponent },
    { path: 'register1' , component : Registeration1Component },
    { path: 'register2' , component : Registeration2Component },
    // canActivate: [AuthGuard]
    { path: 'register3' , component : Registeration3Component },
    { path: 'register4' , component : Registeration4Component },
    { path: 'register5' , component : Registeration5Component },
    { path: 'About-Us' , component : AboutUsComponent },
    { path: 'change-password' , component : ChangePasswordComponent },
    { path: 'forgot-password' , component : ForgotPasswordComponent },
    { path: 'request' , component : RequestComponent },
    { path: 'donate' , component : DonateComponent },
    { path: 'otp-checking' , component : OtpCheckingComponent },
    { path: 'user-login' , component : UserLoginComponent },
    { path: 'req-generate' , component : RequestGenerateComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**' , component : PageNotFoundComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
  })

  export class AppRoutingModule {}