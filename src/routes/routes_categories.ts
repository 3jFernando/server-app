import { Router } from 'express';

import CategoriesController from '../controllers/CategoriesController';

class RoutesCategories {

    public router: Router = Router();

    constructor() {
        this.routes();
    }

    routes(): void{
        this.router.get('/', CategoriesController.list);
        this.router.get('/:id', CategoriesController.getCategorie);
        this.router.post('/', CategoriesController.store);
    }

}

const categories = new RoutesCategories();
export default categories.router;