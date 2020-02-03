"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = __importDefault(require("../../src/config/database"));
class RoutesUser {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', (req, res) => {
            database_1.default.query('SELECT * FROM users', [], (error, result, fields) => {
                if (error)
                    res.send("falla al tratar de cargar los datos");
                res.json({ 'users': result });
            });
        });
        this.router.get('/:id', (req, res) => {
            database_1.default.query('SELECT * FROM users WHERE id=?', [req.params.id], (error, result, fields) => {
                if (error)
                    res.send("falla al tratar de cargar los datos");
                res.json({ 'user': result });
            });
        });
    }
}
const user = new RoutesUser();
exports.default = user.router;
