const express = require('express');
const todoRouter = require('./routes/todo.routes')


const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use('/api', todoRouter);


app.listen(PORT, () => console.log(`Server stared on port: ${PORT}`));
