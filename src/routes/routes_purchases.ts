import { Router } from 'express';

import PurchasesController from '../controllers/PurchasesController';

class RoutesPurchases {

    public router: Router = Router();

    constructor() {
        this.routes();
    }

    routes(): void{
        this.router.get('/', PurchasesController.list);
        this.router.get('/:id', PurchasesController.getCategorie);
        this.router.post('/', PurchasesController.store);
    }

}

const purchases = new RoutesPurchases();
export default purchases.router;