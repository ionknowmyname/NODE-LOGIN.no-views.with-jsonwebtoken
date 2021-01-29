const express = require("express");
const mongoose = require('mongoose');
const bodyparser = require("body-parser");

//const EmployeeRoute = require('./routes/employee')
const AuthRoute = require('./routes/auth')



////////////////////  MongoDB Connection ////////////////////////
mongoose.connect('mongodb://localhost:27017/LoginDB', {useNewUrlParser: true, useUnifiedTopology: true}, (err) =>{
    if (!err) {
       console.log("MongoDB connection success"); 
    }else{
        console.log("Error in DB Connection: " + err);
    }
});
//////////////////////////////////////////////////////////////////



const app = express();
app.use(bodyparser.urlencoded({ extended: true }));     // to sort of activate bodyparser
app.use(bodyparser.json());



app.use('/api', AuthRoute)



//////////////////// Server start //////////////////
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{ 
    console.log(`server started on port ${PORT}`); 
});
/////////////////////////////////////////////////////