import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../Aplicacao/Usuario/usuario.service';
import { Usuario } from '../../../../Aplicacao/Usuario/usuario';

@Component({
  selector: 'amigos-online-en',
  templateUrl: './amigos-online-en.component.html',
  styleUrls: ['./amigos-online-en.component.css']
})
export class AmigosOnlineEnComponent implements OnInit {
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
