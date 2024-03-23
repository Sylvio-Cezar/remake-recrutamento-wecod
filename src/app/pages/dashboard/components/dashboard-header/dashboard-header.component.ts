import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {

  logo:string = './assets/wecod_logo.png'
  icon:string = './assets/wecod_icone.png'

  constructor() { }

  ngOnInit(): void {
  }

}
