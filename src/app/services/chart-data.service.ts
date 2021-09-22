import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TradeInterface } from '../interfaces/trade.interface';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  private _tradeData$ = new BehaviorSubject<TradeInterface>({
    entryDate: '',
      entryPrice: null,
      exitDate: '',
      exitPrice: null
  })

  constructor() {

  }

  public set tradeData(value: TradeInterface) {
    const {
      entryDate,
        entryPrice,
        exitDate,
        exitPrice
    } = value
    this._tradeData$.next({
      entryDate,
      entryPrice,
      exitDate,
      exitPrice
    })
  }

  public get tradeData(): TradeInterface {
    return this._tradeData$.getValue()
  }

  public getData(): Observable<TradeInterface> {
    return this._tradeData$.asObservable()
  }
}
