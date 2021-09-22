import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TradeInterface } from 'src/app/interfaces/trade.interface';
import { ChartDataService } from 'src/app/services/chart-data.service';
import { CustomValidator } from '../validators';

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
      { type: 'required', message: 'Exit Date is required' },
      { type: 'validExitDate', message: 'Exit date should be more then entry' }
    ],
    'exitPrice': [
      { type: 'required', message: 'Exit Price is required' },
      { type: 'validPrice', message: 'Price should be more then 0' }
    ]
  };

  calculatedPrice: null | number = null;
  entryDateControl: FormControl;

  constructor(
    private fb: FormBuilder,
    private chartDataService: ChartDataService
  ) {
    this.entryDateControl = new FormControl('', Validators.required);
    this.tradeDataForm = this.fb.group({
      entryDate: this.entryDateControl,
      entryPrice: [0, {
        validators: Validators.compose([
          Validators.required,
          CustomValidator.validPrice()
        ])
      }],
      exitDate: ['', {
        validators: Validators.compose([
          Validators.required,
          CustomValidator.validExitDate(this.entryDateControl)
        ])
      }],
      exitPrice: [0, {
        validators: Validators.compose([
          Validators.required,
          CustomValidator.validPrice()
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
