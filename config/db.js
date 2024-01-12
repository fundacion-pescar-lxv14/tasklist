import mongoose from 'mongoose';

const dbConn = (URI, DATABASE) => 
    mongoose.connect(URI)
    .then(() => console.log('conectado con la base de datos ' + DATABASE))
    .catch(err => console.log(err));

export default dbConn;