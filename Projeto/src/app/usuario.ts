import { Data } from "app/data";
import { Poster } from "app/poster";



export class Usuario {
    private nome: string;
    private sobrenome: string;
    private email: string;
    private senha: string;
    private dataNascimento: Data;
    private sexo: string;
    private posters: Array<Poster> = new Array();
  
    constructor() { }

    addPoster(poster: Poster): void{
        this.posters.push(poster);
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
}
