const routes = require("express").Router()
const Admin = require("../models/Admin")

const sha1 = require("sha1")
const jwt = require("jsonwebtoken")


routes.post("/", async (req, res) => {
    try {
        let username = req.body.username;
        let password = sha1(req.body.password);
        let admin = await Admin.find({username})
        if(admin.length !== 0) {
            if(admin[0].password === password) {
                let encrypt_obj = {_id : admin[0]._id}
                let token = jwt.sign(encrypt_obj, "Shop management is for legand")
                res.status(200).send({status : 200, token})
            } else 
            res.status(401).send({ status : 401,error_msg : "Username or email is invalid!"})
        }else
            res.status(401).send({ status : 401,error_msg : "Username or email is invalid!"})
    }catch(error) {
        res.status(500).send({status : 500})
    }
})

routes.get("/", async (req,res)=> {
    try {
        if(req.headers.token) {
            let token = req.headers.token
            let _id = jwt.decode(token, "Shop management is for legand")
            let admin = await Admin.find({_id})
            res.status(200).send({status : 200, data : admin[0]})
        }
        
    }catch(error) {
        res.status(500).send({status : 500})
    }
})


module.exports = routes