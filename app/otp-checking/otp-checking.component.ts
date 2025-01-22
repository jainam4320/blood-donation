import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';

declare var $: any;

@Component({
  selector: 'app-otp-checking',
  templateUrl: './otp-checking.component.html',
  styleUrls: ['./otp-checking.component.css']
})
export class OtpCheckingComponent implements OnInit {

  // otp: string = (Math.floor(10000 + Math.random() * 90000)).toString();
  otp: string;

  constructor(private Toastr: ToastrService, private router: Router, private Auth: AuthService) {
    if ( localStorage.getItem('forgotPage') === null ) {
      this.router.navigateByUrl('/forgot-password');
    } else {
      localStorage.removeItem('forgotPage');
    }
    document.title = 'Life Savers | OTP Verification';
    $('#home').removeAttr('class');
    $('#request').removeAttr('class');
    $('#donate').removeAttr('class');
    $('#about-us').removeAttr('class');
    $('#login').removeAttr('class');
   }

  ngOnInit() {
    const alreadyLogin = localStorage.getItem('alreadyLogin');
    if ( alreadyLogin === '1' ) {
      this.Toastr.success('OTP Has Been Successfully Sent To Your Mail.', 'OTP Sent');
      const email = localStorage.getItem('email');
      const errorList = [];
      const otp = (Math.floor(10000 + Math.random() * 90000)).toString();
      this.otp = otp;
      localStorage.clear();
      localStorage.setItem('email', email);
      // comment later
      localStorage.setItem('otp', otp);
      // const otp1 = this.otp;
      if ( errorList.length === 0 ) {
        this.Auth.sendMail({ email, otp });
      }
    } else {
      this.router.navigateByUrl('/register1');
    }
  }

  otpVerify(event) {
    const target = event.target;
    const otp1 = target.querySelector('#otp').value;
    // tslint:disable-next-line: triple-equals
    if ( otp1 != '' ) {
      // tslint:disable-next-line: triple-equals
      if (otp1 != this.otp) {
        this.Toastr.error('OTP Not Matched Please Try Again');
        event.preventDefault();
      } else {
        localStorage.setItem('otpPage', '1');
      }
    }
  }

}
