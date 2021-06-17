import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigFilesComponent } from './components/config-files/config-files.component';
import { DefConfigFilesComponent } from './components/def-config-files/def-config-files.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigFilesComponent,
    DefConfigFilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
