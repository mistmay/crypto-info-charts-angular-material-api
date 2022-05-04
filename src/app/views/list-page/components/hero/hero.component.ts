import { Component, OnInit } from '@angular/core';
import { CryptoApiService } from 'src/app/api/crypto-api.service';
import { Crypto, Currency } from 'src/app/models/crypto';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  bannerData: Crypto[] = [];
  currency!: Currency;

  constructor(private api: CryptoApiService, private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getCurrency().subscribe((res: Currency) => {
      this.currency = res;
      this.getBannerData();
    });
  }

  getBannerData(): void {
    this.api.getTrendingCurrency('INR')
      .subscribe((res: Crypto[]) => {
        this.bannerData = res;
      });
  }

}
