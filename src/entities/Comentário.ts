 class Comentario {

    private id: number;
    private texto!: string;
    private autor!: string;
    private artigoId!: number;

    constructor(id: number, texto: string, autor: string, artigoId: number) {
        this.id = id;
        this.setTexto(texto);
        this.setAutor(autor);
        this.setArtigoId(artigoId);
    }

    // =========================
    // GETTERS
    // =========================

    public getId(): number {
        return this.id;
    }

    public getTexto(): string {
        return this.texto;
    }

    public getAutor(): string {
        return this.autor;
    }

    public getArtigoId(): number {
        return this.artigoId;
    }

    // =========================
    // SETTERS
    // =========================

    public setTexto(texto: string): void {
        if (!texto || texto.trim().length < 3) {
            throw new Error("O comentário deve possuir pelo menos 3 caracteres.");
        }

        this.texto = texto;
    }

    public setAutor(autor: string): void {
        if (!autor || autor.trim().length < 3) {
            throw new Error("O nome do autor é obrigatório.");
        }

        this.autor = autor;
    }

    public setArtigoId(artigoId: number): void {
        if (artigoId <= 0) {
            throw new Error("ID do artigo inválido.");
        }

        this.artigoId = artigoId;
    }

    // =========================
    // TO JSON
    // =========================

    public toJSON() {
        return {
            id: this.id,
            texto: this.texto,
            autor: this.autor,
            artigoId: this.artigoId
        };
    }

    // =========================
    // FROM JSON
    // =========================

    public static fromJSON(obj: any): Comentario {
        return new Comentario(
            obj.id,
            obj.texto,
            obj.autor,
            obj.artigoId
        );
    }

}