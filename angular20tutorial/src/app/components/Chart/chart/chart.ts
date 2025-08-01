import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  imports: [NgxChartsModule],
  templateUrl: './chart.html',
  styleUrl: './chart.css'
})
export class Chart {
  data = [
    { name: 'Tháng 1', value: 100 },
    { name: 'Tháng 2', value: 200 },
    { name: 'Tháng 3', value: 300 },
    { name: 'Tháng 4', value: 50 },
    { name: 'Tháng 5', value: 100 },
    { name: 'Tháng 6', value: 200 },
    { name: 'Tháng 7', value: 300 },
    { name: 'Tháng 8', value: 50 },
    { name: 'Tháng 9', value: 100 },
    { name: 'Tháng 10', value: 200 },
    { name: 'Tháng 11', value: 300 },
    { name: 'Tháng 12', value: 50 },

  ];
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };
}
