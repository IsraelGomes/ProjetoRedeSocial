import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'app/usuario.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {
  email: string;
  senha: string;
  constructor(private usuarioService: UsuarioService) {
    
      }

  ngOnInit() {
  }

  logar(){
    this.usuarioService.logar(this.email, this.senha);
  }
  getU(): number{
    return UsuarioService.usuarios.length;
  }

}
