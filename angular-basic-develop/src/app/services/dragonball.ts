import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  private readonly urlBase = 'https://dragonball-api.com/api/';
  private readonly http = inject(HttpClient);

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(`${this.urlBase}characters`);
  }
  getCharacterByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.urlBase}characters?name=${name}`);
  }
}