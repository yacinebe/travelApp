mongoose=require('mongoose')
const Schema = mongoose.Schema;

const transportSchema= new Schema({
    name : {type : String, require : true},
    start_date: {type: Date}, 
    end_date: {type: Date}, 
    start_address : {
        streetNb : Number,
        streetName: String,
        zipcode: String,
        city: String,
        country: String,
    },
    end_adress: {
        streetNb : Number,
        streetName: String,
        zipcode: String,
        city: String,
        country: String,
    },
    booking : {
        ref : {type : String},
        price : {type : Number}, 
        link: {type: String}, 
    },  
    type : {type : String},   
    budget : {type : String, emum : ["$", "$$", "$$$", "$$$$"]},
    recommendation: {type: Schema.Types.ObjectId , ref: "recommendationModel"},
})

const transportModel=mongoose.model("transportModel", transportSchema)
module.exports=transportModel; 