import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TradePageComponent } from 'src/app/pages/trade-page/trade-page.component';

const routes: Routes = [
  { path: '', component: TradePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradesRoutingModule { 
}
