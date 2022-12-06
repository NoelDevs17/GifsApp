import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
 
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule,
    GifsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
