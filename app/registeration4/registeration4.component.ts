import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-registeration4',
  templateUrl: './registeration4.component.html',
  styleUrls: ['./registeration4.component.css']
})
export class Registeration4Component implements OnInit {

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
    if ( register === '2' ) {
      this.router.navigateByUrl('/register3');
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

  healthReport1(event) {
    console.log('inside event');
    // event.preventDefault();
    const target = event.target;
    // const errorList = [];

    const diabetes = target.querySelector('#diabetes').value;
    const heart = target.querySelector('#heart').value;
    const cancer = target.querySelector('#cancer').value;
    const jaundies = target.querySelector('#jaundies').value;
    const malaria = target.querySelector('#malaria').value;
    const btransform = target.querySelector('#blood-transform').value;
    const ptattoo = target.querySelector('#permanent-tattoo').value;
    localStorage.setItem('diabetes', diabetes);
    localStorage.setItem('heart', heart);
    localStorage.setItem('cancer', cancer);
    localStorage.setItem('jaundies', jaundies);
    localStorage.setItem('malaria', malaria);
    localStorage.setItem('blood-transform', btransform);
    localStorage.setItem('parmanent-tattoo', ptattoo);
    localStorage.setItem('register', '4');
        // if ( errorList.length === 0 ) {
          // this.Auth.requestvisit(fname, mname, lname);
        // }
  }
}
