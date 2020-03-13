const mongoose = require('mongoose');

const url = 'mongodb+srv://ommej_admin:OmMej2020@horizon-jqud0.gcp.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(url, {useNewUrlParser: true});
