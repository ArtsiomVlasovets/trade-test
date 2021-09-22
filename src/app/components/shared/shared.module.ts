import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from 'src/app/component/chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { DatePickerComponent } from 'src/app/component/date-picker/date-picker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChartComponent,
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    MatButtonModule, 
    MatDatepickerModule, 
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    ChartComponent,
    DatePickerComponent
  ]
})
export class SharedModule { }
