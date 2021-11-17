
import * as mongoose from "mongoose"
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email : {
        type : String,
        required : true,
        lowercase : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    }
});

export const User = mongoose.model('user' , UserSchema);
