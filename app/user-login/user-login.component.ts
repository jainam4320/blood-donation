import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {AuthService} from '../auth.service';

declare var $: any;

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public viewlist1;
  public email;
  constructor(private router: Router, private Toastr: ToastrService, private Auth: AuthService) {
    if ( localStorage.getItem('userlogin') === '0' || localStorage.getItem('userlogin') === null ) {
      this.router.navigateByUrl('/login');
    } else {
      this.Toastr.success('Logged In Successfully');
    }
    if ( localStorage.getItem('newRegister') != null ) {
      if ( localStorage.getItem('newRegister') === '1' ) {
        this.Toastr.success('New Blood Request Successfully Registered.', 'Registration Success');
      } else {
        this.Toastr.error('New Blood Request Registration Failed.', 'Registration Fail');
      }
      localStorage.removeItem('newRegister');
    }
    document.title = 'Life Savers | User Details ';
    $('#home').removeAttr('class');
    $('#request').removeAttr('class');
    $('#donate').removeAttr('class');
    $('#about-us').removeAttr('class');
    $('#login').attr('class', 'menu-active');
  }

  ngOnInit() {
    const errorList = [];
    this.email = localStorage.getItem('email');
    if ( errorList.length === 0 ) {
      this.Auth.getUserInfo()
      .subscribe( data => {
        this.viewlist1 = data;
        console.log(this.viewlist1);
      });
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
