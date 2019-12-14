import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TabsComponent } from './tabs.component';
import { DatosGeneralesComponent } from './rues/datos-generales/datos-generales.component';
import { InformacionFinancieraComponent } from './rues/informacion-financiera/informacion-financiera.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    TabsComponent,
    DatosGeneralesComponent,
    InformacionFinancieraComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    TabsComponent
  ]
})
export class TabsModule { }
