// MQTT publisher
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:5000')
// var client = mqtt.connect('https://mqtt-broker-c1.herokuapp.com/')
var topic = 'project-x'
var message = 'hi sone!'

client.on('connect', ()=>{
    setInterval(()=>{
        client.publish(topic, message)
        console.log('Message sent!', message)
    }, 5000)
})
