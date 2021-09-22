import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { isEmpty } from 'lodash';
import { Color, Label } from 'ng2-charts';
import { Observable, of } from 'rxjs';
import { TradeInterface } from 'src/app/interfaces/trade.interface';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  @Input() public tradeData$: Observable<TradeInterface | null> = of({
    entryDate: '',
    entryPrice: null,
    exitDate: '',
    exitPrice: null
})

  public doughnutChartData: any[] = [];
  public doughnutChartLabels: any[] = [];
  public doughnutChartOptions: Partial<(ChartOptions & { annotation: any })> = {
    responsive: false,
  };
  public doughnutChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public doughnutChartLegend = true;
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartPlugins = [];

  constructor() { }

  ngOnInit() {
    this.tradeData$.subscribe((value: TradeInterface | null) => {
      this.setChartData(value)
    })
  }

  public isDataExist(value: TradeInterface | null): boolean {
    return !isEmpty(value);
  }

  public setChartData(value: TradeInterface | null) {
    
    if(this.isDataExist(value)) {
      this.doughnutChartData = [
        { data: [value?.entryPrice, value?.exitPrice], label: 'Balance' },
      ];
      this.doughnutChartLabels = [new Date(value?.entryDate as string), new Date(value?.exitDate as string)];
    }
    console.log('this.doughnutChartData', this.doughnutChartData)
    console.log('this.doughnutChartLabels', this.doughnutChartLabels)
  }
}
