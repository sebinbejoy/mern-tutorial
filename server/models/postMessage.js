import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    selectedFile: String,
    approved : {
        type: Boolean,
        default: false,
    },
    createdAt:{
        type: Date,
        default: new Date,
    },
});

const PostMessage = mongoose.model('PostMessage', PostSchema);
export default PostMessage;