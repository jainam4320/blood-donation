import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-registeration3',
  templateUrl: './registeration3.component.html',
  styleUrls: ['./registeration3.component.css']
})
export class Registeration3Component implements OnInit {

  constructor(private router: Router) {
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
    document.title = 'Life Savers | Registration ';
    $('#home').removeAttr('class');
    $('#request').removeAttr('class');
    $('#donate').removeAttr('class');
    $('#about-us').removeAttr('class');
    $('#login').removeAttr('class');
  }

  ngOnInit() {
  }

  contactInfo(event) {
    console.log('inside event');
    const target = event.target;
    const flat = target.querySelector('#flat').value;
    const street = target.querySelector('#street').value;
    const city = target.querySelector('#city').value;
    const state = target.querySelector('#state').value;
    const country = target.querySelector('#country').value;
    const pincode = target.querySelector('#pincode').value;
    const connum = target.querySelector('#con-num').value;
    // tslint:disable-next-line: triple-equals
    if (flat != '' && street != '' && city != '' && state != '' &&  country != '' && pincode != '' && connum != '' ) {
      localStorage.setItem('flat', flat);
      localStorage.setItem('street', street);
      localStorage.setItem('city', city);
      localStorage.setItem('state', state);
      localStorage.setItem('country', country);
      localStorage.setItem('pincode', pincode);
      localStorage.setItem('connum', connum);
      localStorage.setItem('register', '3');
    } else {
      event.preventDefault();
    }
  }

}
