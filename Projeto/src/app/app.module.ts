import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CabecalhoLoginCadastroComponent } from './cabecalho-login-cadastro/cabecalho-login-cadastro.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { BoxPopapErroLoginComponent } from './box-popap-erro-login/box-popap-erro-login.component';
import { BoxPopapErroCadastroComponent } from './box-popap-erro-cadastro/box-popap-erro-cadastro.component';
import { CarregandoComponent } from './carregando/carregando.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoLoginCadastroComponent,
    LoginComponent,
    CadastrarComponent,
    BoxPopapErroLoginComponent,
    BoxPopapErroCadastroComponent,
    CarregandoComponent,
    TelaPrincipalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
