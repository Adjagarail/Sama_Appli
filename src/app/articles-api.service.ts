import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ArticlesApiService {
  Api = 'http://localhost:8000/api/articles.json';
  constructor(public http: HttpClient) {
    console.log('Salut ici la connection a api');
  }
  getArticle() {
    return new Promise(resolve => {
      this.http.get(this.Api).subscribe(data => {
          resolve(data);
      }, err => {
        console.log(err);
      });
      });
  }
}
