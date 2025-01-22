import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

declare var $: any;

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  public viewlist2;
  constructor(private Auth: AuthService) {
    document.title = 'Life Savers | Donate ';
    $('#home').removeAttr('class');
    $('#request').removeAttr('class');
    $('#donate').attr('class','menu-active');
    $('#about-us').removeAttr('class');
    $('#login').removeAttr('class');
  }

  ngOnInit() {
    const errorList = [];
    if ( errorList.length === 0 ) {
      this.Auth.getUserInfo()
      .subscribe( data => {
        this.viewlist2 = data;
        console.log(this.viewlist2);
      });
    }
  }

}
