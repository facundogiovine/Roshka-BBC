import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article, NewsResp } from '../interfaces';
import { environment } from 'src/environments/environment';



const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  
  constructor(private http : HttpClient ) {
  }

  getNews() : Observable<Article[]> {
    return this.http
      .get<NewsResp>(`${apiUrl}${apiKey}`)
      .pipe(map(({articles}) => articles));
  }

}
