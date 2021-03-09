import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { FormsModule } from '@angular/forms';
import { ArtistEventsComponent } from './artist-events/artist-events.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistSearchComponent } from './artist-search/artist-search.component';


@NgModule({
  declarations: [ArtistEventsComponent, ArtistDetailsComponent, ArtistSearchComponent],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    FormsModule
  ]
})
export class ArtistModule { }
