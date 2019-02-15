import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {PrioridadComponent} from './prioridad.component';
import { OrdenaTareasPipe } from './ordena-tareas.pipe';
import { FiltroDonePipe } from './filtro-done.pipe';
import { CallBackHellComponent } from './call-back-hell/call-back-hell.component';
import {ReactiveComponent} from './reactive.component';
import {TodoService} from './todo.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PrioridadComponent,
    OrdenaTareasPipe,
    FiltroDonePipe,
    CallBackHellComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
