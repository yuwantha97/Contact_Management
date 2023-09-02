const express = require("express");
const router = express.Router(); 
const {getContact}=
router.route("/").get

router.route("/").post((req,res)=>{
    res.status(200).json({message:"create contacts"});
});

router.route("/").put((req,res)=>{
    res.status(200).json({message:`update contact for ${req.params.id}`});
});

router.route("/:id").delete((req,res)=>{
    res.status(200).json({message:`delete contact for ${req.params.id}`});
});


module.exports =router;