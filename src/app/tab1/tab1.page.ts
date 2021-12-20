import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public articulo : Article;
  public articulos : Article[] = [];

  constructor(private noticias : NewsService) {

  }

  searchText: string = '';

  ngOnInit() {
    this.noticias.getNews().subscribe((respuesta)=>{ 
      this.noticias.getNews().subscribe((articulos)=>this.articulos.push(...articulos) );
    });
  }
  onSearchChange(ev){
    this.searchText = ev.detail.value;
  }
}
