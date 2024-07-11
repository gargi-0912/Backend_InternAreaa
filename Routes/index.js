const express=require("express");

const router=express.Router();
// const adminUsername='admin'
// const adminPassword='admin'

const ApplicationRoute=require("./ApplicationRoute")
const intern=require("./internshipRout")
const job=require("./jobRoute")
const admin=require("./admin")
// // For admin login
// router.post("/adminLogin", (req,res)=>{
//     const {username,password}=req.body
//     if (username===adminUsername || password===adminPassword) {
//         res.send("Admin is here")
//     }
//     else{
//         res.statusCode(401).send("Unauthrized")
//     }
// })
router.get("/",(req,res)=>{
    res.send("this is backend");
})
router.use('/application',ApplicationRoute);
router.use('/internship',intern)
router.use('/job',job)
router.use('/admin',admin)
 module.exports=router;