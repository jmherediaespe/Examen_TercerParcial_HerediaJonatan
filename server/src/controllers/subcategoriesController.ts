import { Request, Response } from 'express';
import pool from '../database';
class subcategoriesControllers{

    public async listCat(req: Request, res: Response): Promise<void> {
        const categoria = await pool.query('SELECT * FROM categoria');
        res.json(categoria);
    }

    public async list(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const subcategorie = await pool.query('SELECT sc.COD_SUB_CATEGORIA, sc.NOMBRE, sc.FECHA_CREACION FROM subcategoria sc INNER JOIN categoria c ON sc.COD_CATEGORIA=c.COD_CATEGORIA WHERE c.COD_CATEGORIA= ? ', [id]);      
        if (subcategorie.length > 0) {
            return res.json(subcategorie);
        }
        res.status(404).json({text: 'subcategorias no existente'});
    }
    public async getOne (req: Request, res:Response): Promise<any> {
        const  { id }  = req.params;
        const  { id2 }  = req.params;
        const subcategorie = await pool.query('SELECT * from subcategoria sc INNER JOIN categoria c ON sc.COD_CATEGORIA=c.COD_CATEGORIA WHERE c.COD_CATEGORIA= ? AND sc.COD_SUB_CATEGORIA = ?', [id, id2]);      
        if (subcategorie.length > 0) {
            return res.json(subcategorie[0]);
        }
        res.status(404).json({text: 'subcategoria no existente'});
    }

    public async create (req: Request, res: Response): Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO subcategoria set ?', [req.body])
        res.json({message: 'subcategoria saved!'});
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { idsubCat } = req.params;
        await pool.query('UPDATE subcategoria set ? WHERE COD_SUB_CATEGORIA= ?', [req.body, idsubCat]);
        res.json({ message: "The categorie was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM subcategoria WHERE COD_SUB_CATEGORIA= ?', [id]);
        res.json({ message: "The SUBCATEGORIE was deleted" });
    }
}

const subcategoriesController = new subcategoriesControllers();
export default subcategoriesController;