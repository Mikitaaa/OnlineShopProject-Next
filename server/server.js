const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path'); // Добавляем модуль path для работы с путями к файлам

const app = express();
const port = 8000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Разрешение доступа со всех источников
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Разрешение различных HTTP методов
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Разрешение заголовков
  next();
});

// Путь к файлу базы данных SQLite
const dbPath = path.resolve(__dirname, 'data.db');

// Инициализация базы данных SQLite
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        return console.error('Error connecting to database', err.message);
    }
    console.log('Connected to SQLite database');
});

// Создание таблицы для хранения данных формы, если она не существует
db.run("CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, phone TEXT)", (err) => {
    if (err) {
        console.error('Error creating table', err.message);
    } else {
        console.log('Table "orders" created successfully');
    }
});

app.use(bodyParser.json());

// Обработчик POST-запроса для сохранения данных формы
app.post('/', (req, res) => {
    const { name, phone } = req.body;
    
    // Вставка данных в базу данных
    db.run("INSERT INTO orders (name, phone) VALUES (?, ?)", [name, phone], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        // Отправка ответа с ID новой записи
        res.json({ id: this.lastID });
    });
});

// Обработчик GET-запроса для получения всех данных формы
app.get('/orders', (req, res) => {
    // Получение всех записей из базы данных
    db.all("SELECT * FROM orders", (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        // Отправка ответа со всеми данными формы
        res.json(rows);
    });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
