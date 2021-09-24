import { Component, OnInit } from '@angular/core';
import { IPesaje } from 'src/app/interfaces/pesaje';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-tonelaje-dia',
  templateUrl: './tonelaje-dia.component.html',
  styleUrls: ['./tonelaje-dia.component.css']
})
export class TonelajeDiaComponent implements OnInit {

  private readonly componentUrl: string = "pesaje";
  
  pesajes: IPesaje[] = [];

  constructor(
    private _genericService: GenericService
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

}
