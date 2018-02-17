import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Idiomas/Portugues/login/login.component';
import { CadastrarComponent } from './Idiomas/Portugues/cadastrar/cadastrar.component';
import { HomeComponent } from './Idiomas/Portugues/principal/home/home.component';
import { MenuPopapPerfilComponent } from './Idiomas/Portugues/principal/menu-popap-perfil/menu-popap-perfil.component';
import { AmigosOnlineComponent } from './Idiomas/Portugues/principal/amigos-online/amigos-online.component';
import { PesquisaPessoasComponent } from './Idiomas/portugues/principal/pesquisa-pessoas/pesquisa-pessoas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastrarComponent,
    HomeComponent,
    MenuPopapPerfilComponent,
    AmigosOnlineComponent,
    PesquisaPessoasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
