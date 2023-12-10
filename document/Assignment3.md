## assignment3
1. I think it might be better to give units for values.
  - If they use standard, yes. It's not necessary...
```
{
  "velocity": 8.5,
  "velocityUnit": "km/s",
  "temperature": -14,
  "temperatureUnit": "celsius"
}
```

2. I think it might be easier with values range.
  - As long as, every values will be good with range and unit, the data model should be changed in a better way.
```
{
  "velocity": {
    "range": {
      "min": 0,
      "max": 500
    },
    "unit": "km/s"
    "value": 8.5,
  },
  "temperature": {
    "range": { 
      "min": -50,
      "max": 50
    },
    "unit": "celsius",
    "value": -14,
  }
}
```

3. Variable name is different between WebSocket and REST API. First letter is uppercase in WebSocket. For that, users need to convert.
```
// REST API
{
  "velocity": 7.795767368991657,
  "altitude": -42163.79553646542,
  "temperature": 2.987342099258612,
  "statusMessage": "Proceeding with planned phase transition.",
  "isAscending": true,
  "isActionRequired": false
}

// WebSocket
{
  "Velocity": -55.555904599045626,
  "Altitude": -42835.297377593175,
  "Temperature": 11.21272590962187,
  "StatusMessage": "Current altitude and velocity within expected parameters.",
  "IsAscending": false,
  "IsActionRequired": false
}
```

4. According to Assignment B, I have to inform through url. I expect it might be much better to send through socket instead of calling.
a. HTTP request need headers whenever we call.
b. 3 way handshake exists as long as it's TCP/IP. Even HTTP/3.0 need 1RTT.(Current spec is HTTP/1.1)
c. Socket is already connected and sending data doesn't need headers. Just new logic is needed on server side.