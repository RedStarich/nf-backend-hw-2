import { Router } from 'express';
import ChatController from './chat-controller';
import ChatService from './chat-service';

//in order to provide our frontend with the user data, we need to specify user routes

const chatRouter = Router();

const chatService = new ChatService();
const chatController = new ChatController(chatService);

chatRouter.get('/events/', chatController.getChats);
chatRouter.post('/events/', chatController.createChat);
chatRouter.get('/events/:id', chatController.getChatById);

export default chatRouter;
