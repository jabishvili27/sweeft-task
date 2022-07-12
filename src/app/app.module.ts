import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AddcatComponent } from './addcat/addcat.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenCatComponent } from './openCat/openCat.component';
import { ApiService } from './service/api.service';

@NgModule({
  declarations: [AppComponent, AddcatComponent, OpenCatComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ApiService],

  bootstrap: [AppComponent],
})
export class AppModule {}
