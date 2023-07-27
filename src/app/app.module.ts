import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';



@NgModule({
  declarations: [AppComponent, TemplateformComponent, ReactiveformComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[], //example for showing nesting service example.
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('Constructor inside AppModule Class');
  }
}
