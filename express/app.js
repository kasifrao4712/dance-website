const express = require("express")
const app = express();
const path = require(`path`);
const fs = require(`fs`);
const port = 80;

app.use(`/static`, express.static(`static`))







//  set the template engine as pug
app.set(`view engine`,`pug`)


// set the views directory
app.set(`views`, path.join(__dirname, `views`))





 app.get("/",(req,res)=>{
     const params = {"title": `pubg is the best game `}
    
   res.status(200).render('index.pug', params )
 });





 







app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}` )
});

