import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import api from './routes';

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api', api);
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

app.get('*', (res, req) =>{
    res.sendFile(path.resolve(__dirname, '../../public/index.html'));
});

app.get('/', (req, res) =>{
    res.send('hello world');
});

app.listen(port, () =>console.log('listening on port', port ));
