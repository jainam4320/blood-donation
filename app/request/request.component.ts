import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';

declare var $: any;

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  public viewlist;
  constructor(private router: Router, private Auth: AuthService) {
    document.title = 'Life Savers | Emergency Request ';
    $('#home').removeAttr('class');
    $('#request').attr('class','menu-active');
    $('#donate').removeAttr('class');
    $('#about-us').removeAttr('class');
    $('#login').removeAttr('class');
  }

  ngOnInit() {
    const errorList = [];
    if ( errorList.length === 0 ) {
      this.Auth.getRequests()
      .subscribe( data => {
        this.viewlist = data;
        console.log(this.viewlist);
      });
    }
  }

  routeToGenerate(event) {
    this.router.navigateByUrl('/req-generate');
  }

}
