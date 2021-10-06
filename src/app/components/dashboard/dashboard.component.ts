import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { IPesaje } from 'src/app/interfaces/pesaje';
import { ITicket } from 'src/app/interfaces/ticket';

import { GenericService } from '../../services/generic.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  readonly pesajeComponentUrl: string = "pesaje";
  readonly ticketComponentUrl: string = "ticket";

  tickets: ITicket[] = [];
  pesajes: IPesaje[] = [];
  cerradosByDay: any = [];
  cerradosByMonth: any = [];


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

  constructor(
    private _genericService: GenericService
  ) { }

  ngOnInit(): void {
    this.getAllCerrados();
    this.getCerradosByDay();
    this.getCerradosByMonth();
  }


  getAllCerrados() {
    this._genericService.getAll(this.ticketComponentUrl + "/cerrados", (tickets: ITicket[]) => {
      this.tickets = tickets;
    })
  }

  getCerradosByMonth() {
    this._genericService.getAll(this.ticketComponentUrl + "/cerrados/bymonth", (cerradosByMonth: any) => {
      this.cerradosByMonth = cerradosByMonth;
      this.buildCharts();

    })
  }
  getCerradosByDay() {
    this._genericService.getAll(this.ticketComponentUrl + "/cerrados/byday", (cerradosByDay: any) => {
      this.cerradosByDay = cerradosByDay;
    })
  }

  buildCharts() {
    this.barChartOptions = {
      responsive: true,
    };
    this.barChartLabels = this.cerradosByDay.labels;
    this.barChartData = [
      { data: this.cerradosByDay ? this.cerradosByDay.data : [], label: 'Cerrados por día' }
    ];

    this.lineChartOptions = {
      responsive: true,
    }
    this.lineChartLabels = this.cerradosByMonth.labels;
    this.lineChartData = [
      { data: this.cerradosByMonth.data, label: 'Cerrados por mes' },
    ];
  }

}