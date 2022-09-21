import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GifsModuleModule } from './gifs/gifs-module.module';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GifsPageComponent } from './gifs/gifs-page/gifs-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GifsPageComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    GifsModuleModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
