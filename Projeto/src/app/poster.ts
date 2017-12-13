export class Poster {
    private autor: string;
    private data: string;
    private conteudo: string;

    constructor() {
        let date: Date = new Date();
        this.data = date.toString();
    }
    setConteudo(conteudo: string): void {
        this.conteudo = conteudo;
    }

    getConteudo(): string {
        return this.conteudo;
    }

    getData(): string{
        return this.data;
    }

    setAutor(autor: string): void{
        this.autor = autor;
    }

    getAutor(): string{
        return this.autor;
    }
}
