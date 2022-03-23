const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "Shop API",
        description: "Backend Api",
        contact: {
          name: 'Amazing Developer'
        },
        servers: "http://localhost:3000"
      }
    },
    apis: ["app.js", ".routes/*.js"]
  };

/* CORS */
app.use(cors({
  origin: '*',
  methods: ['GET', 'PUT', 'DELETE', 'PATCH', 'POST'],
  allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
  
}));
app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const authRouter = require('./routes/auth');
const hosoRouter = require('./routes/hoso');
const searchRouter = require('./routes/search');
const adminRouter = require('./routes/admin');
const emailRouter = require('./routes/mail');
const PDFRouter = require('./pdf');

app.listen(3000)

app.use('/api/admin', adminRouter);

app.use('/api/auth', authRouter);
app.use('/api/hoso', hosoRouter);
app.use('/api/search', searchRouter);
app.use('/api/pdf', PDFRouter);

app.use('/api/email', emailRouter);



module.exports = app;