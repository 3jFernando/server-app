import {Request, Response} from 'express';

import DB from '../../src/config/database';

class CategoriesController {

    list(req: Request, res: Response) {
        DB.query("SELECT * FROM categories", [], (error, result, fields) => {
            if (error) res.send("falla al tratar de cargar los datos").status(500);
            res.json({'categories': result}).status(200);
        });
    }

    getCategorie(req: Request, res: Response) {
        DB.query("SELECT * FROM categories WHERE id=?", [req.params.id], (error, result, fields) => {
            if (error) res.send("falla al tratar de cargar los datos").status(500);
            res.json({'categorie': result}).status(200);
        });
    }

    store(req: Request, res: Response) {
        DB.query("INSERT INTO categories (id_shop, name, image_name, image_path) VALUES (?, ?, ?, ?)", [
            req.body.id_shop,
            req.body.name,
            req.body.image_name,
            req.body.image_path
        ], (error, result, fields) => {
            if (error) res.send("falla al tratar de cargar los datos").status(500);
            res.json({'categorie': result}).status(200);
        });
    }

}

const categoriesController = new CategoriesController();
export default categoriesController;