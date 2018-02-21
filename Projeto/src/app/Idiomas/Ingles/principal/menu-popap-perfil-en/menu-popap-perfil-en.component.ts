import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../Aplicacao/Usuario/usuario.service';
import { HomeEnComponent } from '../home-en/home-en.component';

@Component({
  selector: 'menu-popap-perfil-en',
  templateUrl: './menu-popap-perfil-en.component.html',
  styleUrls: ['./menu-popap-perfil-en.component.css']
})
export class MenuPopapPerfilEnComponent implements OnInit {
  nome: string;
  constructor(private usuarioService: UsuarioService) {
    this.nome = UsuarioService.usuarioLogado.nome + " " + UsuarioService.usuarioLogado.sobrenome;
   }

  ngOnInit() {
  }

  sair(){
    this.usuarioService.sair();
  }

  paginaMinhaConta(){
    HomeEnComponent.pagina = "minha-conta";
  }
}
