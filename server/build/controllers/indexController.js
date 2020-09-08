"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexControllers {
    index(req, res) {
        res.json({ text: 'API is in /videogames' });
    }
}
exports.indexController = new IndexControllers();
