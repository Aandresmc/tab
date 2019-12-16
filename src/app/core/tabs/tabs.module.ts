import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { TabsComponent } from './tabs.component';
import { DatosGeneralesComponent } from './rues/datos-generales/datos-generales.component';
import { InformacionFinancieraComponent } from './rues/informacion-financiera/informacion-financiera.component';
import { MaterialModule } from '../../shared/material.module';
import { DatosOrganizacionComponent } from './rues/datos-organizacion/datos-organizacion.component';
import { ActividadEconomicaComponent } from './rues/actividad-economica/actividad-economica.component';
import { InformacionComercialComponent } from './rues/informacion-comercial/informacion-comercial.component';
import { RuesRouting } from './rues.routing';


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
    MaterialModule,
    RuesRouting
  ],
  exports:[
    TabsComponent
  ],
})
export class TabsModule { }
