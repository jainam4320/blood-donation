import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private Toastr: ToastrService, private Auth: AuthService, private router: Router) {
    if ( localStorage.getItem('otpPage') === null ) {
      this.router.navigateByUrl('/forgot-password');
    } else {
      localStorage.removeItem('otpPage');
    }
    document.title = 'Life Savers | Change Password ';
    $('#home').removeAttr('class');
    $('#request').removeAttr('class');
    $('#donate').removeAttr('class');
    $('#about-us').removeAttr('class');
    $('#login').removeAttr('class');
  }

  ngOnInit() {
    this.Toastr.success('OTP Matched Successfully, Enter Your New Password To Change It.');
  }

  updatePassword(event) {
    console.log('inside event');
    const target = event.target;
    const errorList = [];
    const pass = target.querySelector('#pass').value;
    const cpass = target.querySelector('#cpass').value;
    const email = localStorage.getItem('email');
    localStorage.clear();
    // tslint:disable-next-line: triple-equals
    if ( pass != '' && cpass != '' ) {
      if( pass === cpass ) {
        this.Toastr.success('Succussfully Paasswords Matched');
        if ( errorList.length === 0 ) {
          this.Auth.updatePassword({ email, pass });
        }
      } else {
        this.Toastr.error('Passwords Not Matched, Please Try Again', 'Matching Error');
        event.preventDefault();
      }
    } else {
      event.preventDefault();
    }
  }
}
