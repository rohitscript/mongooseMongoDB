//Require the Package
const mongoose = require("mongoose")

//Connection Creation & database Creation
mongoose.connect("mongodb://localhost:27017/db",
    { useNewUrlParser: true },
    { useUnifiedTopology: true },
    { useCreateIndex: true },
    { useFindAndModify: true }
).then(() =>
    console.log("Connection successfull....")).catch((err) => { console.log(err) });

//Schema Define
//A Mongoose Schema defines the structure of the document,default value,validators etc.
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

//Mongoose Model 
//A Mongoose model is a Wrapper on the Mongoose schema.

//A Mongoose Schema defines the structure of the document,default value,validators etc.
//whereas, a mongoose model provides an interface to the database for creating, queryng,updating deleting records etc.


//Collection Creation
const Playlist = new mongoose.model("Playlist", playlistSchema);

//Camparison Query Operator
const getDocument = async () => {
    try {
        const result = await Playlist.find(
            { videos: { $gte: 50 } }).select({ name: 1 })
        console.log(result)
    } catch (err) {
        console.log(err);
    }
}
getDocument();

//Camparison Query Operator
// $eq --> equal to
// $gt --> greater than
// $gte --> greater than equal to
// $in --> in
// $lt --> less than
// $lte --> less than equal to
// $ne --> not equal to
// $nin -->not in
