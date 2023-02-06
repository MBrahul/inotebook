const mongoose = require('mongoose');
const mongoURL ='mongodb+srv://inotebook:inotebook@cluster0.xteaiks.mongodb.net/inotebook?retryWrites=true&w=majority';

const connectToMongo=()=>{
    mongoose.connect(mongoURL,()=>{
        console.log('connected to Mongo successfully');
    })
};

module.exports = connectToMongo;