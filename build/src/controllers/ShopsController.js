"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../src/config/database"));
class ShopsController {
    list(req, res) {
        database_1.default.query("SELECT * FROM shops", [], (error, result, fields) => {
            if (error)
                res.send("falla al tratar de cargar los datos").status(500);
            res.json({ 'shops': result }).status(200);
        });
    }
    getShop(req, res) {
        database_1.default.query("SELECT * FROM shops WHERE id=?", [req.params.id], (error, result, fields) => {
            if (error)
                res.send("falla al tratar de cargar los datos").status(500);
            res.json({ 'shop': result }).status(200);
        });
    }
    store(req, res) {
        database_1.default.query("INSERT INTO shops (name, phone1, phone2, address, email) VALUES (?, ?, ?, ?, ?)", [
            req.body.name,
            req.body.phone1,
            req.body.phone2,
            req.body.address,
            req.body.email
        ], (error, result, fields) => {
            if (error)
                res.send("falla al tratar de cargar los datos").status(500);
            res.json({ 'shop': result }).status(200);
        });
    }
}
const shopsController = new ShopsController();
exports.default = shopsController;
