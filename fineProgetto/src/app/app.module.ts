import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CondizioneComponent } from './condizione/condizione.component';
import { VariabiliComponent } from './variabili/variabili.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, CondizioneComponent, VariabiliComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}