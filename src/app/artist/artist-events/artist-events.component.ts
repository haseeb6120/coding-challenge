import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArtistEvent } from 'src/app/_models/artist/artist-event.model';
import { IArtist } from 'src/app/_models/artist/artist.model';
import { ArtistService } from 'src/app/_services/artist/artist.service';

@Component({
  selector: 'app-artist-events',
  templateUrl: './artist-events.component.html',
  styleUrls: ['./artist-events.component.scss']
})
export class ArtistEventsComponent implements OnInit {

  artistEvents: IArtistEvent[] = [];
  errorMessage: string = '';
  artist: IArtist | undefined;

  constructor(private artistService: ArtistService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.getArtistEvents(params.artistName);
    })
  }

  /**
   * call api to get events of artist
   * @param searchText 
   */
  getArtistEvents(searchText: string) {
    this.artistService.getArtistEvents(searchText).subscribe((data: IArtistEvent[]) => {
      this.artistEvents = data;
      this.artist = data[0].artist;
    }, err => {
      this.errorMessage = err.message;
      this.resetData();
    })
  }

  resetData() {
    this.artistEvents = [];
  }

}
