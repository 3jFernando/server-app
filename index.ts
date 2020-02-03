import express, { Application } from 'express';
import cors from 'cors';

import RoutesUsers from './src/routes/routes_users';
import RoutesShops from './src/routes/routes_shops';
import RoutesCategories from './src/routes/routes_categories';
import RoutesProducts from './src/routes/routes_products';
import RoutesPurchases from './src/routes/routes_purchases';

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.configApp();
        this.configRoutes();
    }

    configApp(): void {
        this.app.set('port', process.env.PORT || 3400);
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    configRoutes(): void {
        this.app.use('/api/users/', RoutesUsers);
        this.app.use('/api/shops/', RoutesShops);
        this.app.use('/api/categories/', RoutesCategories);
        this.app.use('/api/products/', RoutesProducts);
        this.app.use('/api/purchases/', RoutesPurchases);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => { console.log("server running")});
    }

}

const server = new Server();
server.start();
