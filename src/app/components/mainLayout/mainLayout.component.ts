import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-mainLayout',
  templateUrl: './mainLayout.component.html',
  styleUrls: ['./mainLayout.component.css'] ,
  imports:[SidebarComponent,RouterOutlet]
  ,standalone:true
  
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
