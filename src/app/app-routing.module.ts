import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLicitacionesComponent } from './features/licitaciones/pages/lista-licitaciones/lista-licitaciones.component';

const routes: Routes = [
  { path: '', redirectTo: 'buscador', pathMatch: 'full' },
  { path: 'buscador', component: ListaLicitacionesComponent },
  // Puedes agregar más rutas si creas nuevos componentes
  // { path: 'dashboard', component: DashboardComponent },
  // { path: '**', component: NotFoundComponent } // opcional
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
