import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 3,
        unique: true
    }, 
    content: {
        type: String,
        minLength: 10,
        maxLength: 1500
    }, 
    fulfilled: {
        type: Boolean,
        default: false
    }
})
export const Task = mongoose.model('Task', taskSchema);