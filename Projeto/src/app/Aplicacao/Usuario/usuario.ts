import { Data } from "./data";
import { Poster } from "../Posters/poster";

export class Usuario {
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    dataNascimento: Data;
    sexo: string;
    posters: Array<Poster> = new Array();
    idioma: string;
    id: number;
    amigos: Array<number>;
    online: boolean;
    endereco: string;
    telefone: string;
  
    constructor() {
        this.amigos = new Array<number>();
    }
    addAmigo(id: number): void{

    }

    addPoster(poster: Poster): void{
  
    }

    getPosters(): Poster[]{
        return this.posters;
    }

    setNome(nome: string): void{
        this.nome = nome;
    }

    setSobrenome(sobrenome: string): void{
        this.sobrenome = sobrenome;
    }

    setEmail(email: string): void{
        this.email = email;
    }

    setSenha(senha: string): void{
        this.senha = senha;
    }

    setData(data: string): void{
        let dadosData: string[] = data.split("-");

        this.dataNascimento = new Data();
        this.dataNascimento.setData(dadosData[2], dadosData[1], dadosData[0]);
    }

    setSexo(sexo: string): void{
        this.sexo = sexo;
    }

    setIdioma(idioma: string): void{
        this.idioma = idioma;
    }
  
    getNome(): string{
        return this.nome;
    }

    getSobrenome(): string{
        return this.sobrenome;
    }

    getEmail(): string{
        return this.email;
    }

    getSenha(): string{
        return this.senha;
    }

    getData(): Data{
        return this.dataNascimento;
    }

    getSexo(): string{
        return this.sexo;
    }

    getIdioma(): string{
        return this.idioma;
    }
}
