const mongoose = require('mongoose')
const dotenv = require('dotenv');
const app = require('./app.js');

dotenv.config({path: './conf.env'})

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



// const datos = new Tour({
//     name:'The Ocean Adventure',
//     price: 460
// })

// datos.save().then(doc => {
//     console.log(doc);
// }).catch(err=> console.log(`ERROR 💩 `, err))

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`App running on ${port} 👋 ...`)
})

app.listen()
