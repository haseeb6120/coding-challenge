import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistEventsComponent } from './artist-events/artist-events.component';
import { ArtistSearchComponent } from './artist-search/artist-search.component';

const routes: Routes = [
  {
    path: '',
    component: ArtistSearchComponent,
  },
  {
    path: 'events',
    component: ArtistEventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }
