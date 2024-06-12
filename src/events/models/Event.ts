import mongoose, { Document, Schema } from 'mongoose';

export interface IEvent extends Document {
  id: number;
  name: string;
  description: string;
  date: string;
  location: string;
  duration: string;
}

const EventSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String},
  date: { type: String, required: true },
  location: { type: String, required: true },
  duration: { type: String},
});

export default mongoose.model<IEvent>('Event', EventSchema);
