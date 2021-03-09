import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  app_id: string = 'test';

  constructor(private http: HttpClient) { }

  getArtistDetails(artistName: string): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}/artists/${artistName}`, {
      params: { app_id: this.app_id }
    }).pipe(map((x: any) => {
      if (x.error || !x) throw new Error('No artist found!');
      return x;
    }));
  }

  getArtistEvents(artistName: string): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}/artists/${artistName}/events`, {
      params: { app_id: this.app_id }
    }).pipe(map((x: any) => {
      if (x.length === 0) throw new Error('No event found!');
      return x;
    }));
  }

}
