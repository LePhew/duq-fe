import { Component, OnInit } from '@angular/core';
import { IPesaje } from 'src/app/interfaces/pesaje';
import { ExcelService } from 'src/app/services/excel.service';
import { GenericService } from 'src/app/services/generic.service';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tonelaje-dia',
  templateUrl: './tonelaje-dia.component.html',
  styleUrls: ['./tonelaje-dia.component.css']
})
export class TonelajeDiaComponent implements OnInit {

  private readonly componentUrl: string = "pesaje";
  private readonly ticketUrl: string = "ticket";

  pesajes: IPesaje[] = [];
  cierre: IPesaje[] = [];

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
    this._genericService.getAll(this.componentUrl, (data: IPesaje[]) => {
      console.log(data);
      this.pesajes = data;
    })
  }

  exportToCsv(): void {

    let csv: any = [];
    console.log(this.pesajes);
    this.pesajes.forEach((item: IPesaje) => {
      let cs: any = {};
      cs.ticket = item.ticket.numero.toString();
      cs.hora = this._datePipe.transform(item.ticket.fecha_emision, 'shortTime');
      cs.fecha = this._datePipe.transform(item.ticket.fecha_emision, 'shortDate');
      cs.compania = item.ficha.compania.nombre;
      cs.ficha = item.ficha.codigo.toString();
      cs.tara = item.ficha.tara.toString();
      cs.pesobruto = item.peso_bruto.toString();
      cs.tonelaje = item.tonelaje.toString();
      cs.descuento = item.descuento;
      csv.push(cs);
    })
    console.log(csv);
    let fileName = "cierre-"+ this._datePipe.transform(Date.now(), 'M/d/yyyy');
    this._exportService.exportToCsv(csv, fileName, ['fecha', 'hora', 'ticket', 'compania', 'ficha', 'tara', 'pesobruto', 'tonelaje', 'descuento']);
  }

  generarCierre(){
    this._genericService.crear(this.ticketUrl+"/cierre", {}, () => {
      this.exportToCsv();
      window.location.reload();
    });
    
  }

}