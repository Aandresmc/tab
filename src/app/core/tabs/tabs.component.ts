import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  tabs = [
    {route:'datos-generales', title:'Datos Generales', icon:'account_circle'},
    {route:'informacion-financiera', title:'Información Financiera', icon:'account_balance_wallet'},
    {route:'datos-organizacion', title:'Datos de la Organización', icon:'home_work'},
    {route:'actividad-economica', title:'Actividad Económica', icon:'store'},
    {route:'informacion-comercial', title:'Información Comercial', icon:'account_balance'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
