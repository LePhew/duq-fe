import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { IPesaje } from 'src/app/interfaces/pesaje';
import { ITicket } from 'src/app/interfaces/ticket';

import { GenericService } from '../../services/generic.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  readonly pesajeComponentUrl: string = 'pesaje';
  readonly ticketComponentUrl: string = 'ticket';

  tickets: ITicket[] = [];
  pesajes: IPesaje[] = [];
  cerradosByDay: any = [];
  cerradosByMonth: any = [];
  tonelajeByCompany: any = [];

  tonelajeTotal: number = 0;

  //chartProps
  barChartOptions: ChartOptions = {};
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [];

  lineChartOptions: ChartOptions = {};
  lineChartColors: Color[] = [
    {
      backgroundColor: 'RGBA(0,0,230,0.6)',
    },
  ];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line';
  lineChartLabels: Label[] = [];
  lineChartData: ChartDataSets[] = [];

  companyChartOptions: ChartOptions = {};
  companyChartColors: Color[] = [
    {
      backgroundColor: 'RGBA(1, 216, 149)',
    },
  ];
  companyChartLegend = true;
  companyChartPlugins = [];
  companyChartType: ChartType = 'bar';
  companyChartLabels: Label[] = [];
  companyChartData: ChartDataSets[] = [];

  constructor(private _genericService: GenericService) {}

  ngOnInit(): void {
    this.getAllCerrados();
    this.getCerradosByDay();
    this.getCerradosByMonth();
    this.getTonelajeByCompany();
  }

  getAllCerrados() {
    this._genericService.getAll(
      this.ticketComponentUrl + '/cerrados',
      (tickets: ITicket[]) => {
        this.tickets = tickets;
      }
    );
  }

  getCerradosByMonth() {
    this._genericService.getAll(
      this.ticketComponentUrl + '/cerrados/bymonth',
      (cerradosByMonth: any) => {
        this.cerradosByMonth = cerradosByMonth;
      }
    );
  }
  getCerradosByDay() {
    this._genericService.getAll(
      this.ticketComponentUrl + '/cerrados/byday',
      (cerradosByDay: any) => {
        this.cerradosByDay = cerradosByDay;
      }
    );
  }

  getTonelajeByCompany() {
    this._genericService.getAll(
      this.ticketComponentUrl + '/cerrados/tonelajebycompany',
      (tonelajebycompany: any) => {
        this.tonelajeByCompany = tonelajebycompany;
        console.log(tonelajebycompany.data);
        this.tonelajeTotal = tonelajebycompany.data
          .map((x: any) => parseInt(x))
          .reduce((a: any, b: any) => {
            return a + b;
          }, 0);
        this.buildCharts();
      }
    );
  }

  buildCharts() {
    //cerrados por días
    this.barChartOptions = {
      responsive: true,
    };
    this.barChartLabels = this.cerradosByDay.labels;
    this.barChartData = [
      {
        data: this.cerradosByDay ? this.cerradosByDay.data : [],
        label: 'Cerrados por día',
      },
    ];

    //cerrados por mes
    this.lineChartOptions = {
      responsive: true,
    };
    this.lineChartLabels = this.cerradosByMonth.labels;
    this.lineChartData = [
      { data: this.cerradosByMonth.data, label: 'Cerrados por mes' },
    ];

    this.companyChartOptions = {
      responsive: true,
    };
    this.companyChartLabels = this.tonelajeByCompany.labels;
    this.companyChartData = [
      { data: this.tonelajeByCompany.data, label: 'Tonelaje por compañía' },
    ];
  }
}
