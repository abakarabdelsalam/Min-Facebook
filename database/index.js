const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://abdel:@cluster0.agkhg.mongodb.net/miniface?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(async() => {
        console.log('connexion ok !');
    })
    .catch(err => console.log(err));