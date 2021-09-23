import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/animations';
import { IFicha } from 'src/app/interfaces/ficha';
import { Pesaje } from 'src/app/interfaces/pesaje';
import { GenericService } from 'src/app/services/generic.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-control-pesaje',
  templateUrl: './control-pesaje.component.html',
  styleUrls: ['./control-pesaje.component.css'],
  animations: [
    fade
  ]
})
export class ControlPesajeComponent implements OnInit {

  private readonly componentUrl: string = "pesaje";
  private readonly fichaUrl: string = "ficha";

  compania_id: string = "";
  ficha_id: string = "";
  tonelaje: number = 0;
  descuento: number = 0;
  ticket_id: string = "";
  usuario_id: string = "";
  peso_bruto: number = 0;

  fichas: IFicha[] = [];
  ficha: any;

  constructor(
    private _genericService: GenericService
  ) { }

  ngOnInit(): void {
    this.loadFichas();
  }

  loadFichas() {
    this._genericService.getAll(this.fichaUrl, (data: IFicha[]) => {
      this.fichas = data;
      this.selectRandomFicha();
    })
  }

  selectRandomFicha() {
    this.ficha = this.fichas[this.getRandomInt(this.fichas.length)];
  }

  calcPesoAndTonelaje() {
    this.peso_bruto = this.getRandomInt(500);
    this.tonelaje = this.peso_bruto - this.ficha.tara;
  }

  guardar() {
    try {

      this.calcPesoAndTonelaje();
      this.usuario_id = localStorage.getItem('userId') || "";
      let pesaje = new Pesaje(this.ficha.id, this.tonelaje, this.usuario_id, this.peso_bruto);
      this._genericService.crear(this.componentUrl, pesaje, () => { });
    }
    catch {
      Swal.fire(
        'Ha sucedido un error',
        'Favor contactar a soporte',
        'error')
    }
    finally {
      Swal.fire(
        'Pesaje guardado con éxito',
        'Gracias!',
        'success'
      )
    }
  }

  limpiar() {
    this.ficha = null;
    this.ficha_id = "";
    this.compania_id = "";
    this.tonelaje = 0;
    this.descuento = 0;
    this.ticket_id = "";
    this.usuario_id = "";
    this.peso_bruto = 0;
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

}
