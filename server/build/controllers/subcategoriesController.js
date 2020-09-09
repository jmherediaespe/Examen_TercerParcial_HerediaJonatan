"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class subcategoriesControllers {
    listCat(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoria = yield database_1.default.query('SELECT * FROM categoria');
            res.json(categoria);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const subcategorie = yield database_1.default.query('SELECT sc.COD_SUB_CATEGORIA, sc.NOMBRE, sc.FECHA_CREACION FROM subcategoria sc INNER JOIN categoria c ON sc.COD_CATEGORIA=c.COD_CATEGORIA WHERE c.COD_CATEGORIA= ? ', [id]);
            if (subcategorie.length > 0) {
                return res.json(subcategorie);
            }
            res.status(404).json({ text: 'subcategorias no existente' });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { id2 } = req.params;
            const subcategorie = yield database_1.default.query('SELECT * from subcategoria sc INNER JOIN categoria c ON sc.COD_CATEGORIA=c.COD_CATEGORIA WHERE c.COD_CATEGORIA= ? AND sc.COD_SUB_CATEGORIA = ?', [id, id2]);
            if (subcategorie.length > 0) {
                return res.json(subcategorie[0]);
            }
            res.status(404).json({ text: 'subcategoria no existente' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO subcategoria set ?', [req.body]);
            res.json({ message: 'subcategoria saved!' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idsubCat } = req.params;
            yield database_1.default.query('UPDATE subcategoria set ? WHERE COD_SUB_CATEGORIA= ?', [req.body, idsubCat]);
            res.json({ message: "The categorie was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idsubCat } = req.params;
            yield database_1.default.query('DELETE FROM subcategoria WHERE COD_SUB_CATEGORIA= ?', [idsubCat]);
            res.json({ message: "The SUBCATEGORIE was deleted" });
        });
    }
}
const subcategoriesController = new subcategoriesControllers();
exports.default = subcategoriesController;
