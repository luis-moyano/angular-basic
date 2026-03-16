import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ValorantMap} from '../interfaces/valorant-maps';

@Injectable({
  providedIn: 'root'
})
export class ValorantMapsService {

  private readonly urlBase = 'https://valorant-api.com/v1';
  private readonly http = inject(HttpClient);

  getAllMaps(): Observable<{ data: ValorantMap[] }> {
    return this.http.get<{ data: ValorantMap[] }>(`${this.urlBase}/maps`);
  }
}
