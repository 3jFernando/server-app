import { Router } from 'express';

import UsersController from '../controllers/UsersController';

class RoutesUser {

    public router: Router = Router();

    constructor() {
        this.routes();
    }

    routes(): void{
        this.router.get('/', UsersController.list);
        this.router.get('/:id', UsersController.getUser);
        this.router.post('/', UsersController.store);
    }

}

const user = new RoutesUser();
export default user.router;