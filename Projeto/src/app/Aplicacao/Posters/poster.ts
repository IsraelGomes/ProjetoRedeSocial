export class Poster {
    data: string;
    texto: string;
    tipoPost: string;
    nomeUsr: string;

    constructor() {
        let date: Date = new Date();
        this.data = date.toString();
    }
    setTexto(texto: string): void {
        this.texto = texto;
    }

    getTexto(): string {
        return this.texto;
    }

    getData(): string{
        return this.data;
    }

    setUsr(nomeUsr: string): void{
        this.nomeUsr = nomeUsr;
    }

    getNomeUsr(): string{
        return this.nomeUsr;
    }
}
