let btns = document.querySelectorAll(".links > button"); 
let pagePart = document.querySelectorAll(".display > div");
let linkField = document.querySelector(".links"); 
let toggler = document.querySelector(".toggler");
let display = document.querySelector(".display");
let retoggler = document.querySelector(".reToggler");
let pFields = document.querySelectorAll(".skillPouEmpty > .skillPou"); 
let skillFields = document.querySelectorAll(".skill"); 
pFields.forEach((pField)=>{
    pField.style.width = `${Number.parseInt(pField.getAttribute("data-pour"))}%`;
}); 
skillFields.forEach((skillField)=>{
    let pourcentage = skillField.querySelector('.skillPouEmpty > .skillPou').getAttribute("data-pour");
    let span = document.createElement("span"); 
    let spanContent = document.createTextNode(`${pourcentage}%`);
    span.append(spanContent);
    span.style.left = `calc(${Number.parseInt(pourcentage)}% - 15px)`;
    skillField.append(span);
})
btns.forEach((btn)=>{
    btn.addEventListener("click",()=> {
        pagePart.forEach((part)=>{
            part.classList.remove("active");
        })
        btns.forEach((btn)=>{
            btn.querySelector("i").style.color = getComputedStyle(document.documentElement).getPropertyValue("--light-color");
        })
        document.getElementById(btn.getAttribute("data-target")).classList.add("active");
        btn.querySelector("i").style.color = getComputedStyle(document.documentElement).getPropertyValue("--secodary-color");
    })
}); 
toggler.addEventListener("click",()=> {
    linkField.classList.add("active"); 
    toggler.style.display = "none"; 
    retoggler.style.display = "block";
    btns.forEach((btn)=>{
        btn.innerHTML += `<h4>${btn.getAttribute("data-target")}</h4>`;
    });
})
retoggler.addEventListener("click",()=>{
    linkField.classList.remove("active"); 
    toggler.style.display = "block"; 
    retoggler.style.display = "none";
    btns.forEach((btn)=>{
        btn.removeChild(btn.lastChild);
    });
})