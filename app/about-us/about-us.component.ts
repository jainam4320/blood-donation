import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() {
    document.title = 'Life Savers | About-Us ';
    $('#home').removeAttr('class');
    $('#request').removeAttr('class');
    $('#donate').removeAttr('class');
    $('#login').removeAttr('class');
    $('#about-us').attr('class','menu-active');
   }

  ngOnInit() {
  }

}
