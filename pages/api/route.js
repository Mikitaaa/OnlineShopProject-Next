import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import fs from 'fs';

const usersFilePath = path.join(process.cwd(), 'private', 'users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

export default async function handler(req, res) {

  const auth = require('basic-auth');
    const user = auth(req);

    if (!user || !users[user.name] || users[user.name] !== user.pass) {
        res.statusCode = 401;
        res.setHeader('WWW-Authenticate', 'Basic realm="example"');
        res.end('Unauthorized');
        return;
    }

  if (req.method === 'GET') {
    try {
      const db = await open({
        filename: 'pages/api/data.db',
        driver: sqlite3.Database
      });

      const messages = await db.all('SELECT * FROM orders');
      res.status(200).json(messages);

      await db.run('DELETE FROM orders');
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error.message);
      res.status(500).json({ error: 'Ошибка при выполнении запроса к базе данных' });
    }
  }else if (req.method === 'POST') {
    try {
      const { name, phone, comment } = req.body;
      const db = await open({
        filename: 'pages/api/data.db',
        driver: sqlite3.Database
      });

      await db.run(`CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        phone TEXT,
        comment TEXT
      )`);

      await db.run('INSERT INTO orders (name, phone, comment) VALUES (?, ?, ?)', [name, phone, comment]);
      res.status(201).json({ message: 'Данные успешно добавлены' });
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error.message);
      res.status(500).json({ error: 'Ошибка при выполнении запроса к базе данных' });
    }
  } else {
    res.status(405).json({ error: 'Метод не разрешен' });
  }
}
