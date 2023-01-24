import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/posts'; 

  constructor(
    private http: HttpClient,
  ) { }

  initPost() {
    return this.http.get(`${this.baseUrl}`);
  }
}
