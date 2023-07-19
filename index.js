const express = require('express');
const path = require('path');
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000; 
const openaiRoutes = require('./routes/openaiRoutes');
const app = express()



app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', openaiRoutes)

app.listen(PORT, () => console.log(`SERVER IS RUNNIG ON PORT: ${PORT}`))