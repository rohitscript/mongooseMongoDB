//Require the Package
const mongoose = require("mongoose")

//Connection Creation & database Creation
mongoose.connect("mongodb://localhost:27017/db",
    { useNewUrlParser: true },
    { useUnifiedParser: true }
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
//insert many documents usin one line
const createManyPlaylist=async()=>{
    try{
        const reactPlaylist=new Playlist({
            name:"React JS",
            ctype:"frontend",
            videos:80,
            author:"Rohit",
            active:true
        })
        const jsPlaylist=new Playlist({
            name:"JS",
            ctype:"frontend",
            videos:80,
            author:"Rohit",
            active:true
        })
        const mongoPlaylist=new Playlist({
            name:"Mongo",
            ctype:"frontend",
            videos:80,
            author:"Rohit",
            active:true
        })
        const expressPlaylist=new Playlist({
            name:"express",
            ctype:"frontend",
            videos:80,
            author:"Rohit",
            active:true
        })
        const result=await Playlist.insertMany([jsPlaylist,mongoPlaylist,expressPlaylist,reactPlaylist]);
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}
createManyPlaylist();