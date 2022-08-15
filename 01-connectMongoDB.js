//Require the Package
const mongoose = require("mongoose")

//Connection Creation & database Creation
mongoose.connect("mongodb://localhost:27017/db",
    { useNewUrlParser: true },
    { useUnifiedParser: true }
).then(() =>
    console.log("Connection successfull....")).catch((err) => { console.log(err) });