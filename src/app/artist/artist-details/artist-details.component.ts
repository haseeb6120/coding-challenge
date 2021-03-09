import { Component, Input, OnInit } from '@angular/core';
import { IArtist } from 'src/app/_models/artist/artist.model';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {

  @Input() artist: IArtist | undefined;
  @Input() errorMessage: string = '';
  @Input() readonly: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
