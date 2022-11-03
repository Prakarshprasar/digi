const {Router} = require("express");
const Ques = require("../models/ques");

const quesRouter =Router()

// quesRouter.post("/ques", (req,res)=>{
//     const feed = new Feed(req.body)
//     feed.save((err,success)=>{
//         try{
//         return res.status(201).send({message: "Product Added", feed : success["_doc"]})
//         }
//         catch(err){
//             return res.status(500).send({message: "Error Occurred"})
//         }   
//     })
// })

// quesRouter.get("/ques", async(req,res)=>{
//     const feed = await  Feed.find({})
//     res.send(feed)
//     // feed.save((err,success)=>{
//     //     try{
//     //     return res.status(201).send({message: "Product Added", feed : success["_doc"]})
//     //     }
//     //     catch(err){
//     //         return res.status(500).send({message: "Error Occurred"})
//     //     }   
//     // })
// })
// quesRouter.delete("/main/:id", async (req, res) => {
//     let Noteid = req.params.id;
//     const { ques_id } = req.body

//     const note = await Feed.findOne({ _id: Noteid })
//     if (note.ques_id === ques_id) {
//         await Feed.deleteOne({ _id: Noteid });
//         return res.send({ "message": "successfully deleted" })
//     } else {
//         return res.send("you are not authorised to do it")
//     }

// });
quesRouter.get("/ques", async(req,res)=>{

    // let query=req.query;
    try{
        if(!req.query){
            let stud=await Ques.find({});
            res.status(200).send(stud);
            return;
        }else{
            let query=req.query;
            let stud=await Ques.find(query);
            res.status(200).send(stud);
            return;
        }
    }
    catch{
        console.log(err)
    }
})

quesRouter.get("/ques/:id", async (req, res) => {
    let Noteid = req.params.id;
    const { ques_id } = req.body

    const note = await Ques.findOne({ _id: Noteid })
    res.send(note)

    

});

// quesRouter.patch("/update/:id",async(req,res)=>{
//     let {id}=req.params
//     let obj=req.body
    
    
//     // console.log("quesId of ques ",todoTobeupdate.quesid)
//     // console.log(obj,"dummy")
    
//     let updatedobj=await Feed.updateOne({_id:id},{$set:{tests:obj.tests}})
//     let objTobeupdate=await Feed.findOne({_id:id})
//     return res.send(updatedobj)

// })

// quesRouter.get("/blogs?category=:id", async (req, res) => {
//     let Noteid = res.query;
    
//     const { ques_id } = req.body

//     const note = await Feed.find(Noteid)
//     res.send(note)
//     // if (note.ques_id === ques_id) {
//     //     await Feed.deleteOne({ _id: Noteid });
//     //     return res.send({ "message": "successfully deleted" })
//     // } else {
//     //     return res.send("you are not authorised to do it")
//     // }

// });
// quesRouter.get("/blogs?author=:id", async (req, res) => {
//     let Noteid = res.query;
    
    
//     const { ques_id } = req.body

//     const note = await Feed.find(Noteid)
//     res.send(note)
//     // if (note.ques_id === ques_id) {
//     //     await Feed.deleteOne({ _id: Noteid });
//     //     return res.send({ "message": "successfully deleted" })
//     // } else {
//     //     return res.send("you are not authorised to do it")
//     // }

// });
// quesRouter.get("/blogs?category=:id1&author=:id2",async(req,res)=>{
//     let Noteid = res.query;
    
//     const { ques_id } = req.body

//     const note = await Feed.find(Noteid)
//     res.send(note)
// })

module.exports = quesRouter;