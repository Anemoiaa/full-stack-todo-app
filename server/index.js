const express = require('express');
const todoRouter = require('./routes/todo.routes')


const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use('/api', todoRouter);


app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
