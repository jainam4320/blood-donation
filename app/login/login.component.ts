import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Toastr: ToastrService, private Auth: AuthService, private router: Router) {
    if ( localStorage.getItem('userlogin') === '1' ) {
      this.router.navigateByUrl('/user-login');
    }
    document.title = 'Life Savers | Login';
    $('#home').removeAttr('class');
    $('#request').removeAttr('class');
    $('#donate').removeAttr('class');
    $('#about-us').removeAttr('class');
    $('#login').attr('class', 'menu-active');
  }

  ngOnInit() {
    if ( localStorage.getItem('userlogin') === '0' ) {
      this.Toastr.error('User Id Or Password Is Incorrect, Please Try Again.', 'Login Failed');
    }
    if (localStorage.getItem('loginRequired') === '1') {
      this.Toastr.info('User Needs To Login To Access This Page.', 'Login Needed');
    }
    if (localStorage.getItem('alreadyLogin') === '1') {
      this.Toastr.info('User Already Registered, So Redirected To Login Page.');
    }
    // const update = localStorage.getItem('update');
    if (localStorage.getItem('update') === '1') {
      this.Toastr.info('Password Changed Seccessfully, So Redirected To Login Page.');
    }
    if ( localStorage.getItem('registernew') === '1' ) {
      this.Toastr.success('New User Registered Successfully.', 'Registration Succuss');
    }
    localStorage.clear();
  }

  loginUser(event) {
    console.log('inside event');
    const target = event.target;
    const errorList = [];
    const email = target.querySelector('#email').value;
    const pass = target.querySelector('#pass').value;
    // tslint:disable-next-line: triple-equals
    if ( email != '' && pass != '' ) {
      if ( errorList.length === 0 ) {
        this.Auth.userLogin({ email, pass});
      }
      console.log('Hello Hello Hello Hekllo Hello ');
      console.log('Hello Hello Hello Hekllo Hello ');
      console.log('Hello Hello Hello Hekllo Hello ');
      console.log('Hello Hello Hello Hekllo Hello ');
      console.log('Hello Hello Hello Hekllo Hello ');
      console.log('Hello Hello Hello Hekllo Hello ');
      console.log('Hello Hello Hello Hekllo Hello ');
      console.log('Hello Hello Hello Hekllo Hello ');
      console.log('Hello Hello Hello Hekllo Hello ');
      console.log('Hello Hello Hello Hekllo Hello ');
      console.log('Hello Hello Hello Hekllo Hello ');
      console.log('Hello Hello Hello Hekllo Hello ');
      console.log('Hello Hello Hello Hekllo Hello ');
      console.log('Hello Hello Hello Hekllo Hello ');
      console.log('Hello Hello Hello Hekllo Hello ');
      console.log('Hello Hello Hello Hekllo Hello ');
      console.log('Hello Hello Hello Hekllo Hello ');
      console.log('Hello Hello Hello Hekllo Hello ');
      console.log('Hello Hello Hello Hekllo Hello ');
      console.log('Hello Hello Hello Hekllo Hello ');
      console.log('Hello Hello Hello Hekllo Hello ');
      console.log('Hello Hello Hello Hekllo Hello ');
      console.log('Hello Hello Hello Hekllo Hello ');
      // localStorage.setItem('email', email);
    } else {
      event.preventDefault();
    }
  }

}
