import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { University } from '../interfaces/university.interface';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private readonly urlBase = 'http://universities.hipolabs.com/';

  private readonly http = inject(HttpClient);

  getUniversities(country: string): Observable<University[]> {
    return this.http.get<University[]>(`${this.urlBase}search?country=${country}`);    
  }

    getCountries(): Observable<string[]> {
    return this.http.get<string[]>(`https://restcountries.com/v3.1/all?fields=name,flags,capital,region`);
  }

}