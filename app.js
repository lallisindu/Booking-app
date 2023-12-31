const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const routes = require('./routes');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set view engine and views directory
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');

// Serve static files
//app.use(express.static('public'));

// Routes
app.use('/', routes);

// Database synchronization
sequelize.sync().then(() => {
  console.log('Database & tables synced');
}).catch((err) => {
  console.error('Error syncing database:', err);
});

// Start the server with nodemon
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});