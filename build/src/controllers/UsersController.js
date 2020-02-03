"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../src/config/database"));
class UsersController {
    list(req, res) {
        database_1.default.query("SELECT * FROM users", [], (error, result, fields) => {
            if (error)
                res.send("falla al tratar de cargar los datos").status(500);
            res.json({ 'users': result }).status(200);
        });
    }
    getUser(req, res) {
        database_1.default.query("SELECT * FROM users WHERE id=?", [req.params.id], (error, result, fields) => {
            if (error)
                res.send("falla al tratar de cargar los datos").status(500);
            res.json({ 'user': result }).status(200);
        });
    }
    store(req, res) {
        database_1.default.query("INSERT INTO users (fullname, username, password, phone, address, rol) VALUES (?, ?, ?, ?, ?, ?)", [
            req.body.fullname,
            req.body.username,
            req.body.password,
            req.body.phone,
            req.body.address,
            req.body.rol
        ], (error, result, fields) => {
            if (error)
                res.send("falla al tratar de cargar los datos").status(500);
            res.json({ 'user': result }).status(200);
        });
    }
}
const usersController = new UsersController();
exports.default = usersController;
