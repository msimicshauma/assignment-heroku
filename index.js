const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 4000;

mongoose.connect('mongodb://msimic:pus1kitu@ds115523.mlab.com:15523/userbase', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('connected to database...');
});

app.use('/api', routes);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('front-end/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'front-end', 'build', 'index.html'));
  }); 
}

app.listen(PORT, () => {
  console.log('Server has started...');
});
