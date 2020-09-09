"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subcategoriesController_1 = __importDefault(require("../controllers/subcategoriesController"));
class SubcategoriesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', subcategoriesController_1.default.listCat);
        this.router.get('/:id', subcategoriesController_1.default.list);
        this.router.get('/:id/:id2', subcategoriesController_1.default.getOne);
        this.router.post('/', subcategoriesController_1.default.create);
        this.router.delete('/:id', subcategoriesController_1.default.delete);
        this.router.put('/:id', subcategoriesController_1.default.update);
    }
}
const subcategoriesRoutes = new SubcategoriesRoutes();
exports.default = subcategoriesRoutes.router;
