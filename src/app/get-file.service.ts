import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetFileService {
  constructor(private http: HttpClient) {}

  getFile(path:string): Observable<any> {
    // return this.http.get('/assets/html/prueba.html');
    return this.http.get(path, {responseType: 'text'});

  }
}
