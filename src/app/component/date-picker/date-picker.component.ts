import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TradeInterface } from 'src/app/interfaces/trade.interface';
import { ChartDataService } from 'src/app/services/chart-data.service';
import { PriceValidator } from '../validators';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  @Output()
  public calculateData: EventEmitter<TradeInterface> = new EventEmitter();
  
  tradeDataForm: FormGroup;
  validationMessages = {
    'entryDate': [
      { type: 'required', message: 'Entry Date is required' }
    ],
    'entryPrice': [
      { type: 'required', message: 'Entry Price is required' },
      { type: 'validPrice', message: 'Price should be more then 0' }
    ],
    'exitDate': [
      { type: 'required', message: 'Exit Date is required' }
    ],
    'exitPrice': [
      { type: 'required', message: 'Exit Price is required' },
      { type: 'validPrice', message: 'Price should be more then 0' }
    ]
  };

  calculatedPrice: null | number = null;

  constructor(
    private fb: FormBuilder,
    private chartDataService: ChartDataService
  ) {
    this.tradeDataForm = this.fb.group({
      entryDate: ['', Validators.required],
      entryPrice: [0, {
        validators: Validators.compose([
          Validators.required,
          PriceValidator.validPrice()
        ])
      }],
      exitDate: ['', Validators.required],
      exitPrice: [0, {
        validators: Validators.compose([
          Validators.required,
          PriceValidator.validPrice()
        ])
      }],
    });
   }

  ngOnInit(): void {
  }

  public onSubmitUserDetails(value: any): void {
    this.calculatedPrice = value.exitPrice - value.entryPrice;
    this.chartDataService.tradeData = value;
    this.calculateData.emit(value)
  }
}
