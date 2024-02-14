import pg from 'pg';
import 

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export { pool };
