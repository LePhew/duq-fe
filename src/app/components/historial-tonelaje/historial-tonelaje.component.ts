import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IPesaje } from 'src/app/interfaces/pesaje';
import { ExcelService } from 'src/app/services/excel.service';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-historial-tonelaje',
  templateUrl: './historial-tonelaje.component.html',
  styleUrls: ['./historial-tonelaje.component.css']
})
export class HistorialTonelajeComponent implements OnInit {

  private readonly componentUrl: string = "pesaje";

  pesajes: IPesaje[] = [];
  cierre: IPesaje[] = [];
  meses: any[] = [];
  users: object[] = [];

  constructor(
    private _genericService: GenericService,
    private _exportService: ExcelService,
    private _datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.getPesaje();
    
  }

  getPesaje() {
    this._genericService.getAll(this.componentUrl+"/all", (data: IPesaje[]) => {
      console.log(data);
      this.pesajes = data;
      this.populateMeses();
    })
  }

  populateMeses(){
    let mesesT = this.pesajes.map((p: IPesaje) => p.ticket.fecha_emision)
    this.meses = mesesT.map((m: any) => this._datePipe.transform(m, "MMMM"))
    this.meses = [...new Set(this.meses)];
    console.log(this.meses);
  }
}
