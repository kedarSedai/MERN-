import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default: 0
    },
    createdDate:{
        type:Date,
        default: Date.now()
    }
});

const postMessage = mongoose.model('postMessage', postSchema);
export default postMessage;

