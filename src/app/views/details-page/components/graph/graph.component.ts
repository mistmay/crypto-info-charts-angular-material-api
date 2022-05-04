import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CryptoApiService } from 'src/app/api/crypto-api.service';
import { Currency } from 'src/app/models/crypto';
import { GraphData } from 'src/app/models/graph';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  @Input() coinId!: string;
  days: number = 1;
  currency!: Currency;
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: `Price Trends`,
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: '#009688',
        pointBackgroundColor: '#009688',
        pointBorderColor: '#009688',
        pointHoverBackgroundColor: '#009688',
        pointHoverBorderColor: '#009688',

      }
    ],
    labels: []
  };
  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      point: {
        radius: 1
      }
    },

    plugins: {
      legend: { display: true },
    }
  };
  public lineChartType: ChartType = 'line';
  @ViewChild(BaseChartDirective) myLineChart !: BaseChartDirective;

  constructor(private api: CryptoApiService, private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getCurrency().subscribe((res: Currency) => {
      this.currency = res;
      this.getGraphData();
    });
  }

  getGraphData(): void {
    this.api.getGraphData(this.coinId, this.currency, this.days)
      .subscribe((res: GraphData) => {
        setTimeout(() => {
          this.myLineChart.chart?.update();
        }, 200);
        this.lineChartData.datasets[0].data = res.prices.map((element: number[]) => {
          return element[1];
        });
        this.lineChartData.labels = res.prices.map((element: number[]) => {
          let date: Date = new Date(element[0]);
          let time: string = date.getHours() > 12 ? `${date.getHours() - 12}: ${date.getMinutes()} PM` : `${date.getHours()}: ${date.getMinutes()} AM`;
          return this.days === 1 ? time : date.toLocaleDateString();
        });
      });
  }

  changeDays(days: number): void {
    this.days = days;
    this.getGraphData();
  }

}
