class Categoria {

    private id: number;
    private nome!: string;
    private descricao!: string;

    constructor(id: number, nome: string, descricao: string) {
        this.id = id;
        this.setNome(nome);
        this.setDescricao(descricao);
    }

    // =========================
    // GETTERS
    // =========================

    public getId(): number {
        return this.id;
    }

    public getNome(): string {
        return this.nome;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    // =========================
    // SETTERS
    // =========================

    public setNome(nome: string): void {
        if (!nome || nome.trim().length < 3) {
            throw new Error("O nome da categoria deve possuir pelo menos 3 caracteres.");
        }

        this.nome = nome;
    }

    public setDescricao(descricao: string): void {
        if (!descricao || descricao.trim().length < 5) {
            throw new Error("A descrição deve possuir pelo menos 5 caracteres.");
        }

        this.descricao = descricao;
    }

    // =========================
    // TO JSON
    // =========================

    public toJSON() {
        return {
            id: this.id,
            nome: this.nome,
            descricao: this.descricao
        };
    }

    // =========================
    // FROM JSON
    // =========================

    public static fromJSON(obj: any): Categoria {
        return new Categoria(
            obj.id,
            obj.nome,
            obj.descricao
        );
    }

}