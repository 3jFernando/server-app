import { Router } from 'express';

import ShopsController from '../controllers/ShopsController';

class RoutesShop {

    public router: Router = Router();

    constructor() {
        this.routes();
    }

    routes(): void{
        this.router.get('/', ShopsController.list);
        this.router.get('/:id', ShopsController.getShop);
        this.router.post('/', ShopsController.store);
    }

}

const shop = new RoutesShop();
export default shop.router;