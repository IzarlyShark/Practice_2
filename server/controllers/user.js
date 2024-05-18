const { User } = require('../models'); // Импортируем модель User из models


// Контроллер для аутентификации пользователя (логин)
module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  console.log(User);
  // Используем метод findOne модели User для поиска пользователя по email и password
  User.findOne({ where: { email, password } })
    .then((user) => {
      if (!user) {
        throw new Error('Пользователь не найден или не правильный пароль или e-mail');
      }
      return res.status(200).send({ user });
    })
    .catch(next);
};

// Контроллер для создания нового пользователя
module.exports.createUser = (req, res, next) => {
  const { name, email, password } = req.body;

  // Создаем нового пользователя с помощью метода create модели User
  User.create({
    name,
    email,
    password
  })
    .then((user) => {
      return res.status(200).send({ data: user }); // Отправляем данные созданного пользователя в ответе
    })
    .catch((err) => next(err)); // Передаем ошибку в обработчик ошибок
};


// module.exports.login = (req, res, next) => {
//     const { email, password } = req.body;
//     return User.findUserByCredentials(email, password)
//       .then((user) => {
//         const token = jwt.sign(
//           { _id: user._id },
//           'dev-secret',
//           { expiresIn: '7d' },
//         );
//         res.cookie('jwt', token, { httpOnly: false, secure: true, sameSite: 'none' });
//         return res.status(200).send({token});
//       })
//       .catch(next);
//   };

// module.exports.createUser = (req, res, next) => {
//   const {
//     name,
//     email,
//     password,
//   } = req.body;
//     User.create({
//       name,
//       email,
//       password: password,
//     })
//     .then((user) => res
//       .status(200)
//       .send({ data: user }))
//     .catch(next());
// }; 
