var router = require('express').Router();
const login = require();
const register = require();
const authMiddleware = require();

module.exports = app => {
    router.get('/login', authMiddleware.isAuth, login.showLoginForm)
    .post('/login', login.login)

    .get('/register', authMiddleware.isAuth, register.create)
    .post('/register', register.register)

    .get('/logout', authMiddleware.loggedin, login.logout)
    app.use(router);
}