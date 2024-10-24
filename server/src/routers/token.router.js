const tokensRouter = require('express').Router();
const cookieConfig = require('../configs/cookieConfig');
const {
  verifyRefreshToken,
  verifyAccessToken,
} = require('../middleware/verifyToken');
const generateToken = require('../utils/generateToken');

tokensRouter.get('/refresh', verifyRefreshToken, (req, res) => {
  const { user } = res.locals;
  const { accessToken, refreshToken } = generateToken({ user });

  res
    .cookie('token', refreshToken, cookieConfig)
    .json({ user, accessToken });

  console.error(error);
  res.sendStatus(400);
});

module.exports = tokensRouter;
