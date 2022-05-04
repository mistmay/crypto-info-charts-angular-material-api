import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Currency } from '../models/crypto';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private selectedCurrency: BehaviorSubject<Currency> = new BehaviorSubject<Currency>('INR');

  constructor() { }

  getCurrency() {
    return this.selectedCurrency.asObservable();
  }

  setCurrency(currency: Currency): void {
    this.selectedCurrency.next(currency);
  }

}
