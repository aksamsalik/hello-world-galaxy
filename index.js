const http = require('http');
const { Client } = require('pg');

const db = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'app3db',
  password: 'mypostgrespassword',
  port: 5432,
});

db.connect();

const server = http.createServer(async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');
    res.end(`Hello from App 3 (DB1) — ${result.rows[0].now}`);
  } catch (err) {
    res.end(`Error: ${err.message}`);
  }
});

server.listen(3003, () => {
  console.log('App 3 running on port 3003');
});
