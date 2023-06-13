const mongoose = require("mongoose")


const connnection = mongoose.connect(`mongodb+srv://deepak:pandey@cluster0.w9fe5jz.mongodb.net/MockFullStack2?retryWrites=true&w=majority`)

module.exports = connnection