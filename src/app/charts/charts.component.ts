import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  public lineChartData: Array<any> = [
    [65, 59, 80, 81, 56, 55, 40, 40, 19, 86, 27, 90, 99],
    [28, 48, 40, 19, 86, 27, 90, 29, 36, 27, 10, 18, 11],
    [23, 18, 13, 29, 36, 27, 10, 18, 13, 29, 36, 27, 10]

  ];
  public lineChartLabels: Array<any> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    1,
    3,
    4,
    5,
    6,
    4,
  ];
  public lineChartType: string = 'line';
  public pieChartType: string = 'pie';

  constructor() {}

  ngOnInit() {}
  // lineChart
  public randomizeType(): void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
