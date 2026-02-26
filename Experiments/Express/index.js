const express = require('express') //import statement
const app = express(); //assign express to app
const port = 3000; //taken a port number
//by default port number for express
// "/" --> is a route

app.get("/",(req, res) => {
    // res.send("Hello");
    const time = Date();
    res.json({
        message : "Hello",
        time1 :time
    })

})

app.listen(port, () => {
  console.log(`Server started at ${port}`)
  
})