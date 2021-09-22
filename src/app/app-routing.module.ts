import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './core/layouts/base-layout/base-layout.component';

const itemRoutes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./modules/trades/trades.module').then(m => m.TradesModule)
  },
];

const routes: Routes = [
  {
      path: 'trade',
      component: BaseLayoutComponent,
      children: itemRoutes,
  },
  {
    path: '',
    redirectTo: 'trade',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
