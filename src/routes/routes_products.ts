import { Router } from 'express';

import ProductsController from '../controllers/ProductsController';

class RoutesProducts {

    public router: Router = Router();

    constructor() {
        this.routes();
    }

    routes(): void{
        this.router.get('/', ProductsController.list);
        this.router.get('/:id', ProductsController.getCategorie);
        this.router.post('/', ProductsController.store);
    }

}

const products = new RoutesProducts();
export default products.router;