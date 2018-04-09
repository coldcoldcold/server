import express from 'express';

const app = express();

app.get('/', (req, res, next) => {
    res.send('server index');
})
app.set('port', process.env.PORT || 3000);
app.listen('3000');