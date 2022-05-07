const tus = require('tus-node-server');
const cors = require('cors');

const server = new tus.Server();
server.datastore = new tus.FileStore({
    path: '/files'
});

const express = require('express');
const app = express();

app.use(cors())

const uploadApp = express();
uploadApp.all('*', server.handle.bind(server));
app.use('/uploads', uploadApp);

const host = '127.0.0.1';
const port = 1080;
app.listen(port, host);