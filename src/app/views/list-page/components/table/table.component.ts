import { Component, OnInit, ViewChild } from '@angular/core';
import { CryptoApiService } from 'src/app/api/crypto-api.service';
import { Crypto, Currency } from 'src/app/models/crypto';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['symbol', 'current_price', 'price_change_percentage_24h', 'market_cap'];
  dataSource!: MatTableDataSource<Crypto>;
  currency!: Currency;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api: CryptoApiService, private router: Router, private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getCurrency()
      .subscribe((res: Currency) => {
        this.currency = res;
        this.getAllData();
      });
  }

  getAllData(): void {
    this.api.getCurrencyData(this.currency)
      .subscribe((res: Crypto[]) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToDetails(crypto: Crypto) {
    this.router.navigate(['coin-details', crypto.id]);
  }

}
