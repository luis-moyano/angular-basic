import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private readonly http = inject(HttpClient);

  getList(): string[] {
    return ['Angular', 'React', 'Vue'];
  }

  getUniversities(): Observable<string[]> {
    return this.http.get<string[]>('http://universities.hipolabs.com/search?country=Chile');    
  }

}