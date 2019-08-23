import * as express from 'express';
import {Response, Request} from 'express';
import * as socketio from 'socket.io';


const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => res.send('Hello World'));

let http = require("http").Server(app);
let io = require("socket.io")(http);


io.on("connection", (socket: any) => {
  console.log("a user connected");
});
app.listen(port, () => console.log('Server is listening'));
