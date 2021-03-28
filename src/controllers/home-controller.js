const Item = require('../models/Item');

module.exports = {  
    welcome: (req, res) => { 
        Item.find({}).then(foundItems => {
            console.log(foundItems);
            res.render('home.hbs', {items: foundItems});
        })
        .catch(() => res.status(500).send(`Error!`));
        
    },

    add: (req, res) => {
        res.render('add.hbs');
    },

    delete: (req, res) => {
        res.render('delete.hbs');
    },

    update: (req, res) => {
        res.render('update.hbs');
    },

    addPost: (req,res) => {
        const {title, price} = req.body;

        const item = new Item({title: title, price:price});

        item.save()
            .then(() => console.log("Successfuly add post"))
            .catch(console.log);

            res.redirect('/');
    },

    deletePost: (req,res) => {
        const {title} = req.body;

        Item.deleteOne({title: title})
                                    .then(() => console.log("Successfuly deleted"))
                                    .catch(console.log);
                            
        res.redirect('/');
    },

    updatePost: (req,res) => {

        const {title, newTitle, newPrice} = req.body;

        Item.findOneAndUpdate({title: title}, {title: newTitle, price: newPrice}).then(() => console.log("Successfuly added")).catch(console.log);

        res.redirect('/');
    },
}