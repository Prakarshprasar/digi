const {Schema, model} = require("mongoose")

const QuesSchema = new Schema({
    number:String,
    category:String,
    difficulty:String
    
    
})

const Ques = model("Ques", QuesSchema)

module.exports = Ques