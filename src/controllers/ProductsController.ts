import {Request, Response} from 'express';

import DB from '../../src/config/database';

class ProductsController {

    list(req: Request, res: Response) {
        DB.query("SELECT * FROM products", [], (error, result, fields) => {
            if (error) res.send("falla al tratar de cargar los datos").status(500);
            res.json({'product': result}).status(200);
        });
    }

    getCategorie(req: Request, res: Response) {
        DB.query("SELECT * FROM products WHERE id=?", [req.params.id], (error, result, fields) => {
            if (error) res.send("falla al tratar de cargar los datos").status(500);
            res.json({'product': result}).status(200);
        });
    }

    store(req: Request, res: Response) {
        DB.query("INSERT INTO products (id_category, name, description, price, time_preparate) VALUES (?, ?, ?, ?, ?)", [
            req.body.id_category,
            req.body.name,
            req.body.description,
            req.body.price,
            req.body.time_preparate
        ], (error, result, fields) => {
            if (error) res.send({ "message": "falla al tratar de cargar los datos", 'error': error }).status(500);
            res.json({'product': result}).status(200);
        });
    }

}

const productsController = new ProductsController();
export default productsController;