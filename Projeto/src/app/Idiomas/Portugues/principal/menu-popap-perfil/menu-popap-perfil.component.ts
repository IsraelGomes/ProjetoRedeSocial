import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../Aplicacao/Usuario/usuario.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'menu-popap-perfil',
  templateUrl: './menu-popap-perfil.component.html',
  styleUrls: ['./menu-popap-perfil.component.css']
})
export class MenuPopapPerfilComponent implements OnInit {
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
    HomeComponent.pagina = "minha-conta";
  }
}
