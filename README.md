Mosca   Build Status  Coverage Status
MOSCA

NPM

NPM

This project is UNMAINTAINED. Please move to Aedes
About
Mosca is a node.js mqtt broker, which can be used:
Standalone
Embedded in another Node.js application
Features
MQTT 3.1 and 3.1.1 compliant.
QoS 0 and QoS 1.
Various storage options for QoS 1 offline packets, and subscriptions.
Usable inside ANY other Node.js app.
version 2.0.0+ targets node v6, v4 and v0.12
version 1.0.0+ targets node v6, v5, v4 and v0.12, with partial support for node v0.10.
Quickstart
Standalone
npm install mosca pino -g
mosca -v | pino
Embedded
npm install mosca --save
Show me some code:

var mosca = require('mosca');

var ascoltatore = {
  //using ascoltatore
  type: 'mongo',
  url: 'mongodb://localhost:27017/mqtt',
  pubsubCollection: 'ascoltatori',
  mongo: {}
};

var settings = {
  port: 1883,
  backend: ascoltatore
};

var server = new mosca.Server(settings);

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

// fired when a message is received
server.on('published', function(packet, client) {
  console.log('Published', packet.payload);
});

server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running');
}
All the info to get you started is gathered in this wiki page

Also there is an example using Redis

How to's/Tutorials
All to be found on our repository wiki section.

OR

read the dox generated documentation.

Learn more
See the slides of my talk "MQTT and Node.js - Messaging in the Internet of Things".

You can find a test version of mosca at test.mosca.io. You can use ws://test.mosca.io/ to connect to the WebSocket tunnel. This is powered by the docker image.

If you find Mosca useful, consider supporting the project by buying a support package from me by writing an email to hello@matteocollina.com.

Check out our showcase wiki page! Feel free to add yourself! :)

Security Issues
Mosca sits between your system and the devices: this is a tough role, and we did our best to secure your systems. However, you might find a security issue: in that case, email @mcollina at hello@matteocollina.com.

Feedback
Use the issue tracker for bugs. Tweet us for any idea that can improve the project. Chat with us on Mosca's room on Gitter.

Links
GIT Repository
Mosca Documentation
Ascoltatori
MQTT protocol
MQTT.js
Authors
Matteo Collina

Logo
Sam Beck

LICENSE - "MIT License"
Copyright (c) 2013-2016 Matteo Collina, http://matteocollina.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
