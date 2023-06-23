const fs = require('fs');
const mongoose = require('mongoose')
const Tour = require('../models/tourModel');
const dotenv = require('dotenv')

dotenv.config({path: `${__dirname}/../conf.env`})

const DB = process.env.DATABASE_CONNECTION.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false
    }).then(() => { console.log(`DB connection success!! 👍`)
        }).catch(err=>console.log(err))

// READ JSON FILE
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')); 

// IMPORT DATA INTO DB
const importData = async () => {
    try {
        await Tour.create(tours);
        console.log('Data successfully loaded!')
    } catch(err) {
        console.log(err);
    }
};

// DELETE ALL DATA FROM COLLECTION
const deleteData = async () => {
    try {
        await Tour.deleteMany();
        console.log('Data successfully deleted');
    } catch(err){
        console.log(err);
    }
}

if(process.argv[2] === '--import') {
    importData();
} else if (process.argv[2] === '--delete') {
    deleteData();
}

console.log(process.argv);