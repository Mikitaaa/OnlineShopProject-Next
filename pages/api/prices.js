import path from 'path';
import fs from 'fs';

const usersFilePath = path.join(process.cwd(), 'private', 'users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
let variables = {
    prod_1_100l: '20,20',
    prod_1_250l: '37',
    prod_2_100l: '21,40',
    prod_2_250l: '41',
    prod_3_100l: '10,30',
    prod_3_250l: '28',
    prod_4_100l: '18,30',
    prod_4_250l: '31',
    prod_5_100l: '24,15',
    prod_5_250l: '41',
    prod_6_100l: '30,80',
    prod_6_250l: '53',
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
  