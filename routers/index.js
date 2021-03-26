const express = require("express"),
      router  = express.Router();
const langAR  = require("../lang/ar");
const langEN  = require("../lang/en");
const projects = require("../data");

// home route
router.get("/", (req,res) => {
    const data = projects('ar');
    res.render('home', { lang: langAR, projects: data });
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
module.exports = router;
