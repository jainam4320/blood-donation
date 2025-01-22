import { Component, OnInit } from '@angular/core';
// import {Title} from '@angular/platform/browser';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  constructor() {
    document.title = 'Life Savers | Home';
    $('#home').attr('class', 'menu-active');
    $('#request').removeAttr('class');
    $('#donate').removeAttr('class');
    $('#about-us').removeAttr('class');
    $('#login').removeAttr('class');
  }

  ngOnInit() {
  }
}
