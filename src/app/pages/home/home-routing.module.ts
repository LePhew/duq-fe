import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniaComponent } from 'src/app/components/compania/compania.component';
import { ControlPesajeComponent } from 'src/app/components/control-pesaje/control-pesaje.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { DescuentosComponent } from 'src/app/components/descuentos/descuentos.component';
import { FichasComponent } from 'src/app/components/fichas/fichas.component';
import { HistorialTonelajeComponent } from 'src/app/components/historial-tonelaje/historial-tonelaje.component';
import { TonelajeDiaComponent } from 'src/app/components/tonelaje-dia/tonelaje-dia.component';
import { UsuariosComponent } from 'src/app/components/usuarios/usuarios.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            { path: 'control-pesaje', component: ControlPesajeComponent },
            { path: 'descuentos', component: DescuentosComponent },
            { path: 'tonelaje-dia', component: TonelajeDiaComponent },
            { path: 'fichas', component: FichasComponent },
            { path: 'companias', component: CompaniaComponent },
            { path: 'usuarios', component: UsuariosComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'historial', component: HistorialTonelajeComponent},
            { path: '**', component: DashboardComponent }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
