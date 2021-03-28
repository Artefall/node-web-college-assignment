const mongoose = require('mongoose');

class Database{
    connect(){
        return mongoose.connect('mongodb://localhost/college', {useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => console.log(`Successfuly connected to DB!`))
            .catch(err => console.log(`Error, while connecting to database. Message: ${err}`));
    }

}

module.exports = Database;
