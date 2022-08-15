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

//findByIdAndUpdate with old data
const updateDocument = async (_id) => {
    try {
        const result = await Playlist.findByIdAndUpdate(
            { _id }, { $set: { name: "Node JS" } }
        )
        console.log(result)
    } catch (err) {
        console.log(err);
    }
}
// updateDocument ("62f9e73c4d991cc35285df83")

//findByIdAndUpdate with new data
const updateDocumentNewData = async (_id) => {
    try {
        const result = await Playlist.findByIdAndUpdate(
            { _id },
            { $set: { name: "Node JS" } },
            {
                new: true,
                useFindAndModify: false
            }
        )
        console.log(result)
    } catch (err) {
        console.log(err);
    }
}
updateDocumentNewData("62f9e73c4d991cc35285df83");


