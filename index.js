const express = require('express');
const AppRoutes = require('./routes/hallRoutes.js')
const app = express();

app.use(express.json());
app.use('/',AppRoutes)

app.listen (3001,() => console.log("server listening to http://localhost:3001"));