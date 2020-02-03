import mysql from 'mysql';

const properties = {
    host: "127.0.0.1",
    user: 'root',
    password: 'root123456',
    database: 'app'
}

const pool = mysql.createPool(properties);

pool.getConnection((err:any, connection:any) => {
    (err) ? err : pool.releaseConnection(connection);
});

export default pool;