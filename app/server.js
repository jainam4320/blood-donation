var express=require('express')
var bodyparser=require('body-parser')
var app=express()
app.use(bodyparser.json())

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
//all db things are here
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/blood", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
var registerschema = new mongoose.Schema({
    fname: String,
    mname: String,
    lname:String,
    gender: String,
    dob: String,
    pass: String,
    bgroup: String,
    weight: String,
    height: String,
    ddate: String,
    hemo: String,
    age: String,
    flat: String,
    street: String,
    city: String,
    state: String,
    country: String,
    pincode: String,
    connum: String,
    email: String,
    diabetes: String,
    heart: String,
    cancer: String,
    jaundies: String,
    malaria: String,
    btransform: String,
    ptattoo: String,
    pragnancy: String,
    hepatitisb: String,
    tb: String,
    cjd: String,
    hivaids: String,
    ivdrug: String,
    odiseases: String
});// {collection : 'user'});
var requestschema = new mongoose.Schema({
    pname: String,
    gender: String,
    bgroup: String,
    bags: String,
    hname: String,
    email: String,
    connum: String,
    city: String,
    address: String,
});
var register = mongoose.model("register", registerschema);
var request = mongoose.model("request", requestschema);
//var user=require('./schemas/users')

app.post('/registeruser',async (req,res)=>{
    console.log("In server")
    new register({ 
        fname: req.body.fname,
        mname: req.body.mname,
        lname: req.body.lname,
        gender: req.body.gender,
        dob: req.body.dob,
        pass: req.body.pass,
        bgroup: req.body.bgroup,
        weight: req.body.weight,
        height: req.body.height,
        ddate: req.body.ddate,
        hemo: req.body.hemo,
        age: req.body.age,
        flat: req.body.flat,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        pincode: req.body.pincode,
        connum: req.body.connum,
        email: req.body.email,
        diabetes: req.body.diabetes,
        heart: req.body.heart,
        cancer: req.body.cancer,
        jaundies: req.body.jaundies,
        malaria: req.body.malaria,
        btransform: req.body.btransform,
        ptattoo: req.body.ptattoo,
        pragnancy: req.body.pragnancy,
        hepatitisb: req.body.hepatitisb,
        tb:  req.body.tb,
        cjd: req.body.cjd,
        hivaids: req.body.hivaids,
        ivdrug: req.body.ivdrug,
        odiseases: req.body.odiseases
    }).save(function(err,data){
        if(err)
        {
            console.log("Problem While Sending The Data");
            res.status(500).json({
                isSucceed: false
            });
        }
        else{
            console.log(data)
            console.log("Data Inserted Sucessfully")
            res.status(200).json({
                isSucceed: true
            });
        }
    })
})

app.post('/alreadylogin',async (req,res)=>{
    const email = req.body.email
    const resp=await register.findOne({email})
    console.log('In Server')
    var emailregister
    if(resp)
    {
        console.log('Old User')
        res.status(200).json({
            emailregister: true
        });
    }
    else
    {
        console.log('New User')
        res.status(200).json({
            emailregister: false
        });
    }
})

app.post('/updatepassword',async (req,res)=>{
    var updated
    const email = req.body.email
    const pass = req.body.pass
    await register.updateOne(
        {email: email},
        { $set: {pass: pass} },
        function(err){
            if(err) {
                console.log('Password Not Updated');
                res.status(500).json ({
                    updated: false
                });
            } else {
                console.log('Password Updated');
                res.status(200).json ({
                    updated: true
                });
            }
        }
    )
})  

app.post('/userlogin',async (req,res)=>{
    var ulogin
    const email = req.body.email
    const pass = req.body.pass
    const resp=await register.findOne({email,pass})
    console.log('In Server')
    if(resp)
    {
        console.log('Login Success')
        res.status(200).json({
            ulogin: true
        });
    }
    else
    {
        console.log('Login Fail')
        res.status(200).json({
            ulogin: false
        });
    }
})
    
app.post('/sendmail',async (req,res)=>{
    const email = req.body.email
    const otp = req.body.otp
    const nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        secure: false,
        service: 'gmail',
        host: 'smtp.gmail.com',
        type: 'login',
        auth:
        {
            user: "lifesavers1104@gmail.com",
            pass: "savelife@1104"
        }   
    });

    const mailOptions = {
        from: "lifesavers@gmail.com",
        to: email,
        subject: 'OTP for Password Reset',
        html: '<h1>' + otp + '</h1><br><h2>is your One Time Password(OTP) for Resetting the Password</h2>'
    }

    transporter.sendMail(mailOptions, function(err, info) {
    if(err) {
        console.log("Error while sending the email : " + err);
    } else {
        console.log("An OTP has been sent to the provided email address");
    }
    })
})

app.post('/newrequest',async (req,res)=>{
    console.log("In server")
    var isSucceed
    new request({ 
        pname: req.body.pname,
        gender: req.body.gender,
        bgroup: req.body.bgroup,
        bags: req.body.bags,
        hname: req.body.hname,
        email: req.body.email,
        connum: req.body.connum,
        city: req.body.city,
        address: req.body.address
    }).save(function(err,data){
        if(err)
        {
            console.log("Problem While Sending The Data");
            res.status(500).json({
                isSucceed: false
            });
        }
        else{
            console.log(data)
            console.log("Data Inserted Sucessfully")
            res.status(200).json({
                isSucceed: true
            });
        }
    })
})

app.post('/getrequest',async (req,res)=>{
    console.log("In Get Requests");
    request.find({}, function(err,viewlist){
        if(err) {
            console.log("Error While Getting Data");
            res.send(400);
        } else {
            console.log(viewlist);
            res.send(viewlist);
        }
    });
})

app.post('/getuserinfo', async (req,res)=> {
    console.log("In Get User Requests");
    register.find({}, function(err,viewlist){
        if(err) {
            console.log("Error While Getting Data");
            res.send(400);
        } else {
            // console.log(viewlist);
            console.log('Successfully Getting Data');
            res.send(viewlist);
        }
    });
})

app.listen(8000,()=>console.log('server is listening at port 8000'))