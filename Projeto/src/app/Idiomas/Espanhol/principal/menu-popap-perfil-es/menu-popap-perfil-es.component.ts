import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../Aplicacao/Usuario/usuario.service';
import { HomeEsComponent } from '../home-es/home-es.component';

@Component({
  selector: 'menu-popap-perfil-es',
  templateUrl: './menu-popap-perfil-es.component.html',
  styleUrls: ['./menu-popap-perfil-es.component.css']
})
export class MenuPopapPerfilEsComponent implements OnInit {
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
    HomeEsComponent.pagina = "minha-conta";
  }
}
