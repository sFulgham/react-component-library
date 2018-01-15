import express from 'express';
import config from './config';
import chalk from 'chalk';
import reactApp from '../src/mountServer';
import Faker from '../src/assets/js/libs/faker';

/* eslint-disable no-console */
const faker = new Faker();
const app = express();

app.use(express.static('public'));

app.get('/', async (req, res) => {
  const serverMount = await reactApp(req);
  res.render('index', {
    initialDocsState: serverMount.initialDocsState,
    initialDom: serverMount.initialDom
  });
});

app.get('/accounts', (req, res) => {
  const accounts = faker.getAccounts();
  res.send(accounts);
});

app.get('/posts', (req, res) => {
  const posts = faker.getPosts();
  res.send(posts);
});

app.set('view engine', 'ejs');

app.listen(config.port, (err) => {
  if(err){
    console.info(chalk.red(`An error has occurred listening on port ${config.port}`)); 
    return;
  }

  console.info(chalk.green(`Application running on port ${config.port}`)); 
});