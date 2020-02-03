import {Request, Response} from 'express';

import DB from '../../src/config/database';

class ShopsController {

    list(req: Request, res: Response) {
        DB.query("SELECT * FROM shops", [], (error, result, fields) => {
            if (error) res.send("falla al tratar de cargar los datos").status(500);
            res.json({'shops': result}).status(200);
        });
    }

    getShop(req: Request, res: Response) {
        DB.query("SELECT * FROM shops WHERE id=?", [req.params.id], (error, result, fields) => {
            if (error) res.send("falla al tratar de cargar los datos").status(500);
            res.json({'shop': result}).status(200);
        });
    }

    store(req: Request, res: Response) {
        DB.query("INSERT INTO shops (name, phone1, phone2, address, email) VALUES (?, ?, ?, ?, ?)", [
            req.body.name,
            req.body.phone1,
            req.body.phone2,
            req.body.address,
            req.body.email
        ], (error, result, fields) => {
            if (error) res.send("falla al tratar de cargar los datos").status(500);
            res.json({'shop': result}).status(200);
        });
    }

}

const shopsController = new ShopsController();
export default shopsController;