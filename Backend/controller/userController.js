// let users = [];
// let id=1;
const User = require("../models/user");
exports.createUser =async (req,res)=>{
    try{
        const {name,email} = req.body;
        const exist = await User.findOne({email})
        if(exist)
            return res.status(401).json({message:"User already exist"})
        const user = await User.create({
        name,
        email
    })
    res.status(200).json(user);
    }catch(err){
        res.status(500).send(err)
    }
    //const newUser = {
        //id:id++,
        //name,
        //email
    //}
    //users.push(newUser);
    //res.status(200).json(newUser)
}
exports.getUser =async (req,res)=>{
    //res.status(200).json(users);
    try{
        const users=await User.find();
        res.status(200).json(users)

    }catch(err){
        res.status(500).json(err);
    }
}
exports.getUserById =async (req,res)=>{
    //const user=users.find((u)=>u.id===parseInt(req.params.id));
    //if(user===undefined) return res.status(404).json({message:"User not Found"})
    //res.status(200).json(user)
    try{
        const user = await User.findById(req.params.id);
        if(!user)
            return res.status(401).json({message:"User not Found"})
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
}
exports.editUser =async (req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!user) return res.status(404).json({message:"user not found"})
            res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }

    {/*const user = users.find((u)=>u.id===parseInt(req.params.id));
    if(user===undefined)
        return res.status(404).json({message:"User not found"});
    user.name = req.body.name===undefined? user.name:req.body.name;
    user.email = req.body.email || user.email;
    res.status(200).json(user)*/}
}
exports.deleteUser =async (req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id,req.body,{new:true});
        if(!user) return res.status(404).json({message:"user not found"})
            res.status(200).json(user);

    }catch(err){
        res.status(500).json(err);
    }
    {/*const index = users.findIndex((u)=>u.id===parseInt(req.params.id));
    if(index===-1)
        return res.status(404).json({message:"User not Found"});
    users = users.filter((u,i)=>i!==index);
    res.status(200).json({message:"user Deleted Successfully"});
    */}

}