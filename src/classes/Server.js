const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const path = require('path');

const homeRouter = require('../routes/home-router');

class Server {
    constructor(port){
        this.PATH_TO_VIEWS = path.join(__dirname, "../views" );

        this.app = express();
        this.port = port;

        this.app.use(bodyParser.urlencoded({ extended: false }));

        hbs.registerPartials(this.PATH_TO_VIEWS);
        this.app.set('view engine', 'hbs');
        this.app.set('views', this.PATH_TO_VIEWS);

        this.app.use(express.static(this.PATH_TO_VIEWS));
        this.app.use('/', homeRouter);

    }

    start(){
        this.app.listen(this.port, () => console.log(`Server started in port ${this.port}`));
    }
}

module.exports = Server;