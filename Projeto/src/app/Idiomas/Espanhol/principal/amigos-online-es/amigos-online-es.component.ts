import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../Aplicacao/Usuario/usuario.service';
import { Usuario } from '../../../../Aplicacao/Usuario/usuario';

@Component({
  selector: 'amigos-online-es',
  templateUrl: './amigos-online-es.component.html',
  styleUrls: ['./amigos-online-es.component.css']
})
export class AmigosOnlineEsComponent implements OnInit {
  static intervalo: number;
  constructor(private usuarioService: UsuarioService) {
    this.usuarioService.getAmigos();
  }

  ngOnInit() {
  }

  getAmigosOnline(): Array<Usuario> {
    return this.usuarioService.getAmigos();
  }
}
