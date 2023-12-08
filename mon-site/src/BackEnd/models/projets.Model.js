const mongoose = require('mongoose');
var projetSchema= new mongoose.Schema({
    titre:{
        type: String
        // require:true
    },
    description:{
        tupe: String
        // require:true
    }
});
mongoose.model('Projets', projetSchema);