import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../Aplicacao/Usuario/usuario.service';
import { HomeJpComponent } from '../home-jp/home-jp.component';

@Component({
  selector: 'menu-popap-perfil-jp',
  templateUrl: './menu-popap-perfil-jp.component.html',
  styleUrls: ['./menu-popap-perfil-jp.component.css']
})
export class MenuPopapPerfilJpComponent implements OnInit {
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
    HomeJpComponent.pagina = "minha-conta";
  }
}
