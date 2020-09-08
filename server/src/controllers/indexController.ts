import { Request, Response } from 'express';

class IndexControllers{

    index (req: Request, res: Response){
        res.json({text: 'API is in /videogames'});
    } 
}

export const indexController = new IndexControllers();