import 'dotenv/config';
import express, { Request, Response } from 'express';
import http from 'http';
import { Server } from 'socket.io';
import path from 'path';
import connectDB from './db';
import globalRouter from './global-router';
import { logger } from './logger';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(logger);
app.use(express.json());
app.use('/api/v1/', globalRouter);

// Serve static files
app.use(express.static(path.join(__dirname)));

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server runs at http://localhost:${PORT}`);
});

app.get('/', (req: Request, res: Response) => {    
  res.sendFile(path.join(__dirname, 'index.html'));
  console.log('executed');
});

const io = new Server(server);

io.on('connection', (socket) => {
  console.log('connected');

  socket.on('disconnect', () => {
    console.log('disconnected');
  });

  socket.on('send message', (data) => {
    console.log(data);
    io.sockets.emit('add message', { message: data.message, name: data.name});
  });
});
