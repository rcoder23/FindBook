const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const BookSchema=new Schema({
    bookname:{
        type:String,
        required:true
    },
    class:{
        type:String,
        required:true
    },
    publication:{
        type:String,
        required:true
    },
    oprice:{
        type:Number,
        default:0
    },
    eprice:{
        type:Number,
        default:0
    },
    address:{
        type:String,
        required:true
    },
    wnum:{
        type:String,
        required:true
    }
    
});


const Book=mongoose.model('Book',BookSchema);

module.exports=Book;