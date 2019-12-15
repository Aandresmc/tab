import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './core/tabs/tabs.component';


export const routes: Routes = [
    {path: '', redirectTo: 'rues', pathMatch: 'full'},
    {path: 'rues', component: TabsComponent},
    {
      path: 'rues',
      loadChildren: () => import('./core/tabs/tabs.module').then(m => m.TabsModule),
    },
    {path: '**', redirectTo: 'rues', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting { }