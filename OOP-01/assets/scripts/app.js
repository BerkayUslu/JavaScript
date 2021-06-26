//video 278
//Üç tane kartı finished ve aktif listeleri arasıdna geçiş yapabilecek hale getirmeliyim
//Her bir kartın more info tuşları çalıştırılmalı


//List DOM id
const actvId = document.getElementById("active-projects").querySelector("ul"); 
const fnshId = document.getElementById("finished-projects").querySelector("ul");
//Card DOM id
const courseCardId = actvId.querySelector("#p1");
const grocCardId = actvId.querySelector("#p2");
const hotelCardId = fnshId.querySelector("#p3");
//Button DOM id
const courseInfoBtn = courseCardId.querySelector("button")
const courseToggleBtn = courseInfoBtn.nextElementSibling;
const grocInfoBtn = grocCardId.querySelector("button")
const grocToggleBtn = grocInfoBtn.nextElementSibling;
const hotelInfoBtn = hotelCardId.querySelector("button")
const hotelToggleBtn = hotelInfoBtn.nextElementSibling;

class Cards  {
  constructor(){
    const toggle = new Toggle;
  }  
}


let starter = new Bridge;