import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = '5ef6518a644b4e9dae9cfb424af29b61'
  constructor(private httpClient: HttpClient) { }
  getNews(){
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}')
  }
}

