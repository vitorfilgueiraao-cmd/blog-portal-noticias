class Autor {

    private id: number;
    private nome!: string;
    private email!: string;
    private senha!: string;

    constructor(id: number, nome: string, email: string, senha: string) {
        this.id = id;
        this.setNome(nome);
        this.setEmail(email);
        this.setSenha(senha);
    }
    

    

    public getId(): number {
        return this.id;
    }

    public getNome(): string {
        return this.nome;
    }

    public getEmail(): string {
        return this.email;
    }

    public getSenha(): string {
        return this.senha;
    }

   

    public setNome(nome: string): void {
        if (!nome || nome.trim().length < 3) {
            throw new Error("O nome deve possuir pelo menos 3 caracteres.");
        }

        this.nome = nome;
    }

    public setEmail(email: string): void {
        if (!email || !email.includes("@")) {
            throw new Error("E-mail inválido.");
        }

        this.email = email;
    }

    public setSenha(senha: string): void {
        if (!senha || senha.length < 6) {
            throw new Error("A senha deve possuir pelo menos 6 caracteres.");
        }

        this.senha = senha;
    }

 

    public toJSON() {
        return {
            id: this.id,
            nome: this.nome,
            email: this.email,
            senha: this.senha
        };
    }

 

    public static fromJSON(obj: any): Autor {
        return new Autor(
            obj.id,
            obj.nome,
            obj.email,
            obj.senha
        );
    }

}