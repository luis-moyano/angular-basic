import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private readonly urlBase = 'https://restcountries.com/v3.1/';

  // Service
  private readonly http = inject(HttpClient);

  private readonly fields = 'name,flags,capital,region';

  getAllCountries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlBase}all?fields=${this.fields}`);
  }

  getCountryByName(name: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlBase}name/${name}?fields=${this.fields}`);
  }
  
}
