import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TradeInterface } from 'src/app/interfaces/trade.interface';
import { ChartDataService } from 'src/app/services/chart-data.service';

@Component({
  selector: 'app-trade-page',
  templateUrl: './trade-page.component.html',
  styleUrls: ['./trade-page.component.scss']
})
export class TradePageComponent implements OnInit {

  public tradeData$: Observable<TradeInterface | null>

  constructor(private chartDataService: ChartDataService) {
    this.tradeData$ = this.chartDataService.getData()
  }

  ngOnInit(): void {}

  public calculateData(value: TradeInterface) {
    this.chartDataService.tradeData = value
  }
}
