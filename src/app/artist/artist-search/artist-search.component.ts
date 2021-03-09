import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { IArtist } from 'src/app/_models/artist/artist.model';
import { ArtistService } from 'src/app/_services/artist/artist.service';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.scss']
})
export class ArtistSearchComponent implements OnInit {

  searchText: string = '';
  subject: Subject<string> = new Subject<string>();
  results$: Subscription | undefined;
  artist: IArtist | undefined;
  errorMessage: string = '';

  constructor(private artistService: ArtistService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.getArtistDetails(params.artistName);
      this.searchText = params.artistName;
    })
    this.results$ = this.subject.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(searchText => this.getArtistDetails(searchText));
  }

  /**
   * call api to get artist details
   * @param searchText 
   */
  getArtistDetails(searchText: string) {
    this.errorMessage = '';
    if (searchText) {
      this.artistService.getArtistDetails(searchText).subscribe((data: IArtist) => {
        this.artist = data;
      }, err => {
        this.errorMessage = err.message;
        this.resetData();
      })
    } else {
      this.resetData();
    }
  }

  resetData() {
    this.artist = undefined;
  }

}
