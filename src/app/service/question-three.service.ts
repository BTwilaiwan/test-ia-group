import { Injectable } from '@angular/core';
import { HttpServices } from './http.service';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs' 

@Injectable({
  providedIn: 'root'
})
export class QuestionThreeService {
  private baseUrl = 'http://localhost:8081';

  constructor(
    private http: HttpClient
  ) { }

  postArea(data?: any) {
    return this.http.post(`${this.baseUrl}/calculate-area`, data )
  }

  postCitizen(data?: any) {
    return this.http.post(`${this.baseUrl}/citizen`, data )
  }
  
}
