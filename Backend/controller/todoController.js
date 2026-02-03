let todos=[];
let id=1;
exports.getTodo = (req,res)=>{
    {/*res.send("Get working")*/}
    res.status(200).json(todos)
};

exports.createTodo=(req,res)=>{
    {/*res.send("Post working")*/}
    const {task}=req.body;
    const newTodo = {
        id:id++,
        task,
        Completed:false
    }
    todos.push(newTodo)
    res.json(newTodo)
};

exports.updateTodo=(req,res)=>{
   {/* res.send("Put working")*/}
   const todo=todos.find((t)=>t.id===parseInt(req.params.id));
  // console.log(todo)
  if(!todo){
    res.json({message:"Todo not found"})
  }
  todo.task=req.body.task || todo.task;
  todo.Completed = req.body.Completed===undefined?todo.Completed:req.body.Completed
  res.json(todo)
};

exports.deleteTodo=(req,res)=>{
    //res.send("Delete working")
   const index = todos.findIndex((t)=>t.id===parseInt(req.params.id))
   if(index===-1)
        return res.status(404).json({message:"Task not found"})
    todos=todos.filter((_,i)=>i!==index);
    res.status(200).json({message:"Task Deleted Sucessfully"})
};


//api/todo/  ->in the postman
//api/todo/create
//api/todo/update
//api/todo/delete/1