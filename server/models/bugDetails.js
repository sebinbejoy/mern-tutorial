import mongoose from 'mongoose';

const bugSchema = new mongoose.Schema({
    name: String,
    email: String,
    app: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date,
    },
    description: String
});

const bugDetails = mongoose.model('bugDetails', bugSchema);
export default bugDetails;