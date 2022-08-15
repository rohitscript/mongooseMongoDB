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
    videos: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error("Videos Count Should Not Be Negative");
            }
        }
    },
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

//Custom Validator Videos Not Be In negative
const createPlaylist = async () => {
    try {
        const reactjsPlaylist = new Playlist({
            name: "React FS ",
            ctype: "frontend",
            videos: -80,
            author: "Rohit",
            active: true
        })
        const result = await reactjsPlaylist.save();
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}
createPlaylist();