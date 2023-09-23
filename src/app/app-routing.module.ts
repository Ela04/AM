import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  },
  {
    path: 'listar',
    loadChildren: () => import('./listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'crear',
    loadChildren: () => import('./crear/crear.module').then( m => m.CrearPageModule)
  },  {
    path: 'publica',
    loadChildren: () => import('./publica/publica.module').then( m => m.PublicaPageModule)
  },
  {
    path: 'privada',
    loadChildren: () => import('./privada/privada.module').then( m => m.PrivadaPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
