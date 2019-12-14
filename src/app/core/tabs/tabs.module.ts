import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TabsComponent } from './tabs.component';
import { DatosGeneralesComponent } from './rues/datos-generales/datos-generales.component';
import { InformacionFinancieraComponent } from './rues/informacion-financiera/informacion-financiera.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { from } from 'rxjs';
import { DatosOrganizacionComponent } from './rues/datos-organizacion/datos-organizacion.component';
import { ActividadEconomicaComponent } from './rues/actividad-economica/actividad-economica.component';
import { InformacionComercialComponent } from './rues/informacion-comercial/informacion-comercial.component';


@NgModule({
  declarations: [
    TabsComponent,
    DatosGeneralesComponent,
    InformacionFinancieraComponent,
    DatosOrganizacionComponent,
    ActividadEconomicaComponent,
    InformacionComercialComponent,
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
