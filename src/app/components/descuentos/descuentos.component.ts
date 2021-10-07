import { Component, OnInit } from '@angular/core';
import { IPesaje } from 'src/app/interfaces/pesaje';
import { ITicket } from 'src/app/interfaces/ticket';
import { GenericService } from 'src/app/services/generic.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.css']
})
export class DescuentosComponent implements OnInit {

  readonly pesajeComponentUrl: string = "pesaje";
  readonly ticketComponentUrl: string = "ticket";

  ticket: any;
  selectedPesaje: any;
  descuento: any;

  pesajes: IPesaje[] = [];
  tickets: ITicket[] = [];

  filteredPesajes: IPesaje[] = [];

  constructor(
    private _genericService: GenericService
  ) { }

  ngOnInit(): void {
    this.getPesajes();
    this.getTickets();
  }

  getPesajes() {
    this._genericService.getAll(this.pesajeComponentUrl, (pesajes: IPesaje[]) => {
      this.pesajes = pesajes;
    })
  }

  getTickets() {
    this._genericService.getAll(this.ticketComponentUrl, (tickets: ITicket[]) => {
      this.tickets = tickets;
    })
  }

  actualizarPesaje() {
    try {
      this.selectedPesaje.descuento = this.descuento;
      this._genericService.actualizar(this.pesajeComponentUrl, this.selectedPesaje.id + "/update", this.selectedPesaje, () => {
        this.getPesajes();
        this.selectedPesaje = null;
      })
    }
    catch {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Validar información',
        showConfirmButton: false,
        timer: 1500
      })
    }
    finally {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Cambios guardados',
        showConfirmButton: false,
        timer: 1500
      })
      this.descuento = null;
      this.ticket = "";

    }
  }

  buscarPesajeByTicket() {
    this.filteredPesajes = this.pesajes.filter(pesaje => pesaje.ticket.numero.toString().match(this.ticket));
  }
  selectPesaje(pesaje: any) {
    this.selectedPesaje = pesaje;
  }


}
