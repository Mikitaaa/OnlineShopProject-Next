import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const db = await open({
        filename: './api/data.db',
        driver: sqlite3.Database
      });

      const messages = await db.all('SELECT * FROM messages');
      res.status(200).json(messages);
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error.message);
      res.status(500).json({ error: 'Ошибка при выполнении запроса к базе данных' });
    }
  } else if (req.method === 'POST') {
    try {
      const { name, phone } = req.body;
      const db = await open({
        filename: 'pages/api/data.db',
        driver: sqlite3.Database
      });

      await db.run(`CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        phone TEXT
      )`);

      await db.run('INSERT INTO messages (name, phone) VALUES (?, ?)', [name, phone]);
      res.status(201).json({ message: 'Данные успешно добавлены' });
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error.message);
      res.status(500).json({ error: 'Ошибка при выполнении запроса к базе данных' });
    }
  } else {
    res.status(405).json({ error: 'Метод не разрешен' });
  }
}
