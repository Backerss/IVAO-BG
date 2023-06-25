const express = require('express');
const app = express();
const port = 3000;

const path = require('path');


const { login } = require('./src/router/login');
const { profile } = require('./src/router/profile');


const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


app.set('views', "./src/views");
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());


app.get('/', (req, res) => {
  res.render('index');
});

app.use('/login', login);
app.use('/profile', profile);
app.use('/about', (req, res) => {

  res.render('page/about');

});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
