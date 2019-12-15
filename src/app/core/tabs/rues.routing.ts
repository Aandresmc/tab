import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';
import { DatosGeneralesComponent } from './rues/datos-generales/datos-generales.component';
import { InformacionFinancieraComponent } from './rues/informacion-financiera/informacion-financiera.component';
import { DatosOrganizacionComponent } from './rues/datos-organizacion/datos-organizacion.component';
import { ActividadEconomicaComponent } from './rues/actividad-economica/actividad-economica.component';
import { InformacionComercialComponent } from './rues/informacion-comercial/informacion-comercial.component';

const routesTabs: Routes = [
  {
    path: 'rues',
    component: TabsComponent,
    children: [
      { path: '' , component: DatosGeneralesComponent },
      { path: 'datos-generales', component: DatosGeneralesComponent },
      { path: 'informacion-financiera', component: InformacionFinancieraComponent },
      { path: 'datos-organizacion', component: DatosOrganizacionComponent },
      { path: 'actividad-economica', component: ActividadEconomicaComponent },
      { path: 'informacion-comercial', component: InformacionComercialComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routesTabs)
  ],
  exports: [
    RouterModule
  ]
})
export class RuesRouting { }