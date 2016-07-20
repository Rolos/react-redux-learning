import Server from 'socket.io';

export default function startServer(store) {
  const io = new Server().attach(8090);

  //subscribe a listenner to send the state everytime the state changes
  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );
  
  //send the state to the client, everytime he connects to the app
  io.on('connection', (socket) => {
    //responds to an action sent by the client
    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));
  });
}