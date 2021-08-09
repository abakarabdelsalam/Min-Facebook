const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://abdel:abdel1@cluster0.agkhg.mongodb.net/mabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(async() => {
        console.log('connexion ok !');
    })
    .catch(err => console.log(err));