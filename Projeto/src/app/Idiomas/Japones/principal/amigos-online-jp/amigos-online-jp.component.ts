import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../Aplicacao/Usuario/usuario.service';
import { Usuario } from '../../../../Aplicacao/Usuario/usuario';

@Component({
  selector: 'amigos-online-jp',
  templateUrl: './amigos-online-jp.component.html',
  styleUrls: ['./amigos-online-jp.component.css']
})
export class AmigosOnlineJpComponent implements OnInit {
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
