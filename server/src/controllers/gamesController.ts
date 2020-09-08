import { Request, Response } from 'express';
import pool from '../database';
class gamesControllers{

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM videojuego');
        res.json(games);
    }
    public async getOne (req: Request, res:Response): Promise<any> {
        const { id } = req.params;
        const videojuego = await pool.query('SELECT * FROM videojuego WHERE COD_VIDEOJUEGO = ?', [id]);      
        if (videojuego.length > 0) {
            return res.json(videojuego[0]);
        }
        res.status(404).json({text: 'juego no existente'});
    }

    public async create (req: Request, res: Response): Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO videojuego set ?', [req.body])
        res.json({message: 'game saved!'});
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE videojuego set ? WHERE COD_VIDEOJUEGO = ?', [req.body, id]);
        res.json({ message: "The game was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM videojuego WHERE COD_VIDEOJUEGO = ?', [id]);
        res.json({ message: "The game was deleted" });
    }
}

const gamesController = new gamesControllers();
export default gamesController;