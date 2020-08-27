// MQTT publisher
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1883')
var topic = 'test'
var message = 'Hello World! ---- Hello Amine '

client.on('connect', ()=>{
    setInterval(()=>{
        client.publish(topic, message)
        console.log('Message sent!', message)
    }, 2000)
})