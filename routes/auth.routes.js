const { Router } = require("express");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const config = require("config");
const router = Router();

router.post(
    "/register",
    [
        check("u_pass", "Минимальная длина пароля 7 симвлов").isLength({ min: 7 }),
        check("u_login", "Логин может содержать только английский буквы").isAlpha("en-US"),
        check("u_fio", "Поле может содержать только русские буквы").isAlpha("ru-RU")
    ],
    async (req, res) => {
        // console.log("Я дошел до сервера")
        try {
            const error = validationResult(req);
            // console.log("Я пытаюсь идти дальше");
            if (!error.isEmpty()) {
                // console.log("ОНЕТ, какая-то ошибка");
                return res.status(400).json({
                    errors: error.array(),
                    message: "Вы ввели некорректные данные"
                })
            }

            // console.log("Я прошел уже половину пути без ошибок");
            const u_login = req.body.u_login,
                u_fio = req.body.u_fio,
                u_birthday = req.body.u_birthday,
                u_address = req.body.u_address,
                u_site = req.body.u_site,
                u_pass = req.body.u_pass;

            const someUser = await User.findOne({ u_login });
            // console.log("Я поискал юзера и результат моих поисов такой: " + someUser);

            if (someUser) {
                // console.log("Да, оказалось что такой пользователь уже существует...");
                return res.status(400).json({ message: "Такой пользователь уже существует" });
            }

            // console.log("Да, оказалось что такого пользователя нет!");
            const user_pass = await bcrypt.hash(u_pass, 12);
            const user = new User({ u_login, u_fio, u_birthday, u_address, u_site, u_pass: user_pass });
            await user.save();
            // console.log("Пришлось его создать");

            res.status(201).json({ message: "Вы успешно зарагистрированы" });
        } catch (e) {
            // console.log("КАК Я ЗДЕСЬ ОКАЗАЛСЯ");
            res.status(500).json({ message: "Что-то пошло не так. Попробуйте снова" });
        }
    });

router.post(
    "/login",
    [
        check("u_pass", "Введите пароль").exists(),
        check("u_login", "Введите логин").exists()
    ],
    async (req, res) => {
        // console.log("Вышли на орбиту функции логина")
        try {
            const error = validationResult(req);
            // console.log("Пытаемся авторизоваться в системе")

            if (!error.isEmpty()) {
                // console.log("Данные оказались неверны, корабль принаджлежит другой форме жизни")
                return res.status(400).json({
                    error: error.array(),
                    message: "Вы ввели некорректные данные"
                })
            }

            // console.log("Авторизация была пройдена")
            const 
                u_login = req.body.u_login, 
                u_pass = req.body.u_pass;

            const someUser = await User.findOne({ u_login });
            // console.log("Пытаемся найти команду корабля в системе")

            if (!someUser) {
                console.log("Был найден не тот пользователь - данные не подошли")
                return res.status(400).json({ message: "Вы ввели неправильный логин или пароль" });
            }
            // console.log("Удалось найти человека из команды, пытаемся подключиться по известному паролю")
            const isMatch = await bcrypt.compare(u_pass, someUser.u_pass);

            if (!isMatch) {
                console.log("Пароль не подошел")
                return res.status(400).json({ message: "Вы ввели неправильный логин или пароль" });
            }

            // console.log("Устанавливаем соединение с дневником пользователя")
            const token = jwt.sign(
                { u_id: someUser._id },
                config.get("jwtSecret"),
                { expiresIn: "1h" }
            );

            // console.log("Удалось подключиться к дневнику пользователя. Теперь мы узнаем что произошло на корабле 100000 лет назад")
            res.json({ token, u_id: someUser._id })
        } catch (e) {
            // console.log("Корабль взорвался и вы сгорели заживо")
            res.status(500).json({ message: "Что-то пошло не так. Попробуйте снова" });
        }
    }
)

module.exports = router;