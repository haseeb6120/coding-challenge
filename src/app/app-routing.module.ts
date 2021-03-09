import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'artist',
    pathMatch: 'full'
  },
  {
    path: 'artist',
    loadChildren: () => import('./artist/artist.module').then(m => m.ArtistModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
