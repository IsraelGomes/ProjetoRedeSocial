import { Component } from '@angular/core';
import { BoxPopapErroLoginComponent } from 'app/box-popap-erro-login/box-popap-erro-login.component';
import { BoxPopapErroCadastroComponent } from 'app/box-popap-erro-cadastro/box-popap-erro-cadastro.component';
import { UsuarioService } from 'app/usuario.service';
import { delay } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BoxPopapErroLoginComponent]
})
export class AppComponent {
  constructor(){

  }

  estado(): boolean{
    return BoxPopapErroLoginComponent.estadoBoxErro;
  }

  estado2(): boolean{
    return BoxPopapErroCadastroComponent.estadoBoxErro;
  }
  
  logado(): boolean{
    return UsuarioService.deslogado;
  }

  carregando(): boolean{
    return UsuarioService.carregando;
  }
}
