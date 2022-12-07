import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'

})
export class SidebarComponent  {

  constructor(private historialService: GifsService) { }

  get historial(){
    return this.historialService.historial;
  }

 buscar(termino: string){
  console.log(termino,'Noel termino');

  this.historialService.buscarGifs(termino)
  }

}
