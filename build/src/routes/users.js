"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const properties = {
    host: "127.0.0.1",
    user: 'root',
    password: 'root123456',
    database: 'app'
};
const pool = mysql_1.default.createPool(properties);
pool.getConnection((err, connection) => {
    (err) ? err : pool.releaseConnection(connection);
});
exports.default = pool;
