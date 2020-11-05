import express, { Request, Response } from 'express';
import http from 'http';
import socketIO from 'socket.io';

const app = express();
const server = http.createServer(app);

const io = socketIO(server).listen(4000);

interface Join {
  name: string;
  room: string;
}

app.get('/', (req: Request, res: Response) => {
  return res.json({
    message: 'Hello World',
  });
});

io.on('connection', socket => {
  socket.emit('api', {
    user: 'estevaowat',
    date: new Date(),
  });
});

io.on('join', ({ name, room }: Join) => {
  console.log(name, room);
});
