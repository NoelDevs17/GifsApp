import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];
  private apiKey: string = 'ag8ebaeAXSadpkEre1F5NWguI8S7fStI';
  public resultado: any[] = [];

  constructor(private http: HttpClient){}

  get historial(){
    return [...this._historial];
  }

  buscarGifs(query: string = ''){

    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
    }

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=ag8ebaeAXSadpkEre1F5NWguI8S7fStI&q=${query}&limit=10`)
    .subscribe((resp: any) => {
      console.log(resp.data);
      this.resultado = resp.data
    });

  }


}
