var mailer  = require('nodemailer'); 
var express = require('express');
var app = express();

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true })); 


app.use(express.static('Front'));
app.use(express.json())


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/Front/front.html')
});
app.post('/',(req,res)=>{
    console.log(req.body);
    var options ={
        from:'duraibharath2002@gmail.com',
        to:req.body.to,
        subject:req.body.subject,
        text : req.body.content,
        // html: '<h1>Welcome</h1><p>That was easy!</p>',
        attachments: [
            { filename: 'open.txt', path: "txt.txt"}
         ]
    }    
    
    
    var transport = mailer.createTransport({
        service:'gmail',
        auth:{
            user:'duraibharath2002@gmail.com',
            pass:'auoarsypkgevawwo'     
        }
    }); 
    transport.sendMail(options,function(error,info){
    
         if(error){
             console.log(error);
         }else{
             console.log('Email Send ' + info.response);
         }
    });
    

});

app.listen(3000, () => {
    console.log('Express server started');
});


// var options ={
//     from:'duraibharath2002@gmail.com',
//     to:'sreelathadurai7173@gmail.com',
//     subject:"sample",
//     text:"Welcome to NodeMailer, It's Working",
//     html: '<h1>Welcome</h1><p>That was easy!</p>',
//     attachments: [
//         { filename: 'open.txt', path: 'txt.txt' }
//      ]
// }    


// var transport = mailer.createTransport({
//     service:'gmail',
//     auth:{
//         user:'duraibharath2002@gmail.com',
//         pass:'auoarsypkgevawwo'     
//     }
// }); 
// transport.sendMail(options,function(error,info){

//      if(error){
//          console.log(error);
//      }else{
//          console.log('Email Send ' + info.response);
//      }
// });