import {Request, Response} from 'express';

import DB from '../../src/config/database';

class UsersController {

    list(req: Request, res: Response) {
        DB.query("SELECT * FROM users", [], (error, result, fields) => {
            if (error) res.send("falla al tratar de cargar los datos").status(500);
            res.json({'users': result}).status(200);
        });
    }

    getUser(req: Request, res: Response) {
        DB.query("SELECT * FROM users WHERE id=?", [req.params.id], (error, result, fields) => {
            if (error) res.send("falla al tratar de cargar los datos").status(500);
            res.json({'user': result}).status(200);
        });
    }

    store(req: Request, res: Response) {
        DB.query("INSERT INTO users (fullname, username, password, phone, address, rol) VALUES (?, ?, ?, ?, ?, ?)", [
            req.body.fullname,
            req.body.username,
            req.body.password,
            req.body.phone,
            req.body.address,
            req.body.rol
        ], (error, result, fields) => {
            if (error) res.send("falla al tratar de cargar los datos").status(500);
            res.json({'user': result}).status(200);
        });
    }

}

const usersController = new UsersController();
export default usersController;