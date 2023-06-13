const express = require('express')
const JobModel = require('../Model/job.model')

const JobRoute = express.Router()

JobRoute.get("/list",async(req,res)=>{
      try {
        const data = await JobModel.find()
        res.send({"data":data})
      } catch (error) {
         res.send({"msg" : error}) 
      }
})

JobRoute.post("/post",async(req,res)=>{
    // console.log(req.body)
   try {
     let obj = new JobModel(req.body)
    //  console.log(obj)
     await obj.save()
     res.send({"msg" : "Job is Posted"})
   } catch (error) {
      res.send({"msg" : error})
   }
})

JobRoute.get("/search",async(req,res)=>{
     const {language} = req.body
     try {
        const data = await JobModel.find({language : language})
        res.send({"data":data})
     } catch (error) {
        res.send({"msg" : error})
     }
})

module.exports = JobRoute