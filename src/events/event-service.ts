import { CreateEventDto } from './dtos/CreateEvent.dot';
import { Event } from './types/response';
import EventModel, { IEvent } from './models/Event';
import mongoose from 'mongoose';



// this event service instance shows how to create a event, get a event by id, and get all events with in-memory data
class EventService {

  
    async getEventById(id: string): Promise<IEvent | null> {
      return await EventModel.findById(id).exec();
    }
    async getEvents(): Promise<IEvent[]> {
      return await EventModel.find().exec();
    }
  
    async createEvent(createEventDto: CreateEventDto): Promise<IEvent> {
      const { id, name, description, date, location, duration } = createEventDto;
        const newEvent = new EventModel({
            id,
            name,
            description,
            date: new Date(date),
            location,
            duration,
    });
        await newEvent.save();
        return newEvent;
    }
  }
  
  export default EventService;
  