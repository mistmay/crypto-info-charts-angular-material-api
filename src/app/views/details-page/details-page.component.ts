import { Component, OnInit } from '@angular/core';
import { CryptoApiService } from 'src/app/api/crypto-api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CryptoDetails } from 'src/app/models/crypto-details';
import { CurrencyService } from 'src/app/services/currency.service';
import { Currency } from 'src/app/models/crypto';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  coinData!: CryptoDetails;
  coinId!: string;
  description!: string;
  currency!: Currency;

  constructor(private api: CryptoApiService, private activatedRoute: ActivatedRoute, private currencyService: CurrencyService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((val: Params) => {
      this.coinId = val['id'];
      this.currencyService.getCurrency()
        .subscribe((res: Currency) => {
          this.currency = res;
          this.getCoinData();
        });
    });
  }

  getCoinData(): void {
    this.api.getCurrencyById(this.coinId)
      .subscribe((res: CryptoDetails) => {
        this.coinData = res;
        this.description = res.description.en.split('. ')[0];
        if (this.currency === 'USD') {
          this.coinData.market_data.current_price.inr = res.market_data.current_price.usd;
          this.coinData.market_data.market_cap.inr = res.market_data.market_cap.usd;
        }
      });
  }

  returnHome(): void {
    this.router.navigate(['']);
  }

}
