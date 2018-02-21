import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Idiomas/Portugues/login/login.component';
import { CadastrarComponent } from './Idiomas/Portugues/cadastrar/cadastrar.component';
import { HomeComponent } from './Idiomas/Portugues/principal/home/home.component';
import { MenuPopapPerfilComponent } from './Idiomas/Portugues/principal/menu-popap-perfil/menu-popap-perfil.component';
import { AmigosOnlineComponent } from './Idiomas/Portugues/principal/amigos-online/amigos-online.component';
import { PesquisaPessoasComponent } from './Idiomas/portugues/principal/pesquisa-pessoas/pesquisa-pessoas.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './Aplicacao/Usuario/usuario.service';
import { PesquisaPessoasService } from './Aplicacao/Pesquisa-Pessoas/pesquisa-pessoas.service';
import { MinhaContaComponent } from './Idiomas/Portugues/principal/minha-conta/minha-conta.component';
import { PostagensComponent } from './Idiomas/Portugues/principal/postagens/postagens.component';
import { CadastrarEsComponent } from './Idiomas/Espanhol/cadastrar-es/cadastrar-es.component';
import { LoginEsComponent } from './Idiomas/Espanhol/login-es/login-es.component';
import { AmigosOnlineEsComponent } from './Idiomas/Espanhol/principal/amigos-online-es/amigos-online-es.component';
import { HomeEsComponent } from './Idiomas/Espanhol/principal/home-es/home-es.component';
import { MenuPopapPerfilEsComponent } from './Idiomas/Espanhol/principal/menu-popap-perfil-es/menu-popap-perfil-es.component';
import { PesquisaPessoasEsComponent } from './Idiomas/Espanhol/principal/pesquisa-pessoas-es/pesquisa-pessoas-es.component';
import { MinhaContaEsComponent } from './Idiomas/Espanhol/principal/minha-conta-es/minha-conta-es.component';
import { PostagensEsComponent } from './Idiomas/Espanhol/principal/postagens-es/postagens-es.component';
import { CadastrarEnComponent } from './Idiomas/Ingles/cadastrar-en/cadastrar-en.component';
import { LoginEnComponent } from './Idiomas/Ingles/login-en/login-en.component';
import { AmigosOnlineEnComponent } from './Idiomas/Ingles/principal/amigos-online-en/amigos-online-en.component';
import { HomeEnComponent } from './Idiomas/Ingles/principal/home-en/home-en.component';
import { MenuPopapPerfilEnComponent } from './Idiomas/Ingles/principal/menu-popap-perfil-en/menu-popap-perfil-en.component';
import { MinhaContaEnComponent } from './Idiomas/Ingles/principal/minha-conta-en/minha-conta-en.component';
import { PesquisaPessoasEnComponent } from './Idiomas/Ingles/principal/pesquisa-pessoas-en/pesquisa-pessoas-en.component';
import { PostagensEnComponent } from './Idiomas/Ingles/principal/postagens-en/postagens-en.component';
import { CadastrarJpComponent } from './Idiomas/Japones/cadastrar-jp/cadastrar-jp.component';
import { LoginJpComponent } from './Idiomas/Japones/login-jp/login-jp.component';
import { AmigosOnlineJpComponent } from './Idiomas/Japones/principal/amigos-online-jp/amigos-online-jp.component';
import { HomeJpComponent } from './Idiomas/Japones/principal/home-jp/home-jp.component';
import { MenuPopapPerfilJpComponent } from './Idiomas/Japones/principal/menu-popap-perfil-jp/menu-popap-perfil-jp.component';
import { MinhaContaJpComponent } from './Idiomas/Japones/principal/minha-conta-jp/minha-conta-jp.component';
import { PesquisaPessoasJpComponent } from './Idiomas/Japones/principal/pesquisa-pessoas-jp/pesquisa-pessoas-jp.component';
import { PostagensJpComponent } from './Idiomas/Japones/principal/postagens-jp/postagens-jp.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastrarComponent,
    HomeComponent,
    MenuPopapPerfilComponent,
    AmigosOnlineComponent,
    PesquisaPessoasComponent,
    MinhaContaComponent,
    PostagensComponent,
    CadastrarEsComponent,
    LoginEsComponent,
    AmigosOnlineEsComponent,
    HomeEsComponent,
    MenuPopapPerfilEsComponent,
    PesquisaPessoasEsComponent,
    MinhaContaEsComponent,
    PostagensEsComponent,
    CadastrarEnComponent,
    LoginEnComponent,
    AmigosOnlineEnComponent,
    HomeEnComponent,
    MenuPopapPerfilEnComponent,
    MinhaContaEnComponent,
    PesquisaPessoasEnComponent,
    PostagensEnComponent,
    CadastrarJpComponent,
    LoginJpComponent,
    AmigosOnlineJpComponent,
    HomeJpComponent,
    MenuPopapPerfilJpComponent,
    MinhaContaJpComponent,
    PesquisaPessoasJpComponent,
    PostagensJpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [UsuarioService, PesquisaPessoasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
