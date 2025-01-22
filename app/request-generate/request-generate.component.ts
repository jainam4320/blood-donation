import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';

declare var $: any;

@Component({
  selector: 'app-request-generate',
  templateUrl: './request-generate.component.html',
  styleUrls: ['./request-generate.component.css']
})
export class RequestGenerateComponent implements OnInit {

  constructor(private router: Router, private Auth: AuthService) {
    if ( localStorage.getItem('userlogin') === '0' || localStorage.getItem('userlogin') === null ) {
      localStorage.setItem('loginRequired', '1');
      this.router.navigateByUrl('/login');
    }
    document.title = 'Life Savers | Generate Request ';
    $('#home').removeAttr('class');
    $('#request').attr('class','menu-active');
    $('#donate').removeAttr('class');
    $('#about-us').removeAttr('class');
    $('#login').removeAttr('class');
   }

  ngOnInit() {
  }

  requestRegister(event) {
    console.log('inside event');
    const target = event.target;
    const errorList = [];
    const pname = target.querySelector('#pname').value;
    const gender = target.querySelector('#gender').value;
    const bgroup = target.querySelector('#blood-group').value;
    const bags = target.querySelector('#bags').value;
    const hname = target.querySelector('#hname').value;
    const email = target.querySelector('#email').value;
    const connum = target.querySelector('#connum').value;
    const city = target.querySelector('#city').value;
    const address = target.querySelector('#address').value;
    // tslint:disable-next-line: max-line-length && tslint:disable-next-line: triple-equals
    if ( pname != '' && gender != '' && bgroup != '' && bags != '' && hname != '' && email != '' && connum != '' && city != '' && address != '' ) {
      if ( errorList.length === 0 ) {
        this.Auth.newRequest({ pname, gender, bgroup, bags, hname, email, connum, city, address });
      }
    } else {
      event.preventDefault();
    }
  }

}
