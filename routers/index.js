const express = require("express"),
      router  = express.Router();
const langAR  = require("../lang/ar");
const langEN  = require("../lang/en");
const projects = require("../data");
const nodemailer = require('nodemailer');

// home route
router.get("/", (req,res) => {
    const data = projects('ar');
    res.render('home', { lang: langAR, projects: data });
});

// project route
router.get("/project/:id/:lang", (req, res) => {
    const projectId = req.params.id;
    const currentLang = req.params.lang;
    const data = projects(currentLang);
    const currentProject = data.filter(project => {
        if(projectId === project.id){
            return project;
        }
    })[0]

    if(currentLang === "en"){
        return res.render('project', { lang: langEN, currentProject });
    }else{
        return res.render('project', { lang: langAR, currentProject });
    }
});
// contact us route
router.get("/contact", (req,res) => {
    res.render('contact', { lang: langAR });
});
router.get('/contact/:lang', ( req, res ) => {
    if(req.params.lang === "en"){
        return res.render('contact', { lang: langEN });
    }else{
        return res.render('contact', { lang: langAR });
    }
});
// Contact Route: POST
router.post("/contact/:lang", function(req,res){
      var transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: 'expotimbuildinglibya@hotmail.com',
        pass: process.env.HOTMAIL_PASS
        }
      });
  
      var mailOptions = {
        from: 'expotimbuildinglibya@hotmail.com',
        to: 'al.abd27@gmail.com',
        subject: req.body.subject,
        html: `<h3> Message from ${req.body.name}</h3> <br>
        <p><strong> Full Name:</strong> ${req.body.name || "Empty"} </p>
        <p><strong> Email: </strong>${req.body.email || "Empty"} </p>
        <p><strong> Message:</strong> ${req.body.message} </p>`
      };
  
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          req.flash("error", error.message);
          res.redirect("/contact/" + req.params.lang);
        } else {
          console.log('Email sent: ' + info.response);
          req.flash("success", ".تم ارسال الرسالة بنجاح");
          res.redirect("/contact/" + req.params.lang);
        }
      });
  });

// home lang route
router.get("/:lang", (req,res) => {
    const data = projects('en');
    if(req.params.lang === "en"){
        return res.render('home', { lang: langEN, projects: data });
    }else{
        return res.redirect("/");
    }
});
module.exports = router;
