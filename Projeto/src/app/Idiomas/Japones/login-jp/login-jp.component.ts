import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../Aplicacao/Usuario/usuario.service';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'login-jp',
  templateUrl: './login-jp.component.html',
  styleUrls: ['./login-jp.component.css']
})
export class LoginJpComponent implements OnInit {
  email: string;
  senha: string;
  logado: boolean = true;

  constructor(private usuarioService: UsuarioService) {
    AppComponent.idioma = "nihongo";
  }

  ngOnInit() {
  }

  logar() {
    this.usuarioService.logar(this.email, this.senha);

    if (UsuarioService.logado == false)
      this.logado = false;
    else
      this.logado = true;
  }
}