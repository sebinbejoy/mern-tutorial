import bugDetails from "../models/bugDetails.js";

export const getBugs = async (req,res) => {
    try{
        const bugs= await bugDetails.find();
        res.status(200).json(bugs);
    }catch(error){
        res.status(404).json( {message: error.message});
    }
}

export const createBug = async(req,res) =>{
    const bug=req.body;
    const newBug=new bugDetails(bug);
    try {
        await newBug.save();
        res.status(201).json(newBug);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}