'use strict';

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './backend/config.env' });
const app = require('./backend/app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`DB connecction successful`);
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
