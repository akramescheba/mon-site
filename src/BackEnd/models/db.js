const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:admin@cluster0.tjtyqkb.mongodb.net/Projets',
{ useNewUrlParser: true },(err) => {
    if (!err) {
        console.log('mongodb est connecté')
    } else {
        console.log('erreur')
    }
});
