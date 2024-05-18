require('dotenv').config()
const express = require('express');
const bodyparser = require('body-parser');
const sequelize = require('./utils/database');
const models = require('./models/index.js')

const app = express();

const port = process.env.PORT || 3000;
const host = "localhost";

app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: false }));

const usersRoutes = require('./routes/users');
app.use('/users', usersRoutes);


//test route
app.get('/', (req, res, next) => {
  res.send('Hello World');
});

sequelize.authenticate()
  .then(() => {
    console.log('Подключение к базе данных установлено.');
  })
  .catch(err => {
    console.error('Ошибка подключения к базе данных:', err);
  });

  // Загрузка моделей
models.sequelize.sync().then(() => {
    console.log('Модели базы данных синхронизированы.');
  });

  app.listen(port, () => {
    console.log(`Practice_2 app listening on port ${port} on host ${host}`);
  });
//sync database
// sequelize
//   .sync()
//   .then(result => {
//     console.log("Подключение к базе данных - успех!");
//     app.listen(`${port}`);
//   })
//   .catch(err => console.log(`Ошибка: ${err}`));