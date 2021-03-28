const Server = require('./classes/Server');
const Database = require('./classes/Database');

new Database()
        .connect()
        .then(() => {
            new Server(3000).start();
        })
        .catch(console.log)