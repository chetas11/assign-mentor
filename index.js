const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const AddData = require("./AllData")
const MentorDetails = require("./MentorDetails")
let UnassignedStudents = [];

app
.use(bodyParser.json())
.get("/", (req, res)=>{                      //Fetches all the Data
    res.status(200).json({
        data:AddData
    })
})
.get("/mentors", (req, res)=>{                      //Fetches all the Mentors
    res.status(200).json({
        data:MentorDetails
    })
})
.post("/createMentor", (req, res)=>{                      //Fetches all the Data
    req.body.MentorDetails.forEach((mentor) => {
        MentorDetails.push(mentor);
        res.end("Added Successfully")
    });
})
.post("/createStudent", (req, res)=>{                      //Fetches all the Data
    req.body.StudentDetails.forEach((student) => {
        student.MentorName = "NA";
        AddData.push(student);
        res.send("Added Successfully")
    });
})
.patch("/AssignMentor", (req, res)=>{
    
    req.body.SelectedMentor.forEach((mentor)=>{
        AddData.filter((student)=>{
        if(student.MentorName === "NA"){
            student.MentorName = mentor.Name
        }
    }) 
    })                                            //Fetches all the Data
    // console.log(UnassignedStudents)
    res.end("Completed")
})

.post("/SpecificMentor",(req,res)=>{                      //Fetches all the Available Hall to book
    req.body.SelectedMentor.forEach((mentor)=>{
    res.status(200).json({
        Filtered: AddData.filter(
            (data)=> data.MentorName === mentor.Name
        )
    })  
    })
})

.patch("/AssignSingleMentor", (req, res)=>{
    req.body.Details.forEach((data)=>{
        AddData.filter((student)=>{
        if(student.Name === data.studentName){
            student.MentorName = data.MentorName
        }
    }) 
    })                                            //Fetches all the Data
    res.end("Completed")
})

.listen(process.env.PORT)