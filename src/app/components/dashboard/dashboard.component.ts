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


  constructor(
    private _genericService: GenericService
  ) { }

  ngOnInit(): void {
    this.getAllCerrados();
    this.getAllCerradosByDay();
  }

  getAllCerradosByDay() {
    this._genericService.getAll(this.ticketComponentUrl + "/cerrados/byday", (cerradosByDay: any) => {
      console.log(cerradosByDay);
      this.cerradosByDay = cerradosByDay;
      console.log(this.cerradosByDay.data)
    })
  }
  getAllCerrados() {
    this._genericService.getAll(this.ticketComponentUrl + "/cerrados", (tickets: ITicket[]) => {
      this.tickets = tickets;
    })
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] =  [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'Cerrados por día' }
  ];

}