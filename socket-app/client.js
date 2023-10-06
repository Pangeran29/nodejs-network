const net = require('net');
const readLine = require('readline/promises');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

const clearLine = (dir) => {
  return new Promise((resolve, reject) => {
    process.stdout.clearLine(dir, () => {
      resolve();
    });
  });
}

const moveCursor = (dx, dy) => {
  return new Promise((resolve, reject) => {
    process.stdout.moveCursor(dx, dy, () => {
      resolve();
    });
  });
}

const client = net.createConnection(
  { host: '127.0.0.1', port: 3008 },
  async () => {
    const sendMsg = async () => {
      const message = await rl.question('enter message > ');
      // move cursor one line up
      // clear all content in current cursor position
      // send a new data to the stream (duplex) 
      await moveCursor(0,-1);
      await clearLine(0)
      client.write(message);
    }
    sendMsg();

    client.on('data', async (data) => {
      // create new line
      // move cursor to new line
      // clear all content on that line
      // logging the message from server
      // triger method to send new message   
      console.log();
      await moveCursor(0,-1);
      await clearLine(0);
      console.log(data.toString());
      await sendMsg();
    });
  }
)

client.on('close', () => {
  console.log('server closed');
});

client.on('end', () => {
  console.log('server end');
});

