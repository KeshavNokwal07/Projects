/*=========================== typing animation ========================= */
var typed = new Typed(".typing",{
    strings:["Web Designer","Web Developer","Software Engineer","Coder"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})



// /*=========================== Aside  ========================= */
// const nav = document.querySelector(".nav"),
// navList = nav.querySelectorAll("li"),
// totalNavList = navList.length,
// allSection = document.querySelectorAll(".section"),
// totalSection = allSection.length;
// for(let i=0;i<totalNavList;i++)
//     {
//     const a = navList[i].querySelector("a");
//     a.addEventListener("click",function()
//     {
//     for(let j=0;j<totalNavList;j++)
//     {
//         if(navList[j].querySelector("a").classList.contains("active"))
//         {
//             console.log(navList[j].querySelector("a"))
//         }
//         navList[j].querySelector("a").classList.remove("active");
//     }
//     this.classList.add("active")
//     showSection(this);
// })
// }
// function showSection(element)
// {
//     for(let i=0;i<totalSection;i++){
//         allSection[i].classList.remove("active");
//     }
//     const target = element.getAttribute(href).split("#")[1];
//     document.querySelector("#" + target).classList.add("active");
// }




const nav = document.querySelector(".nav"),
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;


// ---------------------for navToggler------------------------
const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click",()=>{
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.toggle("open");
    }
}



/*========================================== contact with me ===================================================== */
const button = document.getElementById("clickbutton");
const username = document.getElementById("name");
const useremail = document.getElementById("email");

button.addEventListener("click",()=>{
    
    if(username.value == "" && useremail.value == "" ){
        alert("Oops! Please Enter your Details");
    }else{
    localStorage.setItem(username.value,useremail.value);
    location.reload();
    alert("Send Successfully");
    }

})