
import mongoose from 'mongoose';



const postSchema = mongoose.Schema({
    jobTitle: String,
    companyName: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    projectDeliverables: String,
    description: String,
    // price: { type: String, required: true },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})



const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;