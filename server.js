const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect db
connectDB();

app.get('/', (req, res) => {
  res.send('API running...');
});

//Initialize Middleware, bodyParser
app.use(express.json());

//Define All Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
