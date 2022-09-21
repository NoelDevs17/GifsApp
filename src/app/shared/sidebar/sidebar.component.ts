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
    console.log('probando noel',this.historial);
    
  }

}
