import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-registeration5',
  templateUrl: './registeration5.component.html',
  styleUrls: ['./registeration5.component.css']
})
export class Registeration5Component implements OnInit {

  public gen1 = localStorage.getItem('gender');
  constructor(private Auth: AuthService, private router: Router) {
    if ( localStorage.getItem('userlogin') != null ) {
      this.router.navigateByUrl('/user-login');
    }
    const register = localStorage.getItem('register');
    if ( register === null ) {
      this.router.navigateByUrl('/register1');
    }
    if ( register === '1' ) {
      this.router.navigateByUrl('/register2');
    }
    if ( register === '2' ) {
      this.router.navigateByUrl('/register3');
    }
    if ( register === '3' ) {
      this.router.navigateByUrl('/register4');
    }
    document.title = 'Life Savers | Registration';
    $('#home').removeAttr('class');
    $('#request').removeAttr('class');
    $('#donate').removeAttr('class');
    $('#about-us').removeAttr('class');
    $('#login').removeAttr('class');
  }

  ngOnInit() {
  }

  healthReport2(event) {
    console.log('inside event');
    // event.preventDefault();
    const target = event.target;
    const errorList = [];
    // Registration 5 Data
    var pragnancy;
    if(this.gen1 === 'Female') {
      pragnancy = target.querySelector('#pragnancy').value;
    } else {
      pragnancy = 'No';
    }
    const hepatitisb = target.querySelector('#hepatitis-b').value;
    const tb = target.querySelector('#tb').value;
    const cjd = target.querySelector('#cjd').value;
    const hivaids = target.querySelector('#hiv-aids').value;
    const ivdrug = target.querySelector('#iv-drug').value;
    const odiseases = target.querySelector('#other-disease').value;
    // Registration 1 Data
    const fname = localStorage.getItem('fname');
    const mname = localStorage.getItem('mname');
    const lname = localStorage.getItem('lname');
    const email = localStorage.getItem('email');
    const gender = localStorage.getItem('gender');
    const dob = localStorage.getItem('dob');
    const pass = localStorage.getItem('pass');
    // Registration 2 Data
    const bgroup = localStorage.getItem('blood-group');
    const weight = localStorage.getItem('weight');
    const height = localStorage.getItem('height');
    const ddate = localStorage.getItem('donate-date');
    const hemo = localStorage.getItem('hemoglobin');
    const age = localStorage.getItem('age');
    // Registration 3 Data
    const flat = localStorage.getItem('flat');
    const street = localStorage.getItem('street');
    const city = localStorage.getItem('city');
    const state = localStorage.getItem('state');
    const country = localStorage.getItem('country');
    const pincode = localStorage.getItem('pincode');
    const connum = localStorage.getItem('connum');
    // Registration 4 Data
    const diabetes = localStorage.getItem('diabetes');
    const heart = localStorage.getItem('heart');
    const cancer = localStorage.getItem('cancer');
    const jaundies = localStorage.getItem('jaundies');
    const malaria = localStorage.getItem('malaria');
    const btransform = localStorage.getItem('blood-transform');
    const ptattoo = localStorage.getItem('parmanent-tattoo');
    localStorage.clear();
    if ( errorList.length === 0 ) {
      // tslint:disable-next-line: max-line-length
      this.Auth.registerUser({ fname, mname, lname, gender, dob, pass, bgroup, weight, height, ddate, hemo, age, flat, street, city, state, country, pincode, connum, email, diabetes, heart, cancer, jaundies, malaria, btransform, ptattoo, pragnancy, hepatitisb, tb, cjd, hivaids, ivdrug, odiseases });
    }
  }

}
