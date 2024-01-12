import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minLength: 4,
    maxLength: 20,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    minLength: 8,
    required: true,
    unique: true,
  },
  password: {
      type: String,
      required: true,
  }
})
const User = mongoose.model('User', userSchema);
export default User;