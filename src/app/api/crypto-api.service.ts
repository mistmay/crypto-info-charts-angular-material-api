import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Crypto, Currency } from '../models/crypto';
import { GraphData } from '../models/graph';
import { CryptoDetails } from '../models/crypto-details';

@Injectable({
  providedIn: 'root'
})
export class CryptoApiService {

  constructor(private http: HttpClient) { }

  getCurrencyData(currency: Currency) {
    return this.http.get<Crypto[]>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`);
  }

  getTrendingCurrency(currency: Currency) {
    return this.http.get<Crypto[]>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`);
  }

  getGraphData(coinId: string, currency: Currency, days: number) {
    return this.http.get<GraphData>(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`);
  }

  getCurrencyById(coinId: string) {
    return this.http.get<CryptoDetails>(`https://api.coingecko.com/api/v3/coins/${coinId}`)
  }

}
