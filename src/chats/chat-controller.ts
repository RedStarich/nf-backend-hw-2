import { Request, Response } from 'express';
import { CreateChatDto } from './dtos/CreateChat.dot';
import ChatService from './chat-service';


class ChatController {
    private chatService : ChatService;

    constructor(chatService : ChatService){
        this.chatService = chatService;
    }

    createChat = async (req:Request, res:Response): Promise<void> => {
        try {
            const createChatDto: CreateChatDto = req.body;
            const chat = this.chatService.createChat(createChatDto);
            res.status(201).json(chat);

        } catch (error: any) {
            res.status(500).send({ error: error.message });
        }
    }

    getChats  = async (req:Request, res:Response): Promise<void> =>{
        try{
            const chats = await this.chatService.getChats();
            res.status(200).json(chats);
        }catch (error: any) {
            res.status(500).json({ error: error.message });
          }
    }

    getChatById = async (req:Request, res:Response): Promise<void> =>{
        try{
            const {id} = req.params;
            const chat = await this.chatService.getChatById(id);
            if(!chat){
                res.status(404).json({error:"Event not found"});
                return;
            }else{
                res.status(200).json(chat);
            }
        }catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default ChatController;