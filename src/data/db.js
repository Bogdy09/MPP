/*import sql from 'mssql';

const config = {
    server: 'BOGDY',
    port:1433,
    database: 'MPP',
    user: 'bogdy12',
    password: 'bogdy12',
    options: {
        trustServerCertificate: true,
        encrypt: false, // Try both true and false
        enableArithAbort: true
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
};

let pool;

async function connectToDatabase() {
    try {
        pool = new sql.ConnectionPool(config);
        await pool.connect();
        console.log('Successfully connected to SQL Server');
        return pool;
    } catch (err) {
        console.error('Database Connection Failed:', {
            message: err.message,
            code: err.code,
            stack: err.stack
        });
        // Retry logic could be added here
        throw err;
    }
}

// Immediately invoke and export the connection promise
const dbPromise = connectToDatabase();

export { dbPromise, sql };*/
// src/data/db.js
import sql from 'mssql';

const config = {
    user: 'bogdy12',
    password: 'bogdy12',
    server: 'BOGDY',
    database: 'MPP',
    options: {
        trustServerCertificate: true,
        encrypt: false
    }
};

// Create a single connection pool
const pool = new sql.ConnectionPool(config);

// Connect immediately and export the connected pool
export const db = {
    pool: pool.connect().then(() => {
        console.log('Connected to SQL Server');
        return pool;
    }).catch(err => {
        console.error('Database Connection Failed', err);
        throw err;
    }),
    sql
};
export default {
    db
}