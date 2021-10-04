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
  cerradosByDay: ITicket[] = [];


  constructor(
    private _genericService: GenericService
  ) { }

  ngOnInit(): void {
    this.getAllCerrados();
    this.getAllCerradosByDay();
  }

  getAllCerradosByDay() {
    this._genericService.getAll(this.ticketComponentUrl + "/cerrados/byday", (cerradosByDay: ITicket[]) => {
      this.cerradosByDay = cerradosByDay;
    })
  }
  getAllCerrados() {
    this._genericService.getAll(this.ticketComponentUrl + "/cerrados", (tickets: ITicket[]) => {
      this.tickets = tickets;
    })
  }

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75, 80], label: 'Crude oil prices' },
  ];

  lineChartLabels: Label[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line';

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
  ];

}
