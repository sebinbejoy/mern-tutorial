import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import Joi from 'joi';
import passwordComplexity from 'joi-password-complexity';

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    empid: {type: String, required: true},
    email: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id},process.env.JWTPRIVATEKEY,{expiresIn:'7d',});
    return token;
}

const User = mongoose.model('user', userSchema);

const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label('First Name'),
        lastName: Joi.string().required().label('Last Name'),
        empid: Joi.string().required().label('Employee id'),
        email: Joi.string().required().label('Email'),
        username: Joi.string().required().label('Username'),
        password: passwordComplexity().required().label('Password'),
    })
    return schema.validate(data);
}

export {User, validate}