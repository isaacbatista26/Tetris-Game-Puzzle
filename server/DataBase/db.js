const mongose = require('mongoose');
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const db = async () => {
    try {
        const dataBase = await mongose.connect(`mongodb+srv://${user}:${password}@cluster.scl35la.mongodb.net/?retryWrites=true&w=majority`);
        console.log('Connected to DataBase');
        return dataBase;
    } catch (error) {
        console.log(error)
    }
};

db();