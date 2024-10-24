const authRouter = require('express').Router();
const { User } = require('../../db/models');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');
const cookieConfig = require('../configs/cookieConfig');

authRouter.post('/signup', async (req, res) => {
  const { email, name, pass } = req.body;

  try {
    const hashpass = await bcrypt.hash(pass, 10);
    const [newUser, created] = await User.findOrCreate({
      where: { email },
      defaults: { name, pass: hashpass, isAdmin },
    });

    if (!created) {
      return res
        .status(400)
        .json({ text: 'Пользователь с этим email уже существует' });
    }

    const user = newUser.get();
    delete user.hashpass;
    const { refreshToken, accessToken } = generateTokens({ user });

    // return res.status(201).json({ text: 'Регистрация успешна', redirectPath: '/' });
    res
      .status(200)
      .cookie('refreshToken', refreshToken, cookieConfig)
      .json({ user, accessToken });
  } catch (error) {
    return res
      .status(500)
      .json({ text: 'Ошибка сервера, попробуйте позже', error: error.message });
  }
});

authRouter.post('/login', async (req, res) => {
  const { email, pass } = req.body;
  try {
    const targetUser = await User.findOne({ where: { email } }); 
    if (!targetUser) {
      return res.status(400).json({ text: 'Неверный email' });
    }

    const isValid = await bcrypt.compare(pass, targetUser.pass);
    if (!isValid) {
      return res.status(400).json({ text: 'Неверный пароль' });
    }
   
    const user = targetUser.get();
    delete user.pass;
    const { refreshToken, accessToken } = generateToken({ user });
    res
      .status(200)
      .cookie('refreshToken', refreshToken, cookieConfig)
      .json({ user, accessToken });
  } catch (error) {
    console.error(error);
    res.status(403).send(error.message);
  }
});

// authRouter.get('/logout', (req, res) => {
//   res.clearCookie('refreshToken').status(200).send('Logout successfull!');
// });

module.exports = authRouter;
