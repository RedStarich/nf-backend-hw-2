import { CreateChatDto } from './dtos/CreateChat.dot';
import { Chat } from './types/response';
import ChatModel, { IChat } from './models/Chat';
import mongoose from 'mongoose';



// this event service instance shows how to create a event, get a event by id, and get all events with in-memory data
class ChatService {

  
    async getChat(id: string): Promise<IChat | null> {
      return await ChatModel.findById(id).exec();
    }
    async getChats(): Promise<IChat[]> {
      return await ChatModel.find().exec();
    }
  
    async createChat(createChatDto: CreateChatDto): Promise<IChat> {
      const { 
        id, 
        recievers, 
        sender, 
        messages
      } = createChatDto;
        const newChat = new ChatModel({
            id,
            recievers,
            sender,
            messages
    });
        await newChat.save();
        return newChat;
    }
  }
  
  export default ChatService;
  