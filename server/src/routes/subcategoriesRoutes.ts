import { Router } from 'express';
import subcategoriesController from '../controllers/subcategoriesController';

class SubcategoriesRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',subcategoriesController.listCat);
        this.router.get('/:id',subcategoriesController.list);
        this.router.get('/:id/:id2',subcategoriesController.getOne);
        this.router.post('/',subcategoriesController.create);
        this.router.delete('/:id',subcategoriesController.delete);
        this.router.put('/:id',subcategoriesController.update);
    }
}

const subcategoriesRoutes = new SubcategoriesRoutes();
export default subcategoriesRoutes.router;