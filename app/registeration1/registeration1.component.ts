import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-registeration1',
  templateUrl: './registeration1.component.html',
  styleUrls: ['./registeration1.component.css']
})
export class Registeration1Component implements OnInit {

  constructor(private Toastr: ToastrService, private Auth: AuthService, private router: Router) {
    if ( localStorage.getItem('userlogin') != null ) {
      this.router.navigateByUrl('/user-login');
    }
    document.title = 'Life Savers | Registration ';
    $('#home').removeAttr('class');
    $('#request').removeAttr('class');
    $('#donate').removeAttr('class');
    $('#about-us').removeAttr('class');
    $('#login').removeAttr('class');
   }

  ngOnInit() {
    const login1 = localStorage.getItem('alreadyLogin');
    if ( login1 === '0' ) {
      this.Toastr.info('User Not Registered, So Redirected To Registration Page Page.');
    }
    localStorage.clear();
  }
  
  personalInfo(event) {
    console.log('inside event');
    const target = event.target;
    const errorList = [];

    const fname = target.querySelector('#fname').value;
    const mname = target.querySelector('#mname').value;
    const lname = target.querySelector('#lname').value;
    const email = target.querySelector('#email').value;
    const gender = target.querySelector('#gender').value;
    const dob = target.querySelector('#dob').value;
    const pass = target.querySelector('#pass').value;
    const cpass = target.querySelector('#cpass').value;
    // tslint:disable-next-line: triple-equals
    if (fname != '' && mname != '' && lname != '' && pass != '' && cpass != '' &&  dob != '' && email != '') {
      if ( pass === cpass) {
        this.Toastr.success('Passwords Matched', 'Match Success');
        localStorage.clear();
        localStorage.setItem('alreadyLogin', '0');
        if ( errorList.length === 0 ) {
          this.Auth.alreadyLogin({ email });
        }
        localStorage.setItem('fname', fname);
        localStorage.setItem('mname', mname);
        localStorage.setItem('lname', lname);
        localStorage.setItem('email', email);
        localStorage.setItem('pass', pass);
        localStorage.setItem('cpass', cpass);
        localStorage.setItem('gender', gender);
        localStorage.setItem('dob', dob);
        localStorage.setItem('register', '1');
      } else {
        this.Toastr.error('Passwords Not Matched', 'Matching Error');
        event.preventDefault();
      }
    } else {
      event.preventDefault();
    }
  }
}
