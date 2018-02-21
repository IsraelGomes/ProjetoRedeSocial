import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../Aplicacao/Usuario/usuario.service';

@Component({
  selector: 'login-pt',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  senha: string;
  logado: boolean = true;

  constructor(private usuarioService: UsuarioService) { }

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
