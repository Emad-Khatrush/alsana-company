
const dataEn = [{
    id: "1",
    img: ["/assets/img/project1/1.png", "/assets/img/project1/2.png", "/assets/img/project1/3.png",
    "/assets/img/project1/4.png", "/assets/img/project1/5.png", "/assets/img/project1/6.png"],
    title: "Oil & Petrolium Plant",
    description: "Oil & Petrolium Plant .....",
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
const dataAr = [{
    id: "1",
    img: ["/assets/img/project1/1.jpg", "/assets/img/project1/1.png" ,"/assets/img/project1/2.png", "/assets/img/project1/3.png",
    "/assets/img/project1/4.png", "/assets/img/project1/5.png", "/assets/img/project1/6.png"],
    title: "مجموعة هناجر عدد 4",
    description: `بعض أعمالنا فى مدينة زليتن بمساحات مختلفة </br>
    1- عرض 36 متر وطول 95 متر وارتفاع 9 متر من الجوانب والوسط 11 متر</br>
    2- عرض 34 متر وطول 50 وارتفاع 6 متر من الجوانب والوسط 7.50 متر</br>
    3- عرض 24 متر وطول 88 وارتفاع 7.50 من الجوانب والوسط 9 متر</br>
    4- مجموعة هناجر عدد 4 مغطاة بالواح الساندوتش مخازن مواد غدائية باحجام مختلفة</br>
    وشركتنا على استعداد كامل لتصنيع وتجهيز وتركيب هناجر بعرض من 20 متر الى 50 متر والطول الى مالانهاية بدون اعمدة فى الوسط .
    كما ان الشركة مستعدة لانشاء هياكل حديدية متعددة الادوار مع التشطيب واعمال الخرسانة كاملة تسليم مفتاح`,
    year: "2020"
},
{
    id: "2",
    img: ["/assets/img/project2/1.jpg", "/assets/img/project2/1.png", "/assets/img/project2/2.png", "/assets/img/project2/3.png"],
    title: "هناقر زليتن",
    description: `أحد أعمالنا بمدينة زليتن بمسقوف مساحته 3200 متر مبربع </br>
  للتواصل والاستفسار على الرقم الاتي: 0912104152`,
     year: "2020"
},
{
    id: "3",
    img: ["/assets/img/project3/1.jpg", "/assets/img/project3/1.jpg"],
    title: "صهاريج التخزين الثابتة",
    description: `إن مجموعة خزانات وصهاريج التخزين الصناعية المتطورة من الناحية التكنولوجية، قد صممت بالاعتماد على التصنيع من الصلب الذي لا يصدأ والصلب المطاوع، وعلى أساس تخزين الاسمنت ، ويمكن الحصول على هذه الخزانات حسب طلبات الزبون`,
    year: "2020"
},
{
    id: "4",
    img: ["/assets/img/project4/1.jpg","/assets/img/project4/1.png", "/assets/img/project4/2.png", "/assets/img/project4/3.png",
    "/assets/img/project1/4.png"],
    title: "هناقر طرابلس - وادي الربيع",
    description: null,
    year: "2020"
},
{
    id: "5",
    img: ["/assets/img/project5/1.jpg","/assets/img/project5/1.png", "/assets/img/project5/2.png", "/assets/img/project5/3.png",
    "/assets/img/project5/4.png", "/assets/img/project5/5.png"],
    title: "هناقر طرابلس - طريق المشتل",
    description: null,
    year: "2021"
},
{
    id: "6",
    img: ["/assets/img/project6/1.jpg","/assets/img/project6/1.png", "/assets/img/project6/2.png", "/assets/img/project6/3.png",
    "/assets/img/project6/4.png", "/assets/img/project6/5.png"],
    title: "هناقر طرابلس - وادي الربيع",
    description: null,
    year: "2021"
}];
const translateData = (lang) => {
    if(lang === 'ar'){
        return dataAr;
    }else{
        return dataEn;
    }
}
module.exports = translateData;