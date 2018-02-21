import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './Idiomas/Portugues/login/login.component';
import {CadastrarComponent} from './Idiomas/Portugues/cadastrar/cadastrar.component';
import {HomeComponent} from './Idiomas/Portugues/principal/home/home.component';
import { MinhaContaComponent } from './Idiomas/Portugues/principal/minha-conta/minha-conta.component';
import { LoginEsComponent } from './Idiomas/Espanhol/login-es/login-es.component';
import { MinhaContaEsComponent } from './Idiomas/Espanhol/principal/minha-conta-es/minha-conta-es.component';
import { HomeEsComponent } from './Idiomas/Espanhol/principal/home-es/home-es.component';
import { CadastrarEsComponent } from './Idiomas/Espanhol/cadastrar-es/cadastrar-es.component';
import { LoginEnComponent } from './Idiomas/Ingles/login-en/login-en.component';
import { CadastrarEnComponent } from './Idiomas/Ingles/cadastrar-en/cadastrar-en.component';
import { HomeEnComponent } from './Idiomas/Ingles/principal/home-en/home-en.component';
import { MinhaContaEnComponent } from './Idiomas/Ingles/principal/minha-conta-en/minha-conta-en.component';
import { LoginJpComponent } from './Idiomas/Japones/login-jp/login-jp.component';
import { CadastrarJpComponent } from './Idiomas/Japones/cadastrar-jp/cadastrar-jp.component';
import { HomeJpComponent } from './Idiomas/Japones/principal/home-jp/home-jp.component';
import { MinhaContaJpComponent } from './Idiomas/Japones/principal/minha-conta-jp/minha-conta-jp.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'login.pt',
        component: LoginComponent
      },
      {
        path: 'cadastrar.pt',
        component: CadastrarComponent
      },
      {
        path: 'home.pt',
        component: HomeComponent
      },
      {
        path: 'minhaconta.pt',
        component: MinhaContaComponent
      },
      {
        path: 'login.es',
        component: LoginEsComponent
      },
      {
        path: 'cadastrar.es',
        component: CadastrarEsComponent
      },
      {
        path: 'home.es',
        component: HomeEsComponent
      },
      {
        path: 'minhaconta.es',
        component: MinhaContaEsComponent
      },
      {
        path: 'login.en',
        component: LoginEnComponent
      },
      {
        path: 'cadastrar.en',
        component: CadastrarEnComponent
      },
      {
        path: 'home.en',
        component: HomeEnComponent
      },
      {
        path: 'minhaconta.en',
        component: MinhaContaEnComponent
      },
      {
        path: 'login.jp',
        component: LoginJpComponent
      },
      {
        path: 'cadastrar.jp',
        component: CadastrarJpComponent
      },
      {
        path: 'home.jp',
        component: HomeJpComponent
      },
      {
        path: 'minhaconta.jp',
        component: MinhaContaJpComponent
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}