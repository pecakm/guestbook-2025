import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  nickname: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

export default mongoose.models.User || mongoose.model('User', userSchema);
