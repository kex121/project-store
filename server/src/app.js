require('dotenv').config();
const tokenRouter = require('./routers/token.router');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const cors = require('cors');

const { PORT } = process.env;

const corsConfig = {
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
};
app.use(cors(corsConfig));

app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router.use('/auth', authRouter);
router.use('/token', tokenRouter);

app.listen(PORT, () => {  console.log(`Server started at ${PORT} port`);
});