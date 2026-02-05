let todos=[];
let id=1;
const Todo = require("../models/todo");
//exports.getTodo = (req,res)=>{
    {/*res.send("Get working")*/}
   // res.status(200).json(todos)
//};
exports.getTodo = async(req,res)=>{
    try{
        const todos= await Todo.find();
        res.status(200).json(todos);

    }catch(err){
        res.status(500).send(err);
    }
};

exports.createTodo=async(req,res)=>{
    {/*res.send("Post working")*/}
    try{
        const {task}=req.body;
        if(task===undefined)
            return res.status(401).json({message:"Task not founfd"})
        const todos= await Todo.create({
            task,
            completed:false
        })
        res.status(201).json(todos);
    
    }catch(err){
        res.status(500).send(err);
    }

   {/*} const newTodo = {
        id:id++,
        task,
        Completed:false
    //}
    todos.push(newTodo)
    res.json(newTodo)*/}

};

exports.updateTodo=async(req,res)=>{
     res.send("Put working")
   //const todo=todos.find((t)=>t.id===parseInt(req.params.id));
  // console.log(todo)
//   try{
//     const todo=await Todo.findById(req.params.id)
//     if(!todo){
//         //res.json({message:"Todo not found"})
//         res.status(401).json({message:"Todo not found"})
//   }
//   todo.task=req.body.task || todo.task;
//   todo.Completed = req.body.Completed===undefined?todo.Completed:req.body.Completed
//   await todo.save();
//   //res.json(todo)
//   res.status(200).json(todo)
// }catch(err){
//     res.status(500).send(err);
//}
};

exports.deleteTodo = async (req, res) => {
    try {
    // const todo = await Todo.findById(req.params.id);
    //     if(!todo){
    //         res.status(401).json({message:"Todo not found"});
    //     }
    // todo.task= req.body.task || todo.task;
    // todo.completed= req.body.completed===undefined ? todo.completed : req.body.completed;
    // await todo.save();
    // res.status(200).json(todo);
    const todo = await Todo.findByIdAndDelete(req.params.id,req.body,{new:true});
    res.status(200).json(todo);
    } catch (err) {
        res.status(500).send(err);
    }
};
   {/*const index = todos.findIndex((t)=>t.id===parseInt(req.params.id))
   if(index===-1)
        return res.status(404).json({message:"Task not found"})
    todos=todos.filter((_,i)=>i!==index);
    res.status(200).json({message:"Task Deleted Sucessfully"})
   */}


//api/todo/  ->in the postman
//api/todo/create
//api/todo/update
//api/todo/delete/1