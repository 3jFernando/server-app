import {Request, Response} from 'express';

import DB from '../../src/config/database';

class PurchasesController {

    list(req: Request, res: Response) {
        DB.query("SELECT * FROM purchases", [], (error, result, fields) => {
            if (error) res.send("falla al tratar de cargar los datos").status(500);
            res.json({'purchases': result}).status(200);
        });
    }

    getCategorie(req: Request, res: Response) {
        DB.query("SELECT * FROM purchases WHERE id=?", [req.params.id], (error, result, fields) => {
            if (error) res.send("falla al tratar de cargar los datos").status(500);
            res.json({'purchase': result}).status(200);
        });
    }

    store(req: Request, res: Response) {
        DB.query("INSERT INTO purchases (id_user, subtotal, total) VALUES (?, ?, ?)", [
            req.body.id_user,
            req.body.subtotal,
            req.body.total
        ], (error, result, fields) => {
            if (error) res.send({ "message": "falla al tratar de cargar los datos", 'error': error }).status(500);
            res.json({'purchase': result}).status(200);
        });
    }

}

const purchasesController = new PurchasesController();
export default purchasesController;