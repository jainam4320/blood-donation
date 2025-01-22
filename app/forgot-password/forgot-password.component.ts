import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

declare var $: any;

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private Auth: AuthService) {
    document.title = 'Life Savers | Forgot Password ';
    $('#home').removeAttr('class');
    $('#request').removeAttr('class');
    $('#donate').removeAttr('class');
    $('#about-us').removeAttr('class');
    $('#login').removeAttr('class');
   }

  ngOnInit() {
    localStorage.clear();
  }

  sendMail(event) {
    const target = event.target;
    const errorList = [];
    const email = target.querySelector('#email').value;
    // tslint:disable-next-line: triple-equals
    if ( email != '' ) {
      localStorage.setItem('alreadyLogin', '0');
      if ( errorList.length === 0 ) {
        this.Auth.alreadyLogin({ email });
      }
      localStorage.setItem('email', email);
      console.log(email);
      console.log(email);
      console.log(email);
      console.log(email);
      console.log(email);
      console.log(email);
      console.log(email);
      console.log(email);
      console.log(email);
      console.log(email);
      console.log(email);
      console.log(email);
      console.log(email);
      console.log(email);
      console.log(email);
      console.log(email);
      console.log(email);
      console.log(email);
      console.log(email);
      console.log(email);
      console.log(email);
      localStorage.setItem('forgotPage', '1');
    } else {
      event.preventDefault();
    }
  }
}
