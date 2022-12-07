import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GifsPageComponent } from '../gifs-page/gifs-page.component';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';


@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];
  private apiKey: string = 'ag8ebaeAXSadpkEre1F5NWguI8S7fStI';
  public resultados: Gif[] = [];

  constructor(private http: HttpClient) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || []
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || []
  }

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string = '') {
    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    this.http
      .get<SearchGifsResponse>(
        `https://api.giphy.com/v1/gifs/search?api_key=ag8ebaeAXSadpkEre1F5NWguI8S7fStI&q=${query}&limit=10`
      )
      .subscribe((resp) => {
        console.log('Noel',resp.data);
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }
}
