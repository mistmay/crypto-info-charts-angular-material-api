import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/models/crypto';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  selectedCurrency: Currency = 'INR';

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
  }

  sendCurrency(currency: Currency): void {
    this.currencyService.setCurrency(currency);
  }

}
