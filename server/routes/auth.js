import express from 'express';
import Joi from 'joi';
import {User} from '../models/user.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/', async (req, res) => {
    try{
        /*console.log('flag1');
        const error = validate(req.body);
        console.log('flag2');

        if(error)
            return res.status(400).send({message: error.details[0].message});
        console.log('flag3');*/

        const user = await User.findOne({username: req.body.username});
        //console.log('flag4');
        if(!user)
            return res.status(401).send({message: 'Invalid Username'});
        //console.log('flag5');

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        //console.log('flag6');

        if(!validPassword)
            return res.status(401).send({message: 'Invalid Password'});
        //console.log('flag7');
        
        const token = user.generateAuthToken();
        //console.log('flag8');
        
        res.status(200).send({data: token, message:'Logged in successfully',id: user._id});
    }catch(error){
        res.status(500).send({message: 'Internal Server Error'});
    }
})

const validate = (data) => {
    const schema = Joi.object({
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password'),
    });
    return schema.validate(data);
}

export default router;