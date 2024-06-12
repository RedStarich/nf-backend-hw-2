export interface CreateChatDto {
    id: string;
    recievers: Array<string>;
    sender: string;
    messages: Array<string>;
}  