import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TradesRoutingModule } from './trades-routing.module';
import { TradePageComponent } from 'src/app/pages/trade-page/trade-page.component';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  declarations: [
    TradePageComponent
  ],
  imports: [
    CommonModule,
    TradesRoutingModule,
    SharedModule
  ]
})
export class TradesModule {  }
