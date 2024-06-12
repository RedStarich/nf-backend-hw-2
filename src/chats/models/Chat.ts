import mongoose, { Document, Schema } from 'mongoose';

export interface IChat extends Document {
  id: string;
  user1: string;
  user2: string;
}

const ChatSchema: Schema = new Schema({
    id: { type: String, required: true },
    user1: { type: String, required: true },
    user2: { type: String, required: true },
});


export default mongoose.model<IChat>('Chat', ChatSchema);
