import io from 'socket.io-client';

export default function (socketUrl, customData, path, _protocolOptions, query) {
  const options = path ? { path } : {};
  if (query) options.query = query;
  const socket = io(socketUrl, options);
  socket.on('connect', () => {
    console.log(`connect:${socket.id}`);
    socket.customData = customData;
  });

  socket.on('connect_error', (error) => {
    console.log(error);
  });

  socket.on('disconnect', (reason) => {
    console.log(reason);
  });

  return socket;
}
