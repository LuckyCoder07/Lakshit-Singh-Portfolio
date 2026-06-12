import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String, // e.g. Frontend, Backend, Languages
    required: true,
  },
  iconUrl: {
    type: String,
  }
}, { timestamps: true });

export default mongoose.model('Skill', skillSchema);
