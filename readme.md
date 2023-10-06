# Socket App
Bulding a web socket terminal based  application using the base network library in node js (net module).

How can web socket work??
in socket application everytime our server make a connection to client it will generate a duplex stream object. This is the secret how server and client can intereact with each other. The duplex stream allow us to read and write to stream. The process of write or read is done by an event. So yes, by default this stream object used event module from nodejs

Wow to run the project?
- run server.js in folder socket-app
- and then run client.js, you can run more than one client

![Alt text](<WhatsApp Image 2023-10-06 at 09.09.07_e35e6a08.jpg>)

What left to be build?
- identifying the current user
- notifying when user left the chat room