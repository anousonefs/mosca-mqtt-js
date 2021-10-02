// MQTT subscriber
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:5000')
// var client = mqtt.connect('https://mqtt-broker-c1.herokuapp.com/')
var topic = 'project-x'

client.on('message', (topic, message)=>{
    message = message.toString()
    console.log(message)
})

client.on('connect', ()=>{
    client.subscribe(topic)
})
