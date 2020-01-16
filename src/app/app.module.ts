import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ModuloRoteamento } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentModule } from './components/shared-components.module';
import { LoginModule } from './modules/login/login.module';
import { FiltroPorAssunto } from './modules/caixa-de-entrada/filtro-por-assunto.pipe';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';



@NgModule({
  declarations: [
    AppComponent,   
   CaixaDeEntradaComponent,
    FiltroPorAssunto
        
  ],
  imports: [  
    BrowserModule,
    
    FormsModule,
    ModuloRoteamento,
    ReactiveFormsModule, 
    HttpClientModule,    
    SharedComponentModule,       
    LoginModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
