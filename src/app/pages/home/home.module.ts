import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPesajeComponent } from '../../components/control-pesaje/control-pesaje.component';
import { HomeComponent } from '../../pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { DescuentosComponent } from '../../components/descuentos/descuentos.component';
import { TonelajeDiaComponent } from '../../components/tonelaje-dia/tonelaje-dia.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ControlPesajeComponent, HomeComponent, SidebarComponent, TopbarComponent, DescuentosComponent, TonelajeDiaComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
