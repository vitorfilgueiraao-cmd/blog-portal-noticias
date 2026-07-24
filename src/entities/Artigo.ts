class Artigo {

    private id: number;
    private titulo!: string;
    private conteudo!: string;

    constructor(id: number, titulo: string, conteudo: string) {
        this.id = id;
        this.setTitulo(titulo);
        this.setConteudo(conteudo);
    }

    public getId(): number {
        return this.id;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getConteudo(): string {
        return this.conteudo;
    }


    public setTitulo(titulo: string): void {
        if (!titulo || titulo.trim().length < 3) {
            throw new Error("O título deve possuir pelo menos 3 caracteres.");
        }

        this.titulo = titulo;
    }

    public setConteudo(conteudo: string): void {
        if (!conteudo || conteudo.trim().length < 10) {
            throw new Error("O conteúdo deve possuir pelo menos 10 caracteres.");
        }

        this.conteudo = conteudo;
    }


    public toJSON() {
        return {
            id: this.id,
            titulo: this.titulo,
            conteudo: this.conteudo
        };
    }
 

    public static fromJSON(obj: any): Artigo {
        return new Artigo(
            obj.id,
            obj.titulo,
            obj.conteudo
        );
    }

}