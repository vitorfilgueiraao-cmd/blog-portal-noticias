const { Request } = require("express");
type Response = import("express").Response;

class ArtigoController {

    public listar(req: Request, res: Response): void {
        res.send("Listando artigos");
    }

    public criar(req: Request, res: Response): void {
        res.send("Criando artigo");
    }

    public editar(req: Request, res: Response): void {
        res.send("Editando artigo");
    }

    public remover(req: Request, res: Response): void {
        res.send("Removendo artigo");
    }

}

module.exports = new ArtigoController();