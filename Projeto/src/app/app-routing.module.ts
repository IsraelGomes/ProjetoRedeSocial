import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './Idiomas/Portugues/login/login.component';
import {CadastrarComponent} from './Idiomas/Portugues/cadastrar/cadastrar.component';
import {HomeComponent} from './Idiomas/Portugues/principal/home/home.component';

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
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}