require('dotenv').config();

const mysql = require('mysql2/promise');

let pool;
const getConnection = async () => {
    try {
        if (!pool) {
            pool = mysql.createPool({
                connectionLimit: 10,
                host: 'us-cdbr-east-06.cleardb.net',
                user: 'baa4413413f152',
                password: '1a6558c9',
                database: 'heroku_5e5fc9de364d3d0',
                timezone: 'Z',
            });
        }

        return await pool.getConnection();
    } catch {
        throw new Error(
            'Error al conectar con MySQL o base de datos no encontrada'
        );
    }
};

module.exports = getConnection;
