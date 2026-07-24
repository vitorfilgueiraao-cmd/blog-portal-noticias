const { Router } = require("express");
const artigoController = require("../controllers/ArtigoController");

const router = Router();

router.get("/artigos", artigoController.listar);
router.post("/artigos", artigoController.criar);
router.put("/artigos/:id", artigoController.editar);
router.delete("/artigos/:id", artigoController.remover);

module.exports = router;