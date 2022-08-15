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
    author: {
        type: String,
        uppercase: true,
    },
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

//Validator
const createPlaylist = async () => {
    try {
        const reactjsPlaylist = new Playlist({
            name: "React  2 JS ",
            ctype: "frontend",
            videos: 80,
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

//built in validation
/* 
//STRING

lowercase:boolean
uppercase:boolean
trim:boolean
match:RegExp
enum:["FrontEnd" , "BackEnd", "Database"]
minlength:Number
maxlength:Number      [2,"Message"]

//NUMNBER

min:Number
max:Number
enum:Array

//DATE

min:Date
max:Date

*/

/*
String

lowercase: boolean, whether to always call .toLowerCase() on the value
uppercase: boolean, whether to always call .toUpperCase() on the value
trim: boolean, whether to always call .trim() on the value
match: RegExp, creates a validator that checks if the value matches the given regular expression
enum: Array, creates a validator that checks if the value is in the given array.
minLength: Number, creates a validator that checks if the value length is not less than the given number
maxLength: Number, creates a validator that checks if the value length is not greater than the given number
populate: Object, sets default populate options

Number

min: Number, creates a validator that checks if the value is greater than or equal to the given minimum.
max: Number, creates a validator that checks if the value is less than or equal to the given maximum.
enum: Array, creates a validator that checks if the value is strictly equal to one of the values in the given array.
populate: Object, sets default populate options

Date

min: Date, creates a validator that checks if the value is greater than or equal to the given minimum.
max: Date, creates a validator that checks if the value is less than or equal to the given maximum.
expires: Number or String, creates a TTL index with the value expressed in seconds.

ObjectId

populate: Object, sets default populate options
*/