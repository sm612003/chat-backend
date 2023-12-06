
const express= require('express');
const path = require('path');
const { Socket } = require('socket.io');
const app =express();
const http=require('http').Server(app);
const port =process.env.PORT || 8080

  
  //atached http server to the socket io
  const io=require('socket.io')(http);

  
//route
app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'src/index.html'))
})

// new connection
io.on('connection',socket=>{
    console.log('a user connected')

    socket.on('disconnect',()=>{
      console.log("a user disconnected")
    })
    socket.on('message',msg=>{
      console.log("client message"+msg)
    })
//emit
socket.emit("server", "recieve from server");

})
http.listen(port,()=>{
  console.log(`app listening on port ${port}`)
})
