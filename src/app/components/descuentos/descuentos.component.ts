import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.css']
})
export class DescuentosComponent implements OnInit {

  readonly pesajeComponentUrl: string = "pesaje";
  readonly ticketComponentUrl: string = "ticket";

  constructor(
    private _genericService: GenericService
  ) { }

  ngOnInit(): void {

  }

  actualizarPesaje(pesaje_id: string) {

  }


}
