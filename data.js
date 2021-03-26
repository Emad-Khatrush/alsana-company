const langAR  = require("./lang/ar");
const langEN  = require("./lang/en");

const data = [{
    id: "1",
    img: "assets/img/beds.jpg" ,
    title: "Oil & Petrolium Plant",
    description: "Oil & Petrolium Plant ....."
},
{
    id: "2",
    img: "assets/img/beds.jpg" ,
    title: "Oil & Petrolium Plant",
    description: "Oil & Petrolium Plant ....."
},
{
    id: "3",
    img: "assets/img/beds.jpg" ,
    title: "Oil & Petrolium Plant",
    description: "Oil & Petrolium Plant ....."
},
{
    id: "4",
    img: "assets/img/beds.jpg" ,
    title: "Oil & Petrolium Plant",
    description: "Oil & Petrolium Plant ....."
},
{
    id: "5",
    img: "assets/img/beds.jpg" ,
    title: "Oil & Petrolium Plant",
    description: "Oil & Petrolium Plant ....."
},
{
    id: "6",
    img: "assets/img/beds.jpg" ,
    title: "Oil & Petrolium Plant",
    description: "Oil & Petrolium Plant ....."
}];
const translateData = (lang) => {
    if(lang === 'ar'){
        data.forEach(project => {
            project.title = langAR.apple;
        })
    }else{
        data.forEach(project => {
            project.title = langEN.apple;
        })
    }
    return data;
}
module.exports = translateData;