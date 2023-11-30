const mongoose = require('mongoose')

const connectDB = async () =>{
    const conn = await mongoose.connect('mongodb+srv://tickle:tickle123@cluster0.2riz5h5.mongodb.net/mgmnt_db'
    )
    .then(()=>{
        console.log('mongodb connected')
    })
}

module.exports = connectDB;