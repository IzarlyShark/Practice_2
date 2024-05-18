const router = require('express').Router();
const {login, createUser} = require('../controllers/user')
// CRUD маршруты /пользователи
// Маршрут аутентификации (вход)
router.post('/login', login);

// Маршрут создания пользователя
router.post('/users', createUser); // Исправь опечатку

// Экспортировать маршрутизатор
module.exports = router;
