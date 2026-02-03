const express = require("express");
const { getUser, getUserById, createUser, deleteUser, editUser } = require("../controller/userController");

const userRoute = express.Router();

userRoute.get("/",getUser);
userRoute.get("/:id",getUserById);
userRoute.post("/create",createUser);
userRoute.put("/update/:id",editUser);
userRoute.delete("/delete/:id",deleteUser);

//userRoute.get("/",(req,res)=>{});
//userRoute.get("/:id",(req,res)=>{});
//userRoute.post("/create",(req,res)=>{});
//userRoute.put("/update/:id",(req,res)=>{});
//userRoute.delete("/delete",(req,res)=>{});

module.exports= userRoute;