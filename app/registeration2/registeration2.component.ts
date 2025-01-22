import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-registeration2',
  templateUrl: './registeration2.component.html',
  styleUrls: ['./registeration2.component.css']
})
export class Registeration2Component implements OnInit {

  constructor(private Toastr: ToastrService, private router: Router) {
    if ( localStorage.getItem('userlogin') != null ) {
      this.router.navigateByUrl('/user-login');
    }
    // tslint:disable-next-line: triple-equals
    if ( localStorage.getItem('register') != '1' ) {
      this.router.navigateByUrl('/register1');
    }
    if (localStorage.getItem('alreadyLogin') === '1') {
      console.log('Already Registered User ');
      this.router.navigateByUrl('/login');
    }
    document.title = 'Life Savers | Registration ';
    $('#home').removeAttr('class');
    $('#request').removeAttr('class');
    $('#donate').removeAttr('class');
    $('#about-us').removeAttr('class');
    $('#login').removeAttr('class');
   }

  ngOnInit() {
  }

  healthDetails(event) {
    console.log('inside event');
    const target = event.target;
    const bgroup = target.querySelector('#blood-group').value;
    const weight: number = target.querySelector('#weight').value;
    const height: number = target.querySelector('#height').value;
    const ddate = target.querySelector('#donate-date').value;
    const hemo: number = target.querySelector('#hemo').value;
    const age: number = target.querySelector('#age').value;
    // tslint:disable-next-line: triple-equals
    if (hemo.toString() != '' && weight.toString() != '' && height.toString() != '' && ddate != '' &&  age.toString() != '') {
      console.log('Parameters Pass The Conditions');
      if ( age >= 18 ) {
        this.Toastr.success('Your Age Is Available For Registration', 'Age Eligible');
        localStorage.setItem('blood-group', bgroup);
        localStorage.setItem('weight', weight.toString());
        localStorage.setItem('height', height.toString());
        localStorage.setItem('donate-date', ddate);
        localStorage.setItem('hemoglobin', hemo.toString());
        localStorage.setItem('age', age.toString());
        localStorage.setItem('register', '2');
      } else {
        this.Toastr.error('Your Age Must Be Greater Than 18 For Registration', 'Age Eligiblity Error');
        event.preventDefault();
      }
    } else {
      event.preventDefault();
    }
  }

}
