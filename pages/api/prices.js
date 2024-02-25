import path from 'path';
import fs from 'fs';

const usersFilePath = path.join(process.cwd(), 'private', 'users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
let variables = {
    prod_1_100l: '20', // голубика
    prod_1_250l: '38',
    prod_2_100l: '21', // унивверсальный
    prod_2_250l: '42',
    prod_3_100l: '17', // кислый
    prod_3_250l: '29',
    prod_4_100l: '18', // нейтрализированный
    prod_4_250l: '32',
    prod_5_100l: '23', // компост
    prod_5_250l: '42',
    prod_6_100l: '29', // высокие грядки
    prod_6_250l: '54',
  };
  
  export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json(variables);
    } else if (req.method === 'POST') {

    const auth = require('basic-auth');
    const user = auth(req);

    if (!user || !users[user.name] || users[user.name] !== user.pass) {
        res.statusCode = 401;
        res.setHeader('WWW-Authenticate', 'Basic realm="example"');
        res.end('Unauthorized');
        return;
    }

      const data = req.body;
      variables = { ...variables, ...data };
      res.status(200).json(variables);
    } else {
      res.status(405).end(); 
    }
  }
  